"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2 } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-dark-bg overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-company.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-bg/75" />
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
            <Building2 className="h-4 w-4" />
            About AIRYSys
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Building the Future with{" "}
            <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl">
            AIRYSys Pvt Ltd is a next-generation IT solutions company with offices
            in Nandyal and Hyderabad. We serve clients in the USA, UK, Middle East,
            Africa, and beyond — specializing in AI-driven platforms, enterprise
            software, and intelligent automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
