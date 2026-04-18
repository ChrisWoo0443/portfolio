import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Section from "./Section";
import AnimatedLink from "./AnimatedLink";

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlight: string;
  href?: string;
};

const projects: Project[] = [
  {
    name: "AliasT",
    tagline: "ZSH autocomplete — sub-100ms.",
    description:
      "Async Rust daemon serving inline ghost-text suggestions to iTerm, Terminal, and Kitty via Unix sockets. Hotkey-triggered natural-language-to-shell with pluggable local + cloud LLM backends and a local-first SQLite history.",
    stack: ["Rust", "Tokio", "Zsh", "SQLite", "Homebrew"],
    highlight: "< 100ms",
    href: "https://github.com/ChrisWoo0443/AliasT",
  },
  {
    name: "MINT",
    tagline: "Realtime meeting intelligence.",
    description:
      "Electron app capturing dual audio streams on Apple devices with Web Audio + Deepgram. On-demand AI notes — summaries, decisions, action items — via GPT-4o and local Ollama, stored as Markdown.",
    stack: ["Electron", "React", "TypeScript", "Deepgram", "OpenAI"],
    highlight: "Realtime",
    href: "https://github.com/ChrisWoo0443/MINT",
  },
  {
    name: "AIRA",
    tagline: "Full-stack RAG for PDFs.",
    description:
      "Semantic search and context-aware answers over uploaded documents. FastAPI + React + ChromaDB with Ollama embeddings, multi-turn chat with persistent history streamed over SSE, and SQLite session management.",
    stack: ["Python", "FastAPI", "React", "ChromaDB", "SSE"],
    highlight: "Streaming",
    href: "https://github.com/ChrisWoo0443/AIRA",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="projects" label="03 — Projects">
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.name} className="py-6 md:py-8">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-baseline justify-between gap-6 text-left"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] tabular-nums text-muted">
                    0{i + 1}
                  </span>
                  <motion.h3
                    animate={{ x: isOpen ? 8 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-3xl font-[350] tracking-tight md:text-4xl"
                  >
                    {p.name}
                    <span className="ml-3 font-sans text-base italic font-light text-muted">
                      — {p.tagline}
                    </span>
                  </motion.h3>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden
                  className="inline-block font-mono text-xl text-muted group-hover:text-ink"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 grid grid-cols-1 gap-6 pl-0 md:grid-cols-[1fr_auto] md:gap-10 md:pl-12">
                      <p className="max-w-xl text-[15px] leading-[1.7] text-ink/80">
                        {p.description}
                      </p>
                      <div className="space-y-3 text-right">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                          {p.highlight}
                        </div>
                        {p.href && (
                          <AnimatedLink href={p.href} external>
                            Source
                          </AnimatedLink>
                        )}
                      </div>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-1.5 pl-0 md:pl-12">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-sm border border-line bg-line/30 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
