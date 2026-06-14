"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Rocket,
  Hexagon,
  Atom,
  Command,
  Triangle,
  Orbit,
  Gem,
  Zap,
  Box,
  Feather,
  Flame,
  Waves,
  Asterisk,
  Aperture,
  Diamond,
  Compass,
  Crown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Fictional apps — invented names, abstract glyphs, random gradients. No real brands.
const GRADS = [
  "bg-gradient-to-br from-amber-300 via-orange-500 to-rose-600",
  "bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-indigo-600",
  "bg-gradient-to-b from-sky-300 via-blue-500 to-indigo-700",
  "bg-gradient-to-br from-emerald-300 via-teal-500 to-cyan-700",
  "bg-gradient-to-tr from-rose-300 via-pink-500 to-fuchsia-600",
  "bg-gradient-to-br from-lime-300 via-emerald-500 to-teal-700",
  "bg-gradient-to-b from-yellow-300 via-amber-500 to-orange-600",
  "bg-gradient-to-tr from-cyan-300 via-sky-500 to-blue-700",
  "bg-gradient-to-br from-violet-400 via-fuchsia-500 to-pink-600",
  "bg-gradient-to-tr from-orange-300 via-red-500 to-rose-700",
  "bg-gradient-to-b from-teal-300 via-cyan-500 to-sky-700",
  "bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-700",
  "bg-gradient-to-tr from-pink-300 via-rose-500 to-red-600",
  "bg-gradient-to-br from-green-300 via-emerald-500 to-teal-700",
];

// Varied corner rounding so they're not all uniform squares
const SHAPES = [
  "rounded-full",
  "rounded-[34%]",
  "rounded-[46%]",
  "rounded-full",
  "rounded-[30%]",
  "rounded-[42%]",
];

const GLYPHS: LucideIcon[] = [
  Hexagon, Atom, Command, Triangle, Orbit, Gem, Zap, Box,
  Feather, Flame, Waves, Asterisk, Aperture, Diamond, Compass, Crown,
];

const NAMES = [
  "Norvex", "Brimmo", "Vortano", "Kestrix", "Fennor", "Obsiqa", "Tavul", "Wexlo",
  "Gryndle", "Nyxar", "Drappo", "Quillo", "Zephlo", "Plizm", "Korvane", "Jexa",
  "Brundle", "Vextor", "Lumora", "Pyxis", "Crendle", "Mavex", "Thopo", "Glyndor",
  "Onnex", "Razzo", "Vibblo", "Skarn", "Trune", "Maqo", "Bewil", "Cintra",
  "Dwomo", "Fjell", "Grask", "Hovel", "Ixar", "Joppa", "Kragg", "Lonex",
  "Mirth", "Nuvex", "Ozzo", "Pranq", "Quorr", "Rivex", "Snurl", "Twixo", "Umbra",
];

type OrbitApp = {
  name: string;
  grad: string;
  shape: string;
  Icon: LucideIcon;
  size: string;
};

// radius = % of the square from centre; one container spins, icons counter-spin to stay upright
const RING_DEFS = [
  { radius: 21, duration: 32, reverse: true, phase: 0, count: 8, sizes: ["w-12 h-12", "w-11 h-11", "w-10 h-10"] },
  { radius: 34, duration: 44, reverse: false, phase: 14, count: 13, sizes: ["w-11 h-11", "w-10 h-10", "w-9 h-9"] },
  { radius: 47, duration: 60, reverse: true, phase: 7, count: 19, sizes: ["w-10 h-10", "w-9 h-9", "w-8 h-8"] },
];

let _g = 0;
const ORBIT_RINGS: {
  radius: number;
  duration: number;
  reverse: boolean;
  phase: number;
  apps: OrbitApp[];
}[] = RING_DEFS.map((r) => ({
  radius: r.radius,
  duration: r.duration,
  reverse: r.reverse,
  phase: r.phase,
  apps: Array.from({ length: r.count }, (_, k) => {
    const i = _g++;
    return {
      name: NAMES[i % NAMES.length],
      grad: GRADS[i % GRADS.length],
      shape: SHAPES[i % SHAPES.length],
      Icon: GLYPHS[i % GLYPHS.length],
      size: r.sizes[k % r.sizes.length],
    };
  }),
}));

export default function GetToKnowUs() {
  return (
    <section
      id="get-to-know-us"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <span className="eyebrow mb-7 sm:mb-8">Who we are</span>

            <h2 className="fluid-h2 text-white mt-6 text-balance">
              An engineering studio
              <br />
              <span className="font-serif-italic brand-gradient">unreasonably</span>{" "}
              obsessed with quality.
            </h2>

            <p className="mt-7 text-white/60 text-lg leading-relaxed text-pretty">
              Brentwood Global brings together engineers, researchers and
              storytellers from Blacksburg, Islamabad and Coventry to build
              software people actually like using. We are small, opinionated and
              proud of both.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["AI / ML", "Blockchain", "Web Engineering", "Brand & Marketing"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full text-[13px] glass text-white/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <Link
              href="/about-us"
              className="mt-10 inline-flex items-center gap-2 text-amber-200 font-medium group"
            >
              Read our story
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong group">
              {/* Decorative gradient frame */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,113,133,0.08))",
                }}
              />

              {/* Animated mesh backdrop */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 animate-pulse-warm"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(251,191,36,0.4), transparent 60%), radial-gradient(ellipse 50% 50% at 70% 70%, rgba(251,113,133,0.3), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Orbit of fictional apps around the rocket */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative h-full aspect-square">
                  {/* faint guide rings — one per orbit */}
                  <div className="absolute inset-[3%] rounded-full border border-white/[0.05]" />
                  <div className="absolute inset-[16%] rounded-full border border-white/[0.04]" />
                  <div className="absolute inset-[29%] rounded-full border border-white/[0.04]" />

                  {ORBIT_RINGS.map((ring, ri) => (
                    <div
                      key={ri}
                      className="absolute inset-0"
                      style={{
                        animation: `slow-spin ${ring.duration}s linear infinite${
                          ring.reverse ? " reverse" : ""
                        }`,
                      }}
                    >
                      {ring.apps.map((app, ai) => {
                        const rad = (((ai / ring.apps.length) * 360 + ring.phase) * Math.PI) / 180;
                        const left = 50 + ring.radius * Math.cos(rad);
                        const top = 50 + ring.radius * Math.sin(rad);
                        return (
                          <div
                            key={app.name}
                            className="absolute"
                            style={{
                              left: `${left}%`,
                              top: `${top}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            {/* counter-spin keeps each icon upright while it orbits */}
                            <div
                              style={{
                                animation: `slow-spin ${ring.duration}s linear infinite${
                                  ring.reverse ? "" : " reverse"
                                }`,
                              }}
                            >
                              <div
                                title={app.name}
                                className={`relative ${app.size} ${app.shape} ${app.grad} shadow-[0_8px_20px_-6px_rgba(0,0,0,0.55)]`}
                              >
                                {/* glossy light from the top — reads as a real app icon, not a flat tile */}
                                <span
                                  className={`pointer-events-none absolute inset-0 ${app.shape} bg-gradient-to-b from-white/35 via-white/5 to-black/20`}
                                />
                                <app.Icon
                                  className="absolute inset-0 m-auto w-[52%] h-[52%] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                                  strokeWidth={1.6}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}

                  {/* center rocket */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[22%] aspect-square rounded-2xl glass-strong flex items-center justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-amber-300/15 blur-lg" />
                      <Rocket className="relative w-1/2 h-1/2 text-amber-200" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="text-white text-base sm:text-lg font-medium">
                  Our apps.
                </div>
                <div className="hidden sm:block font-serif-italic text-3xl text-white/20">
                  &lsquo;26
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
