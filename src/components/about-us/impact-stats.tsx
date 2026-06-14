"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Calendar, Globe } from "lucide-react";

export function ImpactStats() {
  const [counts, setCounts] = useState({
    projects: 0,
    customers: 0,
    experience: 0,
    countries: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Building2,
      label: "Projects Completed",
      value: 200,
      suffix: "+",
      key: "projects",
    },
    {
      icon: Users,
      label: "Happy Customers",
      value: 120,
      suffix: "+",
      key: "customers",
    },
    {
      icon: Calendar,
      label: "Years of Experience",
      value: 5,
      suffix: "+",
      key: "experience",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: 15,
      suffix: "+",
      key: "countries",
    },
  ];

  useEffect(() => {
    const animateCounters = () => {
      if (hasAnimated) return; // Prevent multiple animations

      setHasAnimated(true);

      stats.forEach((stat) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.key]: end }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }));
          }
        }, 16);
      });
    };

    // Create observer with mobile-friendly settings
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.5], // Multiple thresholds for better mobile detection
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before element is fully visible
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    // Fallback: trigger animation if element is already in view on mount
    const checkInitialVisibility = () => {
      if (currentSection && !hasAnimated) {
        const rect = currentSection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        // Check if any part of the element is visible
        if (rect.top < windowHeight && rect.bottom > 0) {
          animateCounters();
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(checkInitialVisibility, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
      id="impact-stats"
    >
      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          className="h-full w-20 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff]"
          animate={{ x: [-100, 1200] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          className="h-full w-20 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff]"
          animate={{ x: [1200, -100] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00bfff]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <Card className="bg-background border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-full mb-6"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="text-5xl font-bold text-foreground mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {counts[stat.key as keyof typeof counts]}
                      {stat.suffix}
                    </motion.div>

                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>

                    {/* Animated Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true, margin: "-10%" }}
                      className="h-1 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mt-4 rounded-full"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our journey is defined by numbers that reflect trust, commitment,
            and performance. Every project represents a story of collaboration
            and success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
