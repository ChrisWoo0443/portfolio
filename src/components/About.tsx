import { motion } from "motion/react";
import Section from "./Section";

export default function About() {
  return (
    <Section label="01 — About">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr] md:gap-16">
        <div className="space-y-5 text-[17px] leading-[1.7] text-ink/85">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            I&apos;m a{" "}
            <span className="font-medium text-ink">new grad</span> out of UC
            Riverside — B.S. Computer Science with Business Applications,
            Jun&nbsp;2026 — currently looking for full-time software and AI
            engineering roles.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Most recently I shipped agent observability and retrieval infra
            at <span className="font-medium text-ink">Deepiri</span>, built
            document pipelines at{" "}
            <span className="font-medium text-ink">Extern</span>, and
            designed n8n agent workflows for home-goods trend analytics at{" "}
            <span className="font-medium text-ink">Wayfair</span>. Before
            that I did NLP research at{" "}
            <span className="font-medium text-ink">Algoverse</span> — cutting
            transformer contradiction rates by 4.8&nbsp;pp with a
            mutual-information regularizer. I like the boring parts: evals,
            retrieval quality, and the glue in between.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Outside of work I write shell tools in Rust, ship small Electron
            apps, and read more papers than I probably need to.
          </motion.p>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5 font-mono text-[12px] uppercase tracking-[0.15em] text-muted"
        >
          <div>
            <dt className="text-ink/50">Education</dt>
            <dd className="mt-1 normal-case tracking-normal text-ink">
              UC Riverside — B.S. CS + Business
              <span className="mt-0.5 block text-muted">
                Class of 2026
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-ink/50">Focus</dt>
            <dd className="mt-1 normal-case tracking-normal text-ink">
              Applied ML · RAG · Agents
            </dd>
          </div>
          <div>
            <dt className="text-ink/50">Looking for</dt>
            <dd className="mt-1 normal-case tracking-normal text-ink">
              New-grad SWE / AI Eng roles
              <span className="mt-0.5 block text-muted">
                Starting Jun 2026
              </span>
            </dd>
          </div>
        </motion.dl>
      </div>
    </Section>
  );
}
