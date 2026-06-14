"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Palette,
  Cloud,
  BarChart3,
  Headphones,
  Zap,
} from "lucide-react";

const services = [
  { icon: Shield, title: "Cybersecurity", body: "Protecting digital assets with audited code and active monitoring." },
  { icon: Palette, title: "UI / UX Design", body: "User-centred craft that respects both pixels and people." },
  { icon: Cloud, title: "Cloud Services", body: "Scalable infrastructure across AWS, GCP and Azure." },
  { icon: BarChart3, title: "Data Analytics", body: "Turning raw data into clear, defensible decisions." },
  { icon: Headphones, title: "24/7 Support", body: "On-call engineers across time zones — never an answering machine." },
  { icon: Zap, title: "Performance", body: "Profiling, tuning and reshaping systems for speed at scale." },
];

export default function AdditionalServices() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="eyebrow">Beyond the headlines</span>
          <h2 className="fluid-h2 text-white mt-6 text-balance">
            Additional{" "}
            <span className="font-serif-italic brand-gradient">services.</span>
          </h2>
          <p className="mt-6 text-white/55 text-lg leading-relaxed">
            The supporting practices that take a good launch and turn it into a
            business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:bg-amber-300/10 transition-colors">
                  <s.icon className="w-5 h-5 text-amber-200" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="text-[14px] text-white/55 leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
