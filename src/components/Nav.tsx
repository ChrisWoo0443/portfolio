import { motion, useScroll, useTransform } from "motion/react";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em]"
          >
            cw/<span className="text-muted">portfolio</span>
            <span className="ml-2 hidden rounded-full border border-line px-2 py-0.5 text-[10px] text-muted sm:inline">
              new grad &apos;26
            </span>
          </a>
          <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.22em]">
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
        </div>
        <motion.div
          style={{ width: progressWidth }}
          className="h-px bg-ink/80"
        />
      </motion.header>
    </>
  );
}
