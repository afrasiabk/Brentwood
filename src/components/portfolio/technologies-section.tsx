"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Terminal,
  Database,
  Flame,
  Braces,
  ShieldCheck,
  Box,
  Layers,
  Cloud,
  Sigma,
  ChartSpline,
} from "lucide-react";

export default function TechnologiesSection() {
  const technologies = [
    { name: "React", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "Next.js", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "Firebase", icon: Flame },
    { name: "GraphQL", icon: ChartSpline },
    { name: "Python", icon: Braces },
    { name: "Solidity", icon: ShieldCheck },
    { name: "Flutter", icon: Box },
    { name: "PostgreSQL", icon: Layers },
    { name: "Express.js", icon: Cloud },
    { name: "TypeScript", icon: Sigma },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technologies{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              We Use
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and
            innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.1, y: -10, rotateY: 10, rotateX: 10 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="group relative bg-[#00f6ff] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00bfff]/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-[#00f6ff]/10 to-[#007bff]/10 rounded-2xl blur-sm"
              />

              <div className="relative z-10 text-center">
                <tech.icon className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg text-white group-hover:text-[#007bff] transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>

              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 border-2 border-[#00bfff]/50 rounded-2xl pointer-events-none"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + index * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-[#00bfff] rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
