"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UserRound } from "lucide-react";

const team = [
  {
    name: "Ali Ejaz",
    role: "Chief Executive Officer",
    image: "/ali.jpg",
    bio: "Visionary leader with 10+ years across tech innovation and business strategy.",
    linkedin: "#",
  },
  {
    name: "David Miller",
    role: "Chief Technology Officer",
    image: "/cto.jpg",
    bio: "Specialist in AI, blockchain and scalable distributed architectures.",
    linkedin: "#",
  },
  {
    name: "Khayyam Ahmed",
    role: "Strategic Partner",
    image: "/khayyam.jpg",
    bio: "Building strong alliances to turn bold ideas into lasting impact.",
    linkedin: "#",
  },
];

export default function BoardOfExpertise() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="eyebrow mx-auto">The board</span>
          <h2 className="fluid-h2 text-white mt-6 text-balance">
            People who hold the{" "}
            <span className="font-serif-italic brand-gradient">standard.</span>
          </h2>
          <p className="mt-6 text-white/55 text-lg leading-relaxed">
            The senior team responsible for craft, culture and the calls that matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/25 via-rose-500/15 to-purple-500/25">
                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(245,241,234,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,241,234,0.6) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center">
                        <UserRound className="w-7 h-7 text-amber-200/80" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050308] via-[#050308]/40 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-amber-200/90 mb-2">
                    {member.role}
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                    {member.name}
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
