"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function InteractiveFilterTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = ["All", "Web", "AI", "Blockchain", "Mobile", "Design"];

  const projects = {
    All: [
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
        category: "Mobile Development",
        image: "/ai-portfolio.png",
        description:
          "An intuitive investment tool that generates customized, diversified portfolios in seconds based on your risk tolerance, time horizon, and financial goals.",
        link: "https://www.portfoliogpt.xyz/",
      },
    ],
    Web: [
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
        id: 5,
        title: "Healee – White-Label Telehealth That Scales",
        category: "Web Development",
        image: "/healee.png",
        description:
          "A customizable, all-in-one telehealth platform that enables providers, clinics, hospitals, and insurers to launch fully branded virtual care experiences with smart intake, AI-driven scheduling, secure messaging, and integrated billing.",
        link: "#", // Update with actual URL, e.g., https://healee.com
      },
    ],
    AI: [
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
    ],
    Blockchain: [
      {
        id: 7,
        title: "Financial Fusion – On-Demand AI CFO",
        category: "Blockchain & AI",
        image: "/financial-fusion.png",
        description:
          "An intelligent financial SaaS powered by an AI CFO, Financial Fusion ingests profit & loss, balance sheet, and cash flow data to generate easy-to-understand, actionable reports and real-time forecasting.",
        link: "https://financialfusion.io/",
      },
    ],
    Mobile: [
      {
        id: 9,
        title: "Instant AI-Powered Portfolio Builder",
        category: "Mobile Development",
        image: "/ai-portfolio.png",
        description:
          "An intuitive investment tool that generates customized, diversified portfolios in seconds based on your risk tolerance, time horizon, and financial goals.",
        link: "https://www.portfoliogpt.xyz/",
      },
    ],
    Design: [],
  };

  const currentProjects = projects[activeTab as keyof typeof projects] || [];
  const projectsPerPage = 6;
  const totalPages = Math.ceil(currentProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = currentProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Filter through our diverse portfolio of successful projects across
            different industries
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 bg-muted rounded-2xl p-2 max-w-2xl mx-auto"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] text-white shadow-lg"
                  : "text-muted-foreground hover:text-[#007bff] hover:bg-white/20"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedProjects.map((project, index) => (
            <Link
              key={project.id}
              href={project.link || "#"}
              target={project.link !== "#" ? "_blank" : "_self"}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
              className="block"
              onClick={() => console.log(`Navigating to: ${project.link}`)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#00bfff]"
              >
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9 min-h-[200px] p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                    onLoadingComplete={() =>
                      console.log(`Loaded image: ${project.image}`)
                    }
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.image}`);
                      e.currentTarget.src = "/placeholder.png";
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  />
                </div>
                <div className="p-6 text-white bg-black/60">
                  <span className="text-[#00f6ff] text-sm font-semibold mb-2 block text-shadow-sm">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 text-shadow-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center space-x-2"
          >
            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
      <style jsx>{`
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
