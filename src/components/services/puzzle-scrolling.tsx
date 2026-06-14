"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  Bot,
  Link,
  Smartphone,
  Cloud,
  Lock,
  BarChart,
  Megaphone,
  Palette,
  GitBranch,
  Wifi,
  Brain,
} from "lucide-react";

export default function PuzzleScrolling() {
  const services = [
    {
      name: "Web Development",
      icon: <Globe className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "AI Automation",
      icon: <Bot className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "Blockchain Integration",
      icon: <Link className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "Mobile Applications",
      icon: <Smartphone className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "Cloud Computing",
      icon: <Cloud className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "Cybersecurity",
      icon: <Lock className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "Data Analytics",
      icon: <BarChart className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "Digital Marketing",
      icon: <Megaphone className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "DevOps Solutions",
      icon: <GitBranch className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "IoT Development",
      icon: <Wifi className="text-white w-8 h-8 mb-4" />,
    },
    {
      name: "Machine Learning",
      icon: <Brain className="text-white w-8 h-8 mb-4" />,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your
            business
          </p>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <motion.div
          animate={{
            x: hoveredIndex !== null ? "10%" : "-100%",
          }}
          transition={{
            duration: hoveredIndex !== null ? 20 : 30,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="flex space-x-6 w-max"
        >
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              {/* Puzzle Piece Shape */}
              <div className="relative bg-gradient-to-br from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-2xl p-8 min-w-[280px] shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Puzzle Notch */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-full" />
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#00bfff]" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="flex justify-center items-center"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Professional {service.name.toLowerCase()} solutions
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
