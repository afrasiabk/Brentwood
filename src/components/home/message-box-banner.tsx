"use client";

import { motion } from "framer-motion";

export default function MessageBoxBanner() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative glass-strong rounded-[2rem] p-10 sm:p-14 lg:p-20 overflow-hidden">
            {/* Inner gradient wash */}
            <div className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 0% 0%, rgba(251,191,36,0.18), transparent 50%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(251,113,133,0.15), transparent 50%)",
              }}
            />

            {/* Content */}
            <div className="relative text-center">
              <span className="font-serif-italic text-7xl sm:text-8xl text-amber-200/30 leading-none">
                &ldquo;
              </span>

              <h3 className="fluid-h3 text-white -mt-4 text-balance leading-tight">
                Your success is our mission —{" "}
                <span className="font-serif-italic brand-gradient">
                  let&apos;s build the future
                </span>{" "}
                together.
              </h3>

              <p className="mt-6 text-white/55 text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
                Every partnership begins with trust, every project starts with
                passion, and every success story is written together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
