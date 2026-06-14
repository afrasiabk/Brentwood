"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Zap } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Cybersecurity",
    body: "Hardened networks, audited code paths, and pen-tested releases. Security as a constant, not a milestone.",
  },
  {
    icon: Lock,
    title: "Data privacy",
    body: "GDPR, HIPAA and SOC-aligned data flows. Compliance designed in — not bolted on at the deadline.",
  },
  {
    icon: Eye,
    title: "Threat detection",
    body: "Real-time anomaly monitoring with an alert pipeline tuned to humans, not just dashboards.",
  },
  {
    icon: Zap,
    title: "Rapid response",
    body: "On-call specialists across timezones. Incidents triaged in minutes, fixed in hours, post-mortems shared in days.",
  },
];

export default function SecureSolutions() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 sm:mb-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">Trust layer</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              Secure solutions, built like{" "}
              <span className="font-serif-italic brand-gradient">heirlooms.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-white/55 text-lg leading-relaxed">
            Enterprises trust us with critical infrastructure because we treat
            security as a craft. Every layer — from the kernel to the marketing
            site — passes through the same rigorous review.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-6 group-hover:bg-amber-300/10 transition-colors">
                <it.icon className="w-5 h-5 text-amber-200" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {it.title}
              </h3>
              <p className="text-[14px] text-white/55 leading-relaxed">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
