import { useEffect, useRef, useState } from "react";

export default function CursorCrosshair() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setActive(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("crosshair-on", active);
    return () => document.documentElement.classList.remove("crosshair-on");
  }, [active]);

  return active ? <Overlay /> : null;
}

function Overlay() {
  const root = useRef<HTMLDivElement>(null);
  const lineH = useRef<HTMLDivElement>(null);
  const lineV = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = Math.round(e.clientX);
      const y = Math.round(e.clientY);
      root.current!.style.opacity = "1";
      lineH.current!.style.transform = `translateY(${y}px)`;
      lineV.current!.style.transform = `translateX(${x}px)`;
      dot.current!.style.transform = `translate(${x - 1.5}px, ${y - 1.5}px)`;
      tag.current!.style.transform = `translate(${x + 12}px, ${y + 12}px)`;
      tag.current!.textContent = `${x} · ${y}`;
    };
    const hide = () => {
      if (root.current) root.current.style.opacity = "0";
    };
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) hide();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("blur", hide);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-300"
    >
      <div ref={lineH} className="cx-line absolute left-0 top-0 h-px w-full will-change-transform" />
      <div ref={lineV} className="cx-line absolute left-0 top-0 h-full w-px will-change-transform" />
      <div ref={dot} className="absolute left-0 top-0 h-[3px] w-[3px] rounded-full bg-ink will-change-transform" />
      <div
        ref={tag}
        className="cx-tag absolute left-0 top-0 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] will-change-transform"
      />
    </div>
  );
}
