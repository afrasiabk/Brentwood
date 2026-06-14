"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectInMind() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      {/* Big atmospheric orb */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] sm:w-[100%] aspect-square">
          <div className="absolute inset-0 rounded-full opacity-50 blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.4), rgba(251,113,133,0.2) 50%, transparent 70%)",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="fluid-display text-white text-balance leading-[0.95]">
            Have a project
            <br />
            <span className="font-serif-italic brand-gradient inline-block pr-[0.18em]">in mind?</span>
          </h2>

          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-pretty">
            Let&apos;s turn your vision into something tangible. Send us the brief
            — we&apos;ll respond within one business day with first thoughts and
            next steps.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/contact-us"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-black font-medium hover:bg-amber-200 transition-all duration-300"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass text-white font-medium hover:bg-white/[0.07] transition-colors"
            >
              View pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
