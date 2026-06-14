"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Recruit CRM — AI-first ATS & recruiting CRM",
    description:
      "An applicant tracking system and CRM for staffing agencies, where AI agents handle resume parsing, candidate matching and outreach so recruiters place faster.",
    image: "/ai-recruitcrm.jpg",
    category: "Agentic AI",
  },
  {
    title: "Airparser — GPT-powered data extraction",
    description:
      "Turns emails, PDFs and documents into clean, structured data with an LLM-powered parser — consistent JSON output, webhooks and zero brittle templates.",
    image: "/ai-airparser.jpg",
    category: "Document AI",
  },
  {
    title: "DocLegal.ai — AI legal assistant",
    description:
      "Create, customise and review legal documents in minutes — an online AI assistant that drafts contracts and surfaces risks and key clauses for legal teams.",
    image: "/ai-doclegal.jpg",
    category: "Legal AI",
  },
  {
    title: "Chatbase — AI support agents",
    description:
      "A platform for building and deploying custom AI agents that resolve customer questions, qualify leads and plug straight into your existing tools.",
    image: "/ai-chatbase.jpg",
    category: "Conversational AI",
  },
];

export default function AIProjectsShowcase() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % projects.length);
  const prev = () => setI((p) => (p - 1 + projects.length) % projects.length);

  const project = projects[i];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected work</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              AI projects we&apos;ve{" "}
              <span className="font-serif-italic brand-gradient">shipped.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/[0.07] transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-amber-200 transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9] rounded-3xl overflow-hidden glass-strong">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050308] via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-5 left-5 z-10">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium glass-strong text-amber-200 border border-amber-300/20">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-5 right-5 font-serif-italic text-3xl text-white/30">
              0{i + 1} <span className="text-white/15">/ 0{projects.length}</span>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="fluid-h3 text-white mb-5 text-balance">
                  {project.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-pretty">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setI(idx)}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === i ? "w-10 bg-amber-200" : "w-5 bg-white/15"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
