"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Gamepad2, Home, GraduationCap } from "lucide-react";

export default function ARVRProjects() {
  const arvrProjects = [
    {
      icon: Eye,
      title: "AR Visualization",
      description:
        "Immersive augmented reality experiences for product visualization and marketing.",
      image:
        "https://images.pexels.com/photos/4389739/pexels-photo-4389739.jpeg",
    },
    {
      icon: Gamepad2,
      title: "VR Gaming",
      description:
        "Interactive virtual reality games and entertainment experiences.",
      image:
        "https://images.pexels.com/photos/4389742/pexels-photo-4389742.jpeg",
    },
    {
      icon: Home,
      title: "Virtual Showrooms",
      description:
        "3D virtual spaces for real estate, retail, and product demonstrations.",
      image:
        "https://images.pexels.com/photos/33158875/pexels-photo-33158875.jpeg",
    },
    {
      icon: GraduationCap,
      title: "AR Training",
      description:
        "Educational and training applications using augmented reality technology.",
      image:
        "https://images.pexels.com/photos/6250964/pexels-photo-6250964.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-foreground/60 to-transparent"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-foreground/60 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AR/VR{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Step into the future with immersive augmented and virtual reality
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {arvrProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Card className="bg-background border-[#00f6ff]/20 p-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />

                    {/* Tilt/Zoom Effect Overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/80 to-[#007bff]/80 flex items-center justify-center"
                    >
                      <div className="text-white text-center">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                          <project.icon className="w-6 h-6" />
                        </motion.div>
                        <p className="text-sm font-semibold">
                          Experience AR/VR
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#00bfff]/25 transition-all duration-300"
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#007bff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Animated Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mt-4 rounded-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
