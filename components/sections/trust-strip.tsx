"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const locations = [
  {
    country: "India",
    flag: "🇮🇳",
    city: "Hyderabad",
    description: "Development Hub",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    city: "New York",
    description: "Americas Office",
  },
  {
    country: "UK",
    flag: "🇬🇧",
    city: "London",
    description: "Europe Office",
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
            Trusted Globally Across 3 Continents
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-4 p-6 rounded-xl bg-background-alt border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl">{loc.flag}</span>
              <div>
                <div className="font-semibold text-foreground">{loc.city}</div>
                <div className="text-sm text-foreground-muted">
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
