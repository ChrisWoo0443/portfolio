import { motion } from "motion/react";
import Section from "./Section";
import AnimatedLink from "./AnimatedLink";

export default function Contact() {
  return (
    <Section id="contact" label="05 — Contact" className="pb-12">
      <div className="space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl font-serif text-4xl font-[350] leading-[1.1] tracking-tightest md:text-6xl"
        >
          Let&apos;s build something
          <span className="italic text-muted"> measurable.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-lg text-[16px] leading-[1.7] text-ink/80"
        >
          I&apos;m open to new-grad software engineering and AI engineering
          roles starting June 2026. Always happy to chat about retrieval,
          evals, or agent infra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <AnimatedLink
            href="mailto:chris.woo1348@gmail.com"
            external
            className="py-2 text-lg"
          >
            chris.woo1348@gmail.com
          </AnimatedLink>
          <AnimatedLink
            href="https://linkedin.com/in/chris-woo04"
            external
            className="py-2 text-lg"
          >
            linkedin.com/in/chris-woo04
          </AnimatedLink>
          <AnimatedLink
            href="https://github.com/ChrisWoo0443"
            external
            className="py-2 text-lg"
          >
            github.com/ChrisWoo0443
          </AnimatedLink>
          <AnimatedLink href="tel:+14159691348" className="py-2 text-lg">
            (415) 969-1348
          </AnimatedLink>
        </motion.div>
      </div>
    </Section>
  );
}
