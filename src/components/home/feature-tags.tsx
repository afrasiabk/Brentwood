"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Define your vision",
    body: "We sit down, ask the awkward questions, and translate your ambition into a precise brief.",
  },
  {
    n: "02",
    title: "Design with clarity",
    body: "Every pixel, contract and microcopy is interrogated. Beautiful work is also obvious work.",
  },
  {
    n: "03",
    title: "Deliver with confidence",
    body: "We ship in milestones with telemetry, not promises. You will always know what you bought.",
  },
];

export default function FeatureTags() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-px rounded-3xl overflow-hidden glass">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-[rgba(5,3,8,0.6)] p-8 sm:p-10 group relative overflow-hidden"
            >
              {/* subtle hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, rgba(251,191,36,0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-amber-200/70">
                    Step {s.n}
                  </span>
                  <span className="font-serif-italic text-2xl text-white/20">
                    /{i + 1}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-[15px]">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
