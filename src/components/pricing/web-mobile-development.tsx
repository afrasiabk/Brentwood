"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  Code,
  Palette,
  Database,
  Shield,
} from "lucide-react";

export default function WebMobileDevelopment() {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Focused",
        "Cross-browser Compatible",
      ],
      price: "Starting at $2,500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Native iOS/Android",
        "Cross-platform",
        "App Store Optimization",
        "Push Notifications",
      ],
      price: "Starting at $5,000",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Complete end-to-end development solutions with backend and frontend",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Scalable Architecture",
      ],
      price: "Starting at $7,500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that creates exceptional digital experiences",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      price: "Starting at $1,500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and API development",
      features: [
        "RESTful APIs",
        "Database Optimization",
        "Server Management",
        "Security Implementation",
      ],
      price: "Starting at $3,500",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance for your digital products",
      features: [
        "24/7 Monitoring",
        "Regular Updates",
        "Bug Fixes",
        "Performance Optimization",
      ],
      price: "Starting at $500/month",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-[#00f6ff] rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Web & Mobile App Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            From responsive websites to native mobile applications, we deliver
            comprehensive development solutions that drive business growth and
            user engagement.
          </p>

          {/* Pricing Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#00f6ff]/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Complete Development Packages
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00f6ff]">$2,500+</div>
                <div className="text-sm">Web Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00f6ff]">$5,000+</div>
                <div className="text-sm">Mobile Apps</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-background border border-[#00f6ff]/20 shadow-lg hover:shadow-2xl hover:bg-[#00f6ff]/5 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-[#00f6ff]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00f6ff]/20 transition-all duration-300"
                  >
                    <service.icon className="w-8 h-8 text-[#00f6ff]" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#00f6ff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-[#00f6ff] rounded-full" />
                        <span className="text-muted-foreground text-xs">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-[#00f6ff] font-bold text-lg mb-4">
                    {service.price}
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-[#00f6ff]/10 hover:bg-[#00f6ff]/20 text-foreground border-0 rounded-full transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </Button>

                  {/* Animated Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-[#00f6ff]/30 mt-4 rounded-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-[#00f6ff]/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Let&apos;s discuss your specific
              requirements and create a tailored development plan.
            </p>
            <Button className="bg-[#00f6ff] text-white hover:bg-[#00cfff] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
