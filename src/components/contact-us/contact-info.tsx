"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "business@brentwoodglobal.co.uk",
      description: "Send us an email anytime",
      href: "mailto:business@brentwoodglobal.co.uk",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+44 7700 900123",
      description: "Call us during business hours",
      href: "tel:+447700900123",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Brentwood Global, Islamabad, Pakistan",
      description: "Visit our headquarters",
      href: "#map",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block group"
            >
              <Card className="bg-background hover:bg-background/90 transition-all duration-300 transform group-hover:shadow-2xl border border-border h-full shadow-lg">
                <CardContent className="p-6 md:p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <info.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-foreground mb-2 break-words">
                    {info.value}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {info.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-[#00f6ff] to-[#007bff] mx-auto mt-4"
                  />
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
