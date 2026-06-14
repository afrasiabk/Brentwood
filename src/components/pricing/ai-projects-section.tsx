"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Eye, Zap } from "lucide-react";

const tiers = [
  {
    icon: Brain,
    title: "Custom AI Models",
    range: "$15k – $80k",
    body: "Bespoke ML models trained on your data — from forecasting to recommendation engines.",
  },
  {
    icon: MessageSquare,
    title: "LLM-powered Apps",
    range: "$8k – $40k",
    body: "Chatbots, copilots, RAG pipelines and AI-augmented workflows shipped end-to-end.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    range: "$12k – $60k",
    body: "Detection, segmentation and tracking systems for industrial, retail and healthcare contexts.",
  },
  {
    icon: Zap,
    title: "Agentic Automation",
    range: "$10k – $50k",
    body: "Multi-step AI agents that take real actions in your stack — sales, ops or research.",
  },
];

export default function AIProjectsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <span className="eyebrow">AI Engagements</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              AI projects, scoped{" "}
              <span className="font-serif-italic brand-gradient">honestly.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-white/55 self-end leading-relaxed">
            Indicative ranges below — we give a precise quote after a 60-minute
            scoping call once we understand your data and constraints.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group glass rounded-2xl p-7 hover-lift"
            >
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-6 group-hover:bg-amber-300/10 transition-colors">
                <t.icon className="w-5 h-5 text-amber-200" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
                {t.title}
              </h3>
              <div className="text-sm font-medium brand-gradient mb-4">
                {t.range}
              </div>
              <p className="text-[13.5px] text-white/55 leading-relaxed">
                {t.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
