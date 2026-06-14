"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({
  title,
  description,
  eyebrow = "Brentwood",
  ctaLabel = "Start a project",
  ctaHref = "/contact-us",
}: PageHeroProps) {
  const parts = title.trim().split(" ");
  const main = parts.slice(0, -1).join(" ");
  const last = parts[parts.length - 1];

  return (
    <section className="relative min-h-[68vh] sm:min-h-[78vh] flex items-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[120vw] sm:w-[80vw] h-[80vh] rounded-full opacity-55 blur-[120px] animate-aurora"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.4), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[60vw] h-[60vh] rounded-full opacity-40 blur-[100px] animate-aurora"
          style={{
            animationDelay: "-12s",
            background:
              "radial-gradient(circle, rgba(192,132,252,0.35), transparent 60%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(245,241,234,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,241,234,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <span className="eyebrow">
              <Sparkles className="w-3 h-3" /> {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="fluid-display text-[#f5f1ea] text-balance leading-[0.95]"
          >
            {main && <>{main} </>}
            <span className="font-serif-italic brand-gradient inline-block pr-[0.18em]">{last}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed text-pretty"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10"
          >
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f5f1ea] text-black font-medium hover:bg-amber-200 transition-all duration-300"
            >
              {ctaLabel}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
