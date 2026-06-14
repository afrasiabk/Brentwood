"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Calendar, Award, Globe } from "lucide-react";

const metrics = [
  { icon: Briefcase, value: "200+", label: "Projects shipped" },
  { icon: Users, value: "50+", label: "Active clients" },
  { icon: Calendar, value: "5+", label: "Years building" },
  { icon: Award, value: "15+", label: "Industry awards" },
  { icon: Globe, value: "10+", label: "Countries served" },
];

export default function CompanyMetrics() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="eyebrow mx-auto">By the numbers</span>
          <h2 className="fluid-h2 text-white mt-6 text-balance">
            A track record that{" "}
            <span className="font-serif-italic brand-gradient">speaks softly</span>
            <br />
            and rarely needs to.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative glass rounded-2xl p-6 sm:p-7 overflow-hidden hover-lift"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(251,191,36,0.25), transparent 60%)",
                }}
              />
              <div className="relative">
                <m.icon className="w-5 h-5 text-amber-200/80 mb-5" strokeWidth={1.5} />
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight brand-gradient">
                  {m.value}
                </div>
                <div className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/50">
                  {m.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
