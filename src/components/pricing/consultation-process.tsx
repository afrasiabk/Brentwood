"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, Lightbulb, Rocket } from "lucide-react";

export default function ConsultationProcess() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description:
        "We discuss your project requirements, goals, and vision in detail.",
      step: "01",
    },
    {
      icon: Users,
      title: "Team Assembly",
      description:
        "We assign the perfect team of experts based on your project needs.",
      step: "02",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "We create a comprehensive roadmap and timeline for your project.",
      step: "03",
    },
    {
      icon: Rocket,
      title: "Project Launch",
      description:
        "We begin development with regular updates and milestone reviews.",
      step: "04",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%2300bfff%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Consultation Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial discussion to project launch, we ensure a smooth and
            transparent process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-background border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-[#b3eaff] group-hover:text-[#d1f1ff] transition-colors">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-[#00bfff]/25 relative z-10"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#007bff] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mx-auto mt-6 rounded-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
