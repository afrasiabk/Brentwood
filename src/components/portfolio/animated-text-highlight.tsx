"use client";

import { motion } from "framer-motion";

export default function AnimatedTextHighlight() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Top Animated Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      {/* Bottom Animated Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            At Brentwood, we don&apos;t just build software — we{" "}
            <span className="relative inline-block">
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                whileInView={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent bg-no-repeat"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #00f6ff, #00bfff, #007bff)",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                craft scalable solutions
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-full"
              />
            </span>{" "}
            that make a difference.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
