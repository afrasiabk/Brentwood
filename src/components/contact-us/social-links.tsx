"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/brentwoodglobal" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/brentwoodglobal" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/brentwoodglobal" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/brentwoodglobal" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/brentwoodglobal" },
];

export default function SocialLinks() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">
            Or find us on
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-amber-200 hover:border-amber-300/30 transition-all duration-300"
                aria-label={s.name}
              >
                <s.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
