"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const regions = [
  {
    flag: "🇮🇳",
    label: "India",
    description: "Offices in Nandyal & Hyderabad",
  },
  {
    flag: "🇺🇸",
    label: "USA",
    description: "Enterprise & startup clients",
  },
  {
    flag: "🇬🇧",
    label: "UK",
    description: "Technology partnerships",
  },
  {
    flag: "🌍",
    label: "Middle East",
    description: "Regional engagements",
  },
  {
    flag: "🌍",
    label: "Africa",
    description: "Growing client base",
  },
];

export function TrustStrip() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-sm text-foreground-muted">
            <Globe className="h-4 w-4 text-primary" />
            Trusted by clients across India, USA, UK, Middle East & Africa
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {regions.map((loc, i) => (
            <motion.div
              key={loc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-center gap-3 p-5 rounded-xl bg-background-alt border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <span className="text-2xl">{loc.flag}</span>
              <div className="text-left min-w-0">
                <div className="font-semibold text-foreground text-sm">
                  {loc.label}
                </div>
                <div className="text-xs text-foreground-muted leading-snug">
                  {loc.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
