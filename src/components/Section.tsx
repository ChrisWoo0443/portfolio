import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, label, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {label}
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px flex-1 origin-left bg-line"
          />
        </div>
        {children}
      </motion.div>
    </section>
  );
}
