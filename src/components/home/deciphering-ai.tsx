"use client";

import { motion } from "framer-motion";

export default function DecipheringAI() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] sm:w-[80%] aspect-square pointer-events-none -z-0">
        <div className="absolute inset-0 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.4), transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center"
          >
            <span className="eyebrow">AI Practice</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="fluid-h2 text-white mt-7 text-balance"
          >
            Deciphering{" "}
            <span className="font-serif-italic brand-gradient">artificial intelligence</span>{" "}
            until it&apos;s simply useful.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed text-pretty"
          >
            We work across machine learning, NLP, computer vision and
            agentic workflows — but only deploy what survives a hard demo. The
            promise of AI deserves more rigour than its hype suggests, and our
            clients deserve the difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 flex flex-wrap justify-center gap-2.5"
          >
            {[
              "LLM Apps",
              "RAG Pipelines",
              "Agents",
              "Computer Vision",
              "Forecasting",
              "Speech",
              "Recommendation",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-[13px] glass text-white/75 hover:text-white hover:border-amber-300/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
