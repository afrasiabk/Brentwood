"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "IoT", href: "/iot" },
  { name: "About", href: "/about-us" },
];

/* Brand mark — the origami bird, aurora gradient applied over the exact shape (white removed) */
function Logo({ className = "" }: { className?: string }) {
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4"
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[rgba(12,10,9,0.5)] border border-white/12 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.55)]"
              : "bg-white/[0.04] border border-white/10 backdrop-blur-2xl backdrop-saturate-150"
          } px-4 sm:px-5 py-2.5 sm:py-3`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <Logo className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-[20deg]" />
            <span className="text-[14px] sm:text-[15px] font-medium tracking-[0.18em] text-warm uppercase text-[#f5f1ea]">
              Brentwood
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3.5 py-2 text-[13px] font-medium text-white/65 hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-amber-300 via-rose-400 to-purple-400 group-hover:w-5 transition-all duration-400" />
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact-us"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#f5f1ea] text-black text-[13px] font-medium hover:bg-amber-200 transition-all duration-300 group"
            >
              Let&apos;s talk
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-[rgba(10,9,7,0.96)] backdrop-blur-2xl pt-24 pb-10 px-6 overflow-y-auto"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-5 px-2 border-b border-white/5 group"
                  >
                    <span className="text-2xl font-medium text-white tracking-tight group-hover:text-amber-200 transition-colors">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-amber-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8"
              >
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#f5f1ea] text-black font-medium"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="text-center text-xs text-white/30 mt-10 tracking-[0.25em] uppercase"
              >
                Crafted in three timezones
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
