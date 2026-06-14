"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Zap,
  Shield,
  Database,
  Wrench,
  RefreshCw,
} from "lucide-react";

export default function UtilitiesSection() {
  const utilities = [
    {
      title: "24/7 Monitoring",
      description:
        "Continuous system monitoring and alerting to prevent downtime.",
      icon: <Activity className="text-white w-8 h-8" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Speed and efficiency improvements for better user experience.",
      icon: <Zap className="text-white w-8 h-8" />,
    },
    {
      title: "Security Audits",
      description: "Regular security assessments and vulnerability testing.",
      icon: <Shield className="text-white w-8 h-8" />,
    },
    {
      title: "Backup & Recovery",
      description: "Automated backup solutions and disaster recovery planning.",
      icon: <Database className="text-white w-8 h-8" />,
    },
    {
      title: "Technical Support",
      description: "Expert technical assistance whenever you need it.",
      icon: <Wrench className="text-white w-8 h-8" />,
    },
    {
      title: "System Updates",
      description: "Regular updates and patches to keep systems current.",
      icon: <RefreshCw className="text-white w-8 h-8" />,
    },
  ];

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Utility{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Beyond core development, we provide essential utility services that
            keep your digital infrastructure running smoothly and efficiently.
            From maintenance to optimization, we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-[#00bfff]"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="flex justify-center items-center mb-4"
              >
                <div className="bg-[#00bfff] p-2 rounded-full">
                  {utility.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#00bfff] transition-colors">
                {utility.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {utility.description}
              </p>

              {/* Animated Bottom Line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
