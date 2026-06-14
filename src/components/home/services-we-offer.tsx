"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Brain,
  Shield,
  Cloud,
  Palette,
  BarChart3,
  Gamepad2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Web Engineering", body: "Production-grade Next.js, TypeScript and edge architectures." },
  { icon: Smartphone, title: "Mobile Apps", body: "Native iOS, Android and React Native for products people return to." },
  { icon: Brain, title: "AI Solutions", body: "From RAG to agents — useful, fast and grounded in your data." },
  { icon: Shield, title: "Cybersecurity", body: "Threat modelling, audits and 24/7 incident response." },
  { icon: Cloud, title: "Cloud Services", body: "AWS, GCP and Azure migrations that don't blow the budget." },
  { icon: Palette, title: "UI/UX Design", body: "Interfaces with taste, restraint and obvious craft." },
  { icon: BarChart3, title: "Data & Analytics", body: "Pipelines, dashboards and decisions backed by clean numbers." },
  { icon: Gamepad2, title: "Game Development", body: "Unity, Unreal and WebGL experiences with high frame budgets." },
];

export default function ServicesWeOffer() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">Services</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              Eight disciplines.{" "}
              <span className="font-serif-italic brand-gradient">
                One studio.
              </span>
            </h2>
          </div>
          <p className="text-white/55 lg:max-w-md text-pretty">
            Our specialists collaborate as one team — so your AI engineer talks
            to your product designer, not through six tickets and a Slack
            handover.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative glass rounded-2xl p-6 sm:p-7 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(251,191,36,0.12), transparent 60%)",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:bg-amber-300/10 transition-colors">
                    <s.icon className="w-5 h-5 text-amber-200" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-white/55 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-white font-medium hover:bg-white/[0.07] transition-all duration-300 group"
          >
            All services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
