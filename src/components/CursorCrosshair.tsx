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

  return active ? <Overlay /> : null;
}

function labelFor(target: Element): string {
  const custom = target.closest<HTMLElement>("[data-cursor]");
  if (custom?.dataset.cursor) return custom.dataset.cursor;
  const link = target.closest("a");
  if (link) {
    const href = link.getAttribute("href") ?? "";
    if (href.startsWith("mailto:")) return "email ↗";
    if (href.startsWith("tel:")) return "call →";
    if (href.startsWith("#")) return "go →";
    if (link.target === "_blank") return "open ↗";
    return "open →";
  }
  if (target.closest("button")) return "view +";
  return "";
}

function Overlay() {
  const linesRoot = useRef<HTMLDivElement>(null);
  const markRoot = useRef<HTMLDivElement>(null);
  const lineH = useRef<HTMLDivElement>(null);
  const lineV = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLDivElement>(null);
  const hoverLabel = useRef("");

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const linesEl = linesRoot.current;
      const markEl = markRoot.current;
      const lineHEl = lineH.current;
      const lineVEl = lineV.current;
      const dotEl = dot.current;
      const tagEl = tag.current;
      if (!linesEl || !markEl || !lineHEl || !lineVEl || !dotEl || !tagEl) return;
      const x = Math.round(e.clientX);
      const y = Math.round(e.clientY);
      document.documentElement.classList.add("crosshair-live");
      linesEl.style.opacity = "1";
      markEl.style.opacity = "1";
      lineHEl.style.transform = `translateY(${y}px)`;
      lineVEl.style.transform = `translateX(${x}px)`;
      dotEl.style.transform = `translate(${x - 1.5}px, ${y - 1.5}px)`;
      tagEl.style.transform = `translate(${x + 12}px, ${y + 12}px)`;
      if (!hoverLabel.current) {
        tagEl.textContent = `${x} · ${y}`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const linesEl = linesRoot.current;
      const markEl = markRoot.current;
      const tagEl = tag.current;
      if (!linesEl || !markEl || !tagEl) return;
      const label = e.target instanceof Element ? labelFor(e.target) : "";
      hoverLabel.current = label;
      if (label) tagEl.textContent = label;
      linesEl.classList.toggle("crosshair-hover", label !== "");
      markEl.classList.toggle("crosshair-hover", label !== "");
    };
    const hide = () => {
      const linesEl = linesRoot.current;
      const markEl = markRoot.current;
      if (!linesEl || !markEl) return;
      document.documentElement.classList.remove("crosshair-live");
      linesEl.style.opacity = "0";
      markEl.style.opacity = "0";
    };
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) hide();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("blur", hide);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("blur", hide);
      document.documentElement.classList.remove("crosshair-live");
    };
  }, []);

  return (
    <>
      <div
        ref={linesRoot}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-300"
      >
        <div ref={lineH} className="cx-line absolute left-0 top-0 h-px w-full will-change-transform" />
        <div ref={lineV} className="cx-line absolute left-0 top-0 h-full w-px will-change-transform" />
      </div>
      <div
        ref={markRoot}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] opacity-0 transition-opacity duration-300"
      >
        <div ref={dot} className="absolute left-0 top-0 h-[3px] w-[3px] rounded-full bg-ink will-change-transform" />
        <div
          ref={tag}
          className="cx-tag absolute left-0 top-0 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] will-change-transform"
        />
      </div>
    </>
  );
}
