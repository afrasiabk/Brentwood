"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const tabs = [
  {
    title: "NFTs",
    heading: "Non-Fungible Tokens",
    body: "Mint, trade and provenance-track unique digital assets. From art marketplaces to gaming inventories, we ship NFT platforms that don't look like every other NFT platform.",
    features: ["Custom Marketplaces", "Smart Contract Development", "IPFS Integration", "Cross-chain Support"],
  },
  {
    title: "Smart Contracts",
    heading: "Smart Contracts",
    body: "Self-executing contracts written, audited and gas-optimised. Deployed across EVM and non-EVM chains with telemetry that lets you sleep at night.",
    features: ["Solidity & Move", "Independent Auditing", "Gas Optimisation", "Multi-chain Deployment"],
  },
  {
    title: "DApps",
    heading: "Decentralized Apps",
    body: "Web3 applications built with the same UX standards as web2. Wallet flows that work for grandparents, settlement that works for institutions.",
    features: ["Web3 Integration", "Wallet Connectivity", "Decentralised Storage", "Refined UX"],
  },
  {
    title: "Tokenomics",
    heading: "Token Economics",
    body: "Sustainable token economies that drive adoption without depending on hype cycles. We model, simulate, and stress-test before you launch.",
    features: ["Token Design", "Economic Modelling", "Governance Systems", "Incentive Mechanisms"],
  },
];

export default function BlockchainFever() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background panel */}
      <div className="absolute inset-x-4 sm:inset-x-8 inset-y-0 rounded-[2.5rem] -z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,10,30,0.7), rgba(8,5,15,0.4))",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] -z-0 opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(251,113,133,0.5), transparent 60%)",
        }}
      />

      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="eyebrow mx-auto">Blockchain Practice</span>
          <h2 className="fluid-h2 text-white mt-6 text-balance">
            Blockchain{" "}
            <span className="font-serif-italic brand-gradient">without the theatre.</span>
          </h2>
          <p className="mt-6 text-white/55 text-lg leading-relaxed">
            We work with founders, funds and protocols on smart-contract systems
            that hold up — economically and technically.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 glass rounded-full max-w-2xl mx-auto">
            {tabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => setActive(idx)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-[13px] font-medium transition-all duration-400 ${
                  active === idx
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center glass-strong rounded-3xl p-8 sm:p-10 lg:p-14"
          >
            <div>
              <h3 className="fluid-h3 text-white mb-5 text-balance">
                {t.heading}
              </h3>
              <p className="text-white/60 leading-relaxed mb-8 text-pretty">
                {t.body}
              </p>
              <ul className="space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/80">
                    <span className="w-5 h-5 rounded-full bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-amber-200" strokeWidth={2.5} />
                    </span>
                    <span className="text-[14.5px]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square max-w-md mx-auto w-full hidden lg:block">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-8 rounded-full border border-white/5" />
              <div className="absolute inset-16 rounded-full border border-white/8" />
              <div className="absolute inset-24 rounded-full border border-amber-300/20" />

              {/* Central blob */}
              <div className="absolute inset-32 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(251,191,36,0.6), rgba(251,113,133,0.4) 50%, transparent 75%)",
                  filter: "blur(8px)",
                }}
              />
              <div className="absolute inset-36 rounded-full bg-gradient-to-br from-amber-200 to-rose-400 opacity-90 animate-pulse-warm" />

              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-amber-200 shadow-[0_0_20px_#fbbf24]" />
              </div>
              <div className="absolute inset-8 animate-orbit" style={{ animationDuration: "22s", animationDirection: "reverse" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-rose-300 shadow-[0_0_15px_#c084fc]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
