"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dereck Rizo",
    role: "Founder & CEO, Trainest, Inc.",
    content:
      "Genuinely a great team to work with. Professional, responsive, and they cared about getting the details right.",
    rating: 5,
  },
  {
    name: "Gene Furman",
    role: "KingPawnUSA",
    content:
      "Attention to detail is what makes Brentwood different. I&apos;ve been a client since their freelancer days — the standard hasn&apos;t dropped.",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Founder, Zentyx",
    content:
      "From concept to deployment, Brentwood Global exceeded our expectations. Their web team built exactly what we envisioned and more.",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "Director, GlobalTech",
    content:
      "Outstanding mobile app delivery. The user experience is seamless and the performance is exceptional. Our users love it.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="eyebrow mx-auto">Testimonials</span>
          <h2 className="fluid-h2 text-white mt-6 text-balance">
            What our clients{" "}
            <span className="font-serif-italic brand-gradient">say.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 min-h-[320px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-amber-200 fill-amber-200"
                    />
                  ))}
                </div>

                <p
                  className="text-2xl sm:text-3xl text-white/90 leading-snug font-light text-balance"
                  dangerouslySetInnerHTML={{
                    __html: `&ldquo;${t.content}&rdquo;`,
                  }}
                />

                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-rose-500 flex items-center justify-center text-white font-semibold text-base shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium">{t.name}</div>
                    <div className="text-white/50 text-sm mt-0.5">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === i ? "w-10 bg-amber-200" : "w-5 bg-white/15"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/[0.07] transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-amber-200 transition-colors"
                aria-label="Next"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
