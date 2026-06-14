"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For individuals & quick launches",
    price: "$1.5k",
    cadence: "starting",
    features: [
      "Single landing page or marketing site",
      "Mobile-first responsive design",
      "Basic SEO & analytics setup",
      "1 round of revisions",
      "Delivery in 2 weeks",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Studio",
    tagline: "For startups & growing teams",
    price: "$8k",
    cadence: "starting",
    features: [
      "Full marketing site or web app",
      "Custom design & component library",
      "API & CMS integrations",
      "Performance & SEO optimised",
      "Unlimited revisions during scope",
      "Delivery in 6–8 weeks",
      "30 days of post-launch support",
    ],
    cta: "Talk to us",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For ambitious products at scale",
    price: "Custom",
    cadence: "tailored",
    features: [
      "Multi-platform applications",
      "AI / Blockchain integrations",
      "Dedicated team & weekly cadence",
      "Architectural review & audits",
      "SLA-backed support contract",
      "Phased multi-quarter delivery",
    ],
    cta: "Request proposal",
    highlighted: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="eyebrow mx-auto">Plans</span>
          <h2 className="fluid-h2 text-white mt-6 text-balance">
            Pick a starting point.{" "}
            <span className="font-serif-italic brand-gradient">
              Scale as you go.
            </span>
          </h2>
          <p className="mt-6 text-white/55 leading-relaxed">
            Every plan can grow with you. We size engagements to outcomes —
            never to fill calendars.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col ${
                p.highlighted
                  ? "glass-strong glow-aurora border-amber-300/30"
                  : "glass"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] bg-amber-300 text-black font-medium">
                  Most chosen
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {p.name}
                </h3>
                <p className="text-[13px] text-white/50 mt-1">{p.tagline}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-white/5">
                <span
                  className={`text-5xl font-semibold tracking-tight ${
                    p.highlighted ? "brand-gradient" : "text-white"
                  }`}
                >
                  {p.price}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/40">
                  {p.cadence}
                </span>
              </div>

              <ul className="flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14px] text-white/75"
                  >
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
                      <Check
                        className="w-2.5 h-2.5 text-amber-200"
                        strokeWidth={2.5}
                      />
                    </span>
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us"
                className={`mt-10 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-medium transition-all duration-300 group ${
                  p.highlighted
                    ? "bg-white text-black hover:bg-amber-200"
                    : "glass text-white hover:bg-white/[0.07]"
                }`}
              >
                {p.cta}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
