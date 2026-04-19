import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Route = { label: string; href: string };

const routes: Route[] = [
  { label: "portfolio", href: "#top" },
  { label: "work", href: "#work" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [open, setOpen] = useState(false);
  const [currentHref, setCurrentHref] = useState("#top");
  const menuRef = useRef<HTMLDivElement | null>(null);

  // close on outside tap / Esc
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // scroll-spy: update current route as user scrolls
  useEffect(() => {
    const ids = routes.map((r) => r.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setCurrentHref(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  const current = routes.find((r) => r.href === currentHref) ?? routes[0];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        {/* mobile: dropdown route selector */}
        <div ref={menuRef} className="relative md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="menu"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.22em]"
          >
            <span>cw/</span>
            <span className="text-ink">{current.label}</span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
              className="ml-0.5 text-muted"
            >
              ▾
            </motion.span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.ul
                role="menu"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-[calc(100%+12px)] min-w-[11rem] overflow-hidden rounded-md border border-line bg-canvas shadow-[0_10px_30px_-12px_rgba(21,21,19,0.2)]"
              >
                {routes.map((r) => {
                  const active = r.href === currentHref;
                  return (
                    <li key={r.href} role="none">
                      <a
                        href={r.href}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between gap-4 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.22em] transition hover:bg-line/40 ${
                          active ? "text-ink" : "text-muted"
                        }`}
                      >
                        <span>
                          cw/<span className="text-ink">{r.label}</span>
                        </span>
                        {active && (
                          <span aria-hidden className="text-[10px] text-muted">
                            ●
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* desktop: logo + inline links (unchanged) */}
        <a
          href="#top"
          className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] md:flex"
        >
          cw/<span className="text-muted">portfolio</span>
          <span className="ml-2 hidden rounded-full border border-line px-2 py-0.5 text-[10px] text-muted sm:inline">
            new grad &apos;26
          </span>
        </a>
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] md:flex">
          <a href="#work" className="text-muted transition hover:text-ink">
            Work
          </a>
          <a href="#projects" className="text-muted transition hover:text-ink">
            Projects
          </a>
          <a href="#contact" className="text-muted transition hover:text-ink">
            Contact
          </a>
        </nav>

        {/* mobile only: new-grad pill on the right */}
        <span className="ml-2 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted md:hidden">
          new grad &apos;26
        </span>
      </div>
      <motion.div
        style={{ width: progressWidth }}
        className="h-px bg-ink/80"
      />
    </motion.header>
  );
}
