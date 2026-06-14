"use client";
import { motion } from "framer-motion";
export default function AnimatedCharacter() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              At Brentwood Global, we don&apos;t just build technology – we
              craft digital experiences that transform businesses and empower
              growth. Our team of experts combines innovation with proven
              methodologies to deliver solutions that exceed expectations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              From startups to enterprise organizations, we&apos;ve helped
              hundreds of clients navigate their digital transformation journey
              with confidence and success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {["Innovation", "Excellence", "Partnership", "Results"].map(
                (value) => (
                  <motion.div
                    key={value}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-background px-6 py-3 rounded-full shadow-md border border-[#00f6ff]/20 hover:border-[#007bff]/60 transition-all duration-300"
                  >
                    <span className="text-[#007bff] font-semibold">
                      {value}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-[#00f6ff]/10 to-[#007bff]/10 rounded-3xl overflow-hidden">
              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  // src="https://videos.pexels.com/video-files/29306492/12637575_1920_1080_30fps.mp4"
                  src="/animation2.webm"
                  type="video/mp4"
                />
              </video>
              {/* Decorative Blobs */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#00bfff] rounded-full opacity-20 blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#007bff] rounded-full opacity-30 blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
