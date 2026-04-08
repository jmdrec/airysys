"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery-workspace.png",
    alt: "AIRYSys workspace and team collaboration",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-office.png",
    alt: "Modern tech office environment",
    span: "",
  },
  {
    src: "/images/gallery-coding.png",
    alt: "Developer coding session",
    span: "",
  },
  {
    src: "/images/hero-internships.png",
    alt: "Team mentorship and training",
    span: "md:col-span-2",
  },
  {
    src: "/images/gallery-brainstorm.png",
    alt: "Team brainstorming session",
    span: "",
  },
  {
    src: "/images/hero-ai-expertise.png",
    alt: "AI research and development",
    span: "",
  },
];

export function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            Life at AIRYSys
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            A glimpse into our workspace, culture, and the technology we build
            every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <div className="relative aspect-[4/3] w-full h-full min-h-[200px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-white font-medium">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
