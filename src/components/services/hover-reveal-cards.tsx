"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HoverRevealCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Cybersecurity",
      description:
        "Advanced security solutions to protect your digital assets and infrastructure.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    },
    {
      title: "Cloud Integration",
      description:
        "Seamless cloud migration and integration services for scalable solutions.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    },
    {
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    },
    {
      title: "AI Development",
      description:
        "Custom artificial intelligence solutions to automate and optimize processes.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    },
    {
      title: "Blockchain",
      description:
        "Decentralized solutions and smart contract development services.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
    },
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
            Specialized{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our specialized services designed to address your unique
            business challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#00bfff]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  width="600"
                  height="400"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
                {/* Default State */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: hoveredCard === index ? 0 : 1,
                    y: hoveredCard === index ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-8 flex flex-col justify-center items-center text-center"
                >
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-[#00bfff] rounded-full" />
                </motion.div>

                {/* Hover State */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-8 flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 self-start"
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Animated Border */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === index ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00f6ff] to-[#007bff]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
