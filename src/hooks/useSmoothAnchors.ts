import { useEffect } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function animateScroll(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startT = performance.now();

  const step = (now: number) => {
    const elapsed = now - startT;
    const t = Math.min(1, elapsed / duration);
    window.scrollTo(0, startY + distance * easeOutCubic(t));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function useSmoothAnchors(offset = 16) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector<HTMLElement>(href);
      if (!el) return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - offset;
      animateScroll(targetY);
      history.pushState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [offset]);
}
