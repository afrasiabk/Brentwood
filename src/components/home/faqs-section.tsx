"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    q: "What services does Brentwood Global offer?",
    a: "We offer end-to-end product engineering — web development, mobile apps, AI solutions, blockchain, cybersecurity, cloud services, UI/UX design and digital marketing. Most engagements draw on three or four disciplines at once, which is exactly why we&apos;re structured as one team rather than several.",
  },
  {
    q: "How can I start a project with Brentwood Global?",
    a: "Send us the brief through the contact form, or book a 30-minute call. We&apos;ll respond within one business day with first thoughts, a proposed scope and a candid view on whether we&apos;re the right fit for the work.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes. We offer monthly support packages covering updates, security patches, performance monitoring, technical support and feature work. Packages are sized to match the criticality of the system — not to fill calendars.",
  },
  {
    q: "What industries do you work with?",
    a: "Healthcare, finance, e-commerce, education, manufacturing, gaming and SaaS — both startups and enterprises. We pick projects where our skills meaningfully move the needle, regardless of vertical.",
  },
  {
    q: "How long does a typical project take?",
    a: "Marketing sites: 2–4 weeks. Mid-sized applications: 8–14 weeks. Complex platforms: 3–6 months and up. We give a detailed timeline during scoping and review it weekly so there are no surprises.",
  },
  {
    q: "Do you work with international clients?",
    a: "Most of our clients are international. With teams in the US, UK and Pakistan, there&apos;s always someone awake when something needs answering.",
  },
];

export default function FAQsSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              Frequently asked,{" "}
              <span className="font-serif-italic brand-gradient">
                clearly answered.
              </span>
            </h2>

            <p className="mt-6 text-white/55 leading-relaxed">
              Can&apos;t see your question?
            </p>
            <Link
              href="/contact-us"
              className="mt-3 inline-flex items-center gap-2 text-amber-200 font-medium group"
            >
              Just ask us directly
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <ul className="space-y-2.5">
              {faqs.map((f, i) => (
                <motion.li
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-6 sm:px-8 py-5 flex items-start justify-between gap-4 group"
                  >
                    <span className="text-white font-medium text-base sm:text-lg group-hover:text-amber-200 transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 mt-0.5 w-7 h-7 rounded-full glass flex items-center justify-center transition-transform duration-500 ${
                        open === i ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="w-4 h-4 text-amber-200" strokeWidth={1.5} />
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: open === i ? "auto" : 0,
                      opacity: open === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 sm:px-8 pb-6 text-white/60 leading-relaxed text-pretty"
                      dangerouslySetInnerHTML={{ __html: f.a }}
                    />
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
