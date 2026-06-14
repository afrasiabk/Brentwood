"use client";

import { motion } from "framer-motion";
import { Home, Factory, Car, Heart } from "lucide-react";

const iot = [
  { icon: Home, title: "Smart homes", body: "Effortless ecosystems for the way modern households actually live." },
  { icon: Factory, title: "Industrial IoT", body: "Connected manufacturing floors with telemetry that engineers trust." },
  { icon: Car, title: "Connected vehicles", body: "Telematics and OTA pipelines for fleets and the cars of the future." },
  { icon: Heart, title: "Healthcare IoT", body: "Medical-grade device connectivity with clinical-grade privacy." },
];

export default function IoTSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <span className="eyebrow">Internet of Things</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              Connecting devices, data and{" "}
              <span className="font-serif-italic brand-gradient">decisions.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-white/55 text-lg leading-relaxed self-end">
            Our IoT practice spans firmware, gateways, cloud ingestion and the
            visualisation layers that turn streams of numbers into things you
            can act on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {iot.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(251,113,133,0.25), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-6 group-hover:bg-rose-400/10 transition-colors">
                  <s.icon className="w-5 h-5 text-amber-200" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[14px] text-white/55 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
