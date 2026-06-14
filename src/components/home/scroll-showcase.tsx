"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Brain, Layers, Globe, Smartphone, Shield, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Brain,
    tag: "Artificial Intelligence",
    title: "Models that ship.",
    body: "From RAG to autonomous agents — useful, fast, and grounded in your actual data.",
    accent: "from-amber-400/40 via-amber-300/10 to-transparent",
  },
  {
    icon: Layers,
    tag: "Blockchain",
    title: "Trust, encoded.",
    body: "Audited smart contracts, marketplaces, and tokenomics — designed to last.",
    accent: "from-rose-400/40 via-rose-300/10 to-transparent",
  },
  {
    icon: Globe,
    tag: "Web Engineering",
    title: "Web that performs.",
    body: "Production-grade Next.js, edge architectures, and interfaces with obvious craft.",
    accent: "from-purple-400/40 via-purple-300/10 to-transparent",
  },
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Apps people return to.",
    body: "Native iOS, Android & React Native — small teams, sharp ideas, real budgets.",
    accent: "from-amber-400/40 via-rose-300/10 to-transparent",
  },
  {
    icon: Shield,
    tag: "Cybersecurity",
    title: "Safe by design.",
    body: "Hardened systems, audited code paths, and 24/7 incident response across timezones.",
    accent: "from-rose-400/40 via-purple-300/10 to-transparent",
  },
  {
    icon: Sparkles,
    tag: "Brand & Marketing",
    title: "Stories that travel.",
    body: "Strategy, identity, and content that turns ambitious products into known names.",
    accent: "from-purple-400/40 via-amber-300/10 to-transparent",
  },
];

function DisciplineCard({
  c,
  i,
  className = "",
}: {
  c: (typeof cards)[number];
  i: number;
  className?: string;
}) {
  return (
    <article
      className={`relative aspect-[4/5] sm:aspect-[5/6] shrink-0 rounded-3xl overflow-hidden glass-strong group ${className}`}
    >
      {/* Aurora background per card */}
      <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-80`} />
      <div
        className="absolute -inset-20 opacity-50 blur-3xl"
        style={{
          background:
            i % 3 === 0
              ? "radial-gradient(circle at 30% 30%, rgba(251,191,36,0.4), transparent 50%)"
              : i % 3 === 1
              ? "radial-gradient(circle at 70% 70%, rgba(251,113,133,0.4), transparent 50%)"
              : "radial-gradient(circle at 50% 50%, rgba(192,132,252,0.4), transparent 50%)",
        }}
      />

      {/* Top number */}
      <div className="absolute top-6 right-7 font-serif-italic text-5xl sm:text-6xl text-white/20">
        0{i + 1}
      </div>

      <div className="relative h-full flex flex-col p-7 sm:p-9 lg:p-10">
        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
          <c.icon className="w-5 h-5 text-amber-200" strokeWidth={1.5} />
        </div>

        <div className="mt-auto">
          <div className="text-[10px] uppercase tracking-[0.22em] text-amber-200/80 mb-3">
            {c.tag}
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f5f1ea] mb-4 text-balance">
            {c.title}
          </h3>
          <p className="text-[14.5px] sm:text-[15px] text-white/65 leading-relaxed text-pretty max-w-sm">
            {c.body}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ScrollShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Switch to a native swipe carousel on touch/small screens (no scroll-jacking).
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Measure the exact horizontal overflow so the track stops on the last card.
  useEffect(() => {
    if (isMobile) return;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
      setMaxScroll(overflow);
      setSectionHeight(overflow + window.innerHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 300);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [isMobile]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  // ── Mobile: simple, fluent horizontal swipe carousel ───────────────────────
  if (isMobile) {
    return (
      <section className="relative py-20 overflow-hidden" aria-label="What we do">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/4 w-[70vw] h-[40vh] rounded-full opacity-30 blur-[100px] animate-aurora"
            style={{ background: "radial-gradient(circle, rgba(251,191,36,0.4), transparent 60%)" }}
          />
        </div>

        <div className="container mx-auto mb-8">
          <span className="eyebrow">What we do</span>
          <h2 className="fluid-h2 text-[#f5f1ea] mt-5 text-balance">
            Six disciplines.{" "}
            <span className="font-serif-italic brand-gradient">One studio.</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm max-w-sm">
            Specialists who collaborate as one team — swipe to explore.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((c, i) => (
            <DisciplineCard key={c.tag} c={c} i={i} className="w-[80vw] sm:w-[55vw] snap-center" />
          ))}
          <div className="w-1 shrink-0" />
        </div>
      </section>
    );
  }

  // ── Desktop: scroll-pinned horizontal reveal (unchanged) ────────────────────
  return (
    <section
      ref={ref}
      style={{ height: sectionHeight ? `${sectionHeight}px` : "300vh" }}
      className="relative"
      aria-label="What we do"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Background aurora that drifts */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[60vw] h-[60vh] rounded-full opacity-30 blur-[120px] animate-aurora"
            style={{ background: "radial-gradient(circle, rgba(251,191,36,0.4), transparent 60%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vh] rounded-full opacity-25 blur-[100px] animate-aurora"
            style={{
              animationDelay: "-15s",
              background: "radial-gradient(circle, rgba(192,132,252,0.4), transparent 60%)",
            }}
          />
        </div>

        {/* Pinned heading */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative pt-20 sm:pt-28 pb-8 sm:pb-10 px-6 sm:px-10 z-10"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="fluid-h2 text-[#f5f1ea] mt-5 text-balance">
                Six disciplines.{" "}
                <span className="font-serif-italic brand-gradient">One studio.</span>
              </h2>
            </div>
            <p className="hidden sm:block text-white/55 text-sm max-w-sm">
              Specialists who collaborate as one team — your AI engineer talks
              directly to your product designer.
            </p>
          </div>
        </motion.div>

        {/* Horizontally moving track */}
        <div className="flex-1 relative flex items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 sm:gap-7 px-6 sm:px-10"
          >
            {cards.map((c, i) => (
              <DisciplineCard
                key={c.tag}
                c={c}
                i={i}
                className="w-[80vw] sm:w-[60vw] lg:w-[40vw] xl:w-[32vw]"
              />
            ))}

            {/* trailing breathing room */}
            <div className="w-6 shrink-0" />
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="px-6 sm:px-10 pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto h-px bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="absolute inset-0 brand-gradient-bg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
