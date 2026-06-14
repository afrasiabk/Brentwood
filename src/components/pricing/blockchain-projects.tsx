"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Coins, Link, Zap } from "lucide-react";

export default function BlockchainProjects() {
  const blockchainProjects = [
    {
      icon: Shield,
      title: "Smart Contracts",
      description:
        "Secure, automated contracts that execute without intermediaries.",
      image:
        "https://images.pexels.com/photos/19825343/pexels-photo-19825343.jpeg",
    },
    {
      icon: Coins,
      title: "DeFi Platforms",
      description:
        "Decentralized finance solutions for lending, trading, and yield farming.",
      image:
        "https://images.pexels.com/photos/8370749/pexels-photo-8370749.jpeg",
    },
    {
      icon: Link,
      title: "NFT Marketplaces",
      description:
        "Create, mint, and trade unique digital assets on blockchain networks.",
      image:
        "https://images.pexels.com/photos/14354111/pexels-photo-14354111.jpeg",
    },
    {
      icon: Zap,
      title: "Crypto Wallets",
      description:
        "Secure digital wallets for storing and managing cryptocurrencies.",
      image:
        "https://images.pexels.com/photos/6766410/pexels-photo-6766410.jpeg",
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
          className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%2300bfff%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"
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
            Blockchain{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolutionize your business with decentralized solutions and
            blockchain technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blockchainProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Card className="bg-background border-[#00f6ff]/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full p-0">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Sliding Animation Overlay */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#00bfff]/80 to-[#007bff]/80 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-white text-center"
                      >
                        <project.icon className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm font-semibold">View Details</p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="w-12 h-12 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#00bfff]/25 transition-all duration-300"
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#007bff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Animated Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mt-4 rounded-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
