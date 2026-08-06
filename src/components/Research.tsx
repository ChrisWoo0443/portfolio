import { motion } from "motion/react";
import Section from "./Section";
import AnimatedLink from "./AnimatedLink";

type Paper = {
  status: string;
  venue: string;
  title: string;
  authors: string[];
  description: string;
  href?: string;
};

const papers: Paper[] = [
  {
    status: "Under review",
    venue: "KDD 2026",
    title:
      "Mutual Information Transfer Regularization for Logical Consistency: A Controlled Empirical Study",
    authors: ["Chris Woo", "Jessica Chen", "Jacob Dang", "Archana Vaidheeswaran"],
    description:
      "A controlled empirical study of MITR, a representation-level regularizer that discourages adjacent transformer layers from making redundant residual contributions, testing whether more distinct per-layer computation reduces logical contradictions in binary QA. Across an estimator screen, InfoNCE scaling to BERT and RoBERTa, a weight sweep, and five-seed replication, MITR's gains are small and unstable compared to direct supervision on negated examples.",
    href: "https://openreview.net/pdf?id=gUuGmzkxBP"
  },
];

export default function Research() {
  return (
    <Section label="04 — Research">
      <ul className="space-y-12 md:space-y-16">
        {papers.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4 md:grid-cols-[10rem_1fr] md:gap-10"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <div className="text-ink/70">{p.status}</div>
              <div className="mt-1">{p.venue}</div>
            </div>

            <div>
              <h3 className="max-w-xl font-serif text-2xl font-[350] leading-[1.2] tracking-tight md:text-3xl">
                {p.title}
              </h3>

              <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
                {p.authors.map((a, j) => (
                  <span key={a}>
                    <span className={a === "Chris Woo" ? "text-ink" : undefined}>
                      {a}
                    </span>
                    {j < p.authors.length - 1 && " · "}
                  </span>
                ))}
              </div>

              <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-ink/80">
                {p.description}
              </p>

              {p.href && (
                <div className="mt-4">
                  <AnimatedLink href={p.href} external>
                    Paper
                  </AnimatedLink>
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
