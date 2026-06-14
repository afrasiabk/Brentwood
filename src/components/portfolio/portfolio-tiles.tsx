"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioTiles() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Tripping - The Kayak of Vacation Rentals",
      category: "Web Development",
      image: "/tripping.png",
      description:
        "A global metasearch engine enabling users to compare properties and prices from platforms like Booking.com, VRBO, HomeAway, and more.",
      link: "https://www.tripping.com/",
    },
    {
      id: 2,
      title: "Embedded Insurance for Adventure & Travel Brands",
      category: "Web Development",
      image: "/embedded-insurance.png",
      description:
        "It streamlines sales with checkout integrations, flexible pricing, and a self-serve claims portal, helping businesses protect customers and generate new revenue without operational complexity.",
      link: "https://www.getspot.com/",
    },
    {
      id: 3,
      title: "SmartaDoc AI – Chat with Your Documents",
      category: "AI",
      image: "/ai-powered.png",
      description:
        "An AI-powered web application that lets users upload PDFs, spreadsheets, presentations, JSON files, and more, then interactively query, summarize, and analyze the content using natural-language chat interfaces.",
      link: "https://www.smartadoc.com/",
    },
    {
      id: 4,
      title: "ChatFlow – AI Chatbot Built for Growth",
      category: "AI",
      image: "/ai-chatbot.png",
      description:
        "AI chatbot builder that effortlessly automates customer support, generates qualifying leads, and boosts SEO visibility, reducing support response time by up to 8× while helping businesses rank higher on search engines.",
      link: "https://chatflowapp.com/",
    },
    {
      id: 5,
      title: "Healee – White-Label Telehealth That Scales",
      category: "Web Development",
      image: "/healee.png",
      description:
        "A customizable, all-in-one telehealth platform that enables providers, clinics, hospitals, and insurers to launch fully branded virtual care experiences with smart intake, AI-driven scheduling, secure messaging, and integrated billing.",
      link: "#", // Update with actual URL, e.g., https://healee.com
    },
    {
      id: 6,
      title: "Runday.ai – AI Agent Sales Assistant",
      category: "AI",
      image: "/runday-ai.png",
      description:
        "A no-code generative AI platform that responds to inbound buyer queries 24/7, qualifies leads, books appointments, and follows up on no-shows.",
      link: "https://runday.ai/",
    },
    {
      id: 7,
      title: "Financial Fusion – On-Demand AI CFO",
      category: "Blockchain & AI",
      image: "/financial-fusion.png",
      description:
        "An intelligent financial SaaS powered by an AI CFO, Financial Fusion ingests profit & loss, balance sheet, and cash flow data to generate easy-to-understand, actionable reports and real-time forecasting.",
      link: "https://financialfusion.io/",
    },
    {
      id: 8,
      title: "AI Health Assistant for Mindful Care",
      category: "AI",
      image: "/ai-health-assisstant.png",
      description:
        "A fully AI-driven health platform offering patients a 24/7 AI Doctor, symptom checker, and lab test analysis.",
      link: "https://docus.ai/",
    },
    {
      id: 9,
      title: "Instant AI-Powered Portfolio Builder",
      category: "AI",
      image: "/ai-portfolio.png",
      description:
        "An intuitive investment tool that generates customized, diversified portfolios in seconds based on your risk tolerance, time horizon, and financial goals.",
      link: "https://www.portfoliogpt.xyz/",
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
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest innovations and successful digital
            transformations
          </p>
        </motion.div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.link || "#"}
              target={item.link !== "#" ? "_blank" : "_self"}
              rel={item.link !== "#" ? "noopener noreferrer" : undefined}
              className="block"
              onClick={() => console.log(`Navigating to: ${item.link}`)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredTile(index)}
                onMouseLeave={() => setHoveredTile(null)}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#00bfff] ${
                  index % 7 === 0 || index % 7 === 3
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                } ${index % 5 === 2 ? "lg:col-span-2" : ""}`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9 min-h-[200px] ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain"
                    onLoadingComplete={() =>
                      console.log(`Loaded image: ${item.image}`)
                    }
                    onError={(e) => {
                      console.error(`Failed to load image: ${item.image}`);
                      e.currentTarget.src = "/placeholder.png";
                    }}
                  />

                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredTile === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  />

                  {/* Animated Border */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredTile === index ? 1 : 0,
                      rotate: hoveredTile === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-2 border-2 border-[#00bfff] rounded-xl pointer-events-none"
                  />
                </div>

                {/* Always Visible Content */}
                <div className="p-6 text-white bg-black/60">
                  <span className="text-[#00f6ff] text-sm font-semibold mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 text-shadow-sm">
                    {item.description}
                  </p>

                  {/* Hover-Animated Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredTile === index ? 1 : 0,
                      y: hoveredTile === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex space-x-3"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#00bfff] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#007bff] transition-colors"
                    >
                      View
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
                    >
                      Details
                    </motion.button>
                  </motion.div>
                </div>

                {/* Floating Animation */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-[#00bfff] rounded-full opacity-60 blur-sm"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Text Shadow Style */}
      <style jsx>{`
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
