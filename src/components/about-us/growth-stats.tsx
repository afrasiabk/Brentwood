"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart } from "lucide-react";

export function GrowthStats() {
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [growthCount, setGrowthCount] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      // Customer Satisfaction Counter
      let satisfactionStart = 0;
      const satisfactionEnd = 98.6;
      const satisfactionTimer = setInterval(() => {
        satisfactionStart += 0.5;
        if (satisfactionStart >= satisfactionEnd) {
          setSatisfactionCount(satisfactionEnd);
          clearInterval(satisfactionTimer);
        } else {
          setSatisfactionCount(Math.floor(satisfactionStart * 10) / 10);
        }
      }, 20);

      // Revenue Growth Counter
      let growthStart = 0;
      const growthEnd = 185;
      const growthTimer = setInterval(() => {
        growthStart += 2;
        if (growthStart >= growthEnd) {
          setGrowthCount(growthEnd);
          clearInterval(growthTimer);
        } else {
          setGrowthCount(Math.floor(growthStart));
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("growth-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 bg-background relative overflow-hidden"
      id="growth-stats"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00bfff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Innovate with{" "}
              <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
                Confidence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We turn complexity into clarity — combining technology, strategy,
              and trust to deliver solutions that drive real business results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:brightness-110 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - KPI Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Customer Satisfaction Rate */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Heart className="w-8 h-8 text-white" />
                        <h3 className="text-lg font-semibold text-white">
                          Customer Satisfaction Rate
                        </h3>
                      </div>
                      <motion.div
                        className="text-4xl font-bold text-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        {satisfactionCount}%
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="text-white"
                    >
                      <Heart className="w-16 h-16 opacity-20" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Annual Revenue Growth */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <TrendingUp className="w-8 h-8 text-white" />
                        <h3 className="text-lg font-semibold text-white">
                          Annual Revenue Growth
                        </h3>
                      </div>
                      <motion.div
                        className="text-4xl font-bold text-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        {growthCount}%
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="text-white"
                    >
                      <TrendingUp className="w-16 h-16 opacity-20" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
