"use client";

import { motion } from "framer-motion";

export default function AnimatedTextVertical() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Vertical Lines */}
      <div className="absolute left-1/4 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-b from-transparent via-foreground/60 to-transparent"
        />
      </div>
      <div className="absolute right-1/4 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ y: ["100%", "-100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-b from-transparent via-foreground/60 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent"
            >
              Custom pricing
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-foreground"
            >
              built around your goals.
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
