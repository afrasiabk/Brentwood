"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Heading lifts and fades on scroll — gives the "scroll-aware" feel
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const auroraScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const auroraOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // Cursor parallax on desktop
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 28;
      orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Aurora backdrop */}
      <motion.div
        style={{ scale: auroraScale, opacity: auroraOpacity }}
        className="absolute inset-0 -z-10"
      >
        <div ref={orbRef} className="absolute inset-0 transition-transform duration-[600ms] ease-out">
          {/* Amber primary */}
          <div
            className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[110vw] sm:w-[80vw] h-[80vh] rounded-full opacity-70 blur-[120px] animate-aurora"
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.5), rgba(251,191,36,0.05) 45%, transparent 65%)",
            }}
          />
          {/* Coral middle */}
          <div
            className="absolute top-[40%] right-[5%] w-[60vw] h-[70vh] rounded-full opacity-55 blur-[100px] animate-aurora"
            style={{
              animationDelay: "-10s",
              background:
                "radial-gradient(circle, rgba(251,113,133,0.45), transparent 60%)",
            }}
          />
          {/* Violet whisper */}
          <div
            className="absolute bottom-[5%] left-[5%] w-[55vw] h-[55vh] rounded-full opacity-40 blur-[100px] animate-aurora"
            style={{
              animationDelay: "-20s",
              background:
                "radial-gradient(circle, rgba(192,132,252,0.4), transparent 60%)",
            }}
          />
        </div>

        {/* Crisp grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(245,241,234,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,241,234,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />

        {/* Vignette to ground content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0907]" />
      </motion.div>

      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="container mx-auto relative"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <span className="eyebrow">
              <Sparkles className="w-3 h-3" /> Crafting since 2019
            </span>
          </motion.div>

          {/* Heading — single tight block, no extra line breaks creating gaps */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="fluid-display text-[#f5f1ea] text-balance tracking-tight"
          >
            Building the{" "}
            <span className="font-serif-italic brand-gradient">intelligent</span>
            <br className="hidden sm:block" />{" "}
            <span className="sm:hidden">future of </span>
            <span className="hidden sm:inline">future of </span>
            <span className="text-[#f5f1ea]/90">software.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/65 leading-relaxed text-balance"
          >
            A multi-disciplinary engineering studio shipping production-grade{" "}
            <span className="text-amber-200">AI</span>,{" "}
            <span className="text-rose-300">Blockchain</span>,{" "}
            <span className="text-purple-300">Web</span> &{" "}
            <span className="text-amber-200">Marketing</span> systems for
            ambitious teams across three continents.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/contact-us"
              className="group magnetic-btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#f5f1ea] text-black font-medium text-[14.5px] hover:bg-amber-200 transition-all duration-300"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass text-white font-medium text-[14.5px] hover:bg-white/[0.07] transition-all duration-300"
            >
              See our work
              <span className="w-1.5 h-1.5 rounded-full brand-gradient-bg group-hover:scale-150 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats strip — pulled closer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-px max-w-2xl mx-auto rounded-2xl overflow-hidden glass-strong"
          >
            {[
              { v: "200+", l: "Products shipped" },
              { v: "50+", l: "Global clients" },
              { v: "3", l: "Continents" },
            ].map((s) => (
              <div key={s.l} className="bg-[rgba(10,9,7,0.5)] px-3 py-4 sm:py-5 sm:p-5 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#f5f1ea]">
                  {s.v}
                </div>
                <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/30"
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-amber-300/60 to-transparent" />
      </motion.div>
    </section>
  );
}
