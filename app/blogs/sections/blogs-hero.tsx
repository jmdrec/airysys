"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export function BlogsHero() {
  return (
    <section className="relative pt-32 pb-20 bg-dark-bg overflow-hidden min-h-[50vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ai-expertise.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-bg/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Tech Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Insights & <span className="gradient-text">Innovation</span>
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Deep dives into AI, engineering best practices, and technology
            trends from the AIRYSys team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
