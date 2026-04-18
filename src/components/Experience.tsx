import { motion } from "motion/react";
import Section from "./Section";

type Role = {
  period: string;
  role: string;
  company: string;
  mode: string;
  bullets: string[];
  stack: string;
};

const roles: Role[] = [
  {
    period: "Dec 2025 — Mar 2026",
    role: "AI Engineer Intern",
    company: "Deepiri",
    mode: "Remote · US",
    bullets: [
      "Built a centralized AI observability dashboard (React + LangChain + LangGraph) with Ollama-backed local inference for rapid, cost-effective iteration on agent behaviors.",
      "Scaled RAG infra — Milvus for vector search, Postgres for metadata, Redis for session + ingestion state.",
      "Shipped secure Docker deploys, patched critical JWT vulnerabilities via high-entropy secrets, and wrote automated auth test suites.",
    ],
    stack: "React · LangChain · LangGraph · Milvus · Postgres · Redis · Docker",
  },
  {
    period: "Jan 2026 — Mar 2026",
    role: "Outamation Extern",
    company: "Extern",
    mode: "Remote · US",
    bullets: [
      "Built modular AI pipelines — OCR, PDF parsing, RAG extraction — to process and search 200+ page mortgage documents.",
      "Tuned retrieval via chunking, metadata filters, and multi-doc indexing with LlamaIndex + open-source LLMs.",
      "Owned system evaluation: OCR accuracy, retrieval quality, routing performance, and a stakeholder demo UI.",
    ],
    stack: "LlamaIndex · Tesseract · PaddleOCR · PyMuPDF · Python",
  },
  {
    period: "Oct 2025 — Dec 2025",
    role: "AI Wayfair Extern",
    company: "Extern",
    mode: "Remote · US",
    bullets: [
      "Built multiple AI agents in n8n, automating workflows for trend detection, competitor tracking, and marketing content generation.",
      "Ran trend analysis across the home-goods sector — consumer demand, style preferences, design narratives — and tracked competitor pricing, launches, and campaigns into structured insights.",
      "Consolidated agent outputs into a live-updating Google Sheets dashboard merging trend signals, competitive benchmarks, and AI-generated insights for category decision-making.",
    ],
    stack: "n8n · LLM Agents · Google Sheets · Data pipelines",
  },
  {
    period: "Jun 2025 — Dec 2025",
    role: "AI Researcher",
    company: "Algoverse",
    mode: "Remote · US",
    bullets: [
      "Reduced transformer contradiction rates by 4.8 pp by designing MITR (Mutual Information Transfer Regularization), a layer-redundancy penalty.",
      "Benchmarked four MI estimators (CLUB, InfoNCE, Cosine, CKA) on DistilBERT+BoolQ; picked CKA for its parameter-free stability.",
      "Built the fine-tune + eval pipeline on PyTorch + HuggingFace across 500 negation-based test pairs.",
    ],
    stack: "PyTorch · HuggingFace · DistilBERT · BoolQ",
  },
];

export default function Experience() {
  return (
    <Section id="work" label="02 — Experience">
      <ul className="space-y-12 md:space-y-16">
        {roles.map((r, i) => (
          <motion.li
            key={r.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-1 gap-4 md:grid-cols-[10rem_1fr] md:gap-10"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <div className="tabular-nums text-ink/70">{r.period}</div>
              <div className="mt-1">{r.mode}</div>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-serif text-2xl font-[350] tracking-tight md:text-3xl">
                  {r.role}
                </h3>
                <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
                  @ {r.company}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-[15px] leading-[1.65] text-ink/80">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.65em] inline-block h-[3px] w-[3px] shrink-0 rounded-full bg-muted"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {r.stack}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
