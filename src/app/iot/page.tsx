"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/common/page-hero";

const iotProjects = [
  {
    id: 1,
    title: "Smart Home Automation",
    description:
      "Voice control, smart lighting, security integration and energy management — connected devices that make homes more efficient.",
    image: "/smart-home.jpg",
    category: "Residential",
  },
  {
    id: 2,
    title: "Industrial Monitoring",
    description:
      "Real-time monitoring and predictive maintenance for manufacturing equipment that prevents downtime before it starts.",
    image: "/industrial-monitoring.jpg",
    category: "Industrial",
  },
  {
    id: 3,
    title: "Healthcare Devices",
    description:
      "Connected medical devices for patient monitoring with seamless integration into existing hospital systems.",
    image: "/healthcare.jpg",
    category: "Healthcare",
  },
  {
    id: 4,
    title: "Smart City",
    description:
      "Urban IoT solutions including traffic management, environmental monitoring and public safety systems.",
    image: "/smart-city.jpg",
    category: "Smart City",
  },
  {
    id: 5,
    title: "Agricultural IoT",
    description:
      "Precision farming with soil sensors, weather monitoring and automated irrigation systems for yield optimisation.",
    image: "/agriculture.jpg",
    category: "AgriTech",
  },
  {
    id: 6,
    title: "Fleet Management",
    description:
      "GPS tracking, vehicle diagnostics and driver behaviour monitoring — real-time insights for commercial fleets.",
    image: "/fleet-management.jpg",
    category: "Transportation",
  },
];

export default function IoTPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        title="Internet of Things"
        description="Smart, scalable and interconnected — explore Brentwood's approach to IoT, from firmware to dashboards."
        eyebrow="IoT Practice"
      />

      <section className="relative py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="eyebrow">Selected work</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              Connected systems we&apos;ve{" "}
              <span className="font-serif-italic brand-gradient">shipped.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {iotProjects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-60px" }}
                className="group glass rounded-2xl overflow-hidden hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050308]/85 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] glass-strong text-amber-200">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="absolute bottom-5 left-5 right-5 text-xl font-semibold text-white tracking-tight">
                    {p.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-[14px] text-white/55 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square -z-0 opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.5), transparent 60%)",
          }}
        />

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="fluid-display text-white text-balance leading-[0.95]">
              Ready to connect
              <br />
              <span className="font-serif-italic brand-gradient">your future?</span>
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build intelligent IoT systems that move from data
              streams to real outcomes.
            </p>

            <Link
              href="/contact-us"
              className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black font-medium hover:bg-amber-200 transition-all duration-300 group"
            >
              Start your IoT journey
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
