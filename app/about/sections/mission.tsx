"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl bg-background-alt border border-border"
          >
            <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-5">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-foreground-muted leading-relaxed text-lg">
              To empower businesses worldwide with intelligent, scalable
              technology solutions that drive growth, efficiency, and innovation.
              We believe every organization deserves access to world-class
              engineering and AI capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl bg-dark-bg border border-white/10"
          >
            <div className="inline-flex p-3 rounded-xl bg-primary/20 text-primary mb-5">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              To become a globally recognized leader in AI-driven IT solutions —
              a company where innovation meets execution, and where the next
              generation of tech professionals are nurtured and empowered.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
