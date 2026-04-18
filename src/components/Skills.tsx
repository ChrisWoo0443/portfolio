import Section from "./Section";

const groups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "Java", "Rust"],
  },
  {
    label: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "HuggingFace",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "Vector DBs",
      "wandb",
      "mlflow",
    ],
  },
  {
    label: "Backend & Infra",
    items: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Milvus",
      "ChromaDB",
      "Docker",
      "Linux",
    ],
  },
  {
    label: "Tooling",
    items: [
      "React",
      "Electron",
      "Vite",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Tesseract",
      "Pytest",
      "Vitest",
    ],
  },
];

export default function Skills() {
  return (
    <Section label="04 — Stack">
      <dl className="grid grid-cols-1 gap-10 md:grid-cols-[10rem_1fr] md:gap-x-10 md:gap-y-6">
        {groups.map((g) => (
          <div key={g.label} className="contents">
            <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {g.label}
            </dt>
            <dd className="flex flex-wrap gap-x-3 gap-y-2 text-[15px] text-ink/85">
              {g.items.map((it, i) => (
                <span key={it} className="inline-flex items-center gap-3">
                  <span>{it}</span>
                  {i < g.items.length - 1 && (
                    <span aria-hidden className="text-muted/70">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
