"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        background:
          "linear-gradient(115deg, #fbbf24 0%, #fb7185 50%, #c084fc 100%)",
        WebkitMaskImage: "url(/bird-mask.png)",
        maskImage: "url(/bird-mask.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

const offices = [
  { flag: "🇺🇸", country: "USA", address: "Blacksburg, Virginia" },
  { flag: "🇵🇰", country: "PAKISTAN", address: "Islamabad, I-10/3" },
  { flag: "🇬🇧", country: "UK", address: "Coventry, Financial Plaza" },
];

const sitemap = [
  {
    title: "Studio",
    items: [
      { name: "About", href: "/about-us" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Practices",
    items: [
      { name: "AI / ML", href: "/services" },
      { name: "Blockchain", href: "/services" },
      { name: "IoT", href: "/iot" },
      { name: "Web", href: "/services" },
    ],
  },
  {
    title: "Connect",
    items: [
      { name: "Contact", href: "/contact-us" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Partners", href: "/contact-us" },
    ],
  },
];

const legalLinks = [
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 sm:pt-28 pb-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] aspect-[2/1] opacity-40 blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,191,36,0.4), transparent 60%)",
        }}
      />

      <div className="container mx-auto relative">
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-white/45 text-xs uppercase tracking-[0.25em] mb-5">
            Ready when you are
          </p>
          <h2 className="fluid-display text-[#f5f1ea] text-balance leading-[0.95]">
            Let&apos;s build
            <br />
            <span className="font-serif-italic brand-gradient">something good.</span>
          </h2>
          <Link
            href="/contact-us"
            className="mt-8 sm:mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f5f1ea] text-black font-medium hover:bg-amber-200 transition-all duration-300 group"
          >
            Start the conversation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-white/5">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Monogram className="w-9 h-9" />
              <span className="text-base font-medium tracking-[0.2em] uppercase text-[#f5f1ea]">
                Brentwood
              </span>
            </Link>

            <p className="text-white/55 leading-relaxed text-[15px] max-w-md text-pretty">
              A multi-disciplinary engineering studio crafting AI, Blockchain,
              Web and Marketing systems for ambitious teams. Working from
              three timezones, holding to one standard.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {offices.map((office) => (
                <div key={office.country} className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{office.flag}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80">
                      {office.country}
                    </span>
                  </div>
                  <div className="text-white/65 text-[12px] leading-snug">
                    {office.address}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8 sm:gap-6">
            {sitemap.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-[14.5px] text-white/75 hover:text-amber-200 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Brentwood. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-amber-200 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Massive aurora wordmark */}
        <div className="mt-10 sm:mt-14 -mx-6 overflow-hidden select-none pointer-events-none">
          <div className="font-serif-italic text-[18vw] sm:text-[16vw] leading-[0.85] text-center brand-gradient opacity-[0.10] tracking-tighter whitespace-nowrap">
            Brentwood
          </div>
        </div>
      </div>
    </footer>
  );
}
