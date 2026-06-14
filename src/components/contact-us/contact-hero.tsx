"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[120vw] sm:w-[80vw] h-[80vh] rounded-full opacity-50 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.4), transparent 60%)",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(251,113,133,0.3), transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-7"
          >
            <span className="eyebrow">
              <Sparkles className="w-3 h-3" /> Get in touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="fluid-display text-white text-balance leading-[0.95]"
          >
            Tell us about
            <br />
            <span className="font-serif-italic brand-gradient">your project.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 sm:mt-9 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed text-pretty"
          >
            Whether you have a fully-formed brief or just a hunch worth
            exploring — drop us a line. We respond within one business day,
            from a real human.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
