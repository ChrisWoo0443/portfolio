import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "AI engineer.",
  "full-stack tinkerer.",
  "ex-researcher.",
  "new grad, Jun 2026.",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const rotate = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(now);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const container: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
  };
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section id="top" className="pt-32 md:pt-44">
      <motion.div variants={container} initial="hidden" animate="shown">
        <motion.div
          variants={item}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted"
        >
          <span className="pulse-dot" aria-hidden />
          New grad — open to full-time, Jun 2026
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-10 font-serif text-[clamp(3rem,9vw,6rem)] font-[350] leading-[0.95] tracking-tightest reading"
        >
          Chris Woo
          <span className="caret text-ink/80" aria-hidden />
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85 md:text-xl"
        >
          Software engineer based in San Francisco. I build LLM systems —
          agents, RAG pipelines, evals — and the quiet infrastructure that
          keeps them honest.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12px] text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <span className="text-ink/50">role</span>
            <span className="relative inline-block min-w-[12rem] text-ink">
              {roles.map((r, i) => (
                <motion.span
                  key={r}
                  aria-hidden={i !== idx}
                  initial={false}
                  animate={{
                    opacity: i === idx ? 1 : 0,
                    y: i === idx ? 0 : 6,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0"
                >
                  {r}
                </motion.span>
              ))}
              <span className="invisible">{roles[0]}</span>
            </span>
          </span>
          <span>
            <span className="text-ink/50">loc</span>{" "}
            <span className="text-ink">San Francisco, CA</span>
          </span>
          <span>
            <span className="text-ink/50">time</span>{" "}
            <span className="text-ink tabular-nums">{time} PT</span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
