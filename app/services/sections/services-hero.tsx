"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-dark-bg overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-services.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Layers className="h-4 w-4" />
            Our Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Technology Solutions That{" "}
            <span className="gradient-text">Drive Growth</span>
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl">
            From concept to deployment, we deliver end-to-end solutions that
            combine engineering excellence with AI innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
