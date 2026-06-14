"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LocationMap() {
  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Islamabad, we&apos;re always ready to
            welcome you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background p-4 md:p-8 rounded-3xl shadow-2xl border border-[#00f6ff]/20"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://i.dawn.com/primary/2014/08/53f9033984b91.jpg"
              alt="Zero Point Islamabad Location Map showing Brentwood Global's area"
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 lg:h-[400px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              priority
            />

            {/* Overlay with company info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border border-[#00f6ff]/20"
            >
              <h3 className="font-bold text-foreground mb-2">
                Brentwood Global
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Technology & Innovation Hub
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span>📍</span>
                <span>Zero Point, Islamabad, Pakistan</span>
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                />
                <span className="text-xs text-muted-foreground">
                  We&apos;re here!
                </span>
              </div>
            </motion.div>

            {/* Interactive hover effect overlay */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="bg-[#00bfff]/90 text-white px-6 py-3 rounded-full font-medium shadow-lg backdrop-blur-sm"
              >
                📍 View Location Details
              </motion.div>
            </motion.div> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-center space-y-2"
          >
            <p className="text-muted-foreground text-sm md:text-base flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2">
                <span>📧</span>
                <span>business@brentwoodglobal.co.uk</span>
              </span>
              <span className="flex items-center gap-2">
                <span>📞</span>
                <span>+44 7700 900123</span>
              </span>
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xs text-muted-foreground mt-2"
            >
              Office Hours: Monday - Friday, 9:00 AM - 6:00 PM PKT
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
