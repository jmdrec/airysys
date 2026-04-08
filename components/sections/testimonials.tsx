"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, FinStack Technologies",
    content:
      "AIRYSys delivered an AI-powered fraud detection system that reduced false positives by 40%. Their technical depth and professionalism are unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "VP Engineering, HealthBridge Inc.",
    content:
      "The mobile app they built for our telehealth platform handles 50K+ daily users seamlessly. AIRYSys truly understands scale and performance.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Founder, DataFlow AI",
    content:
      "Their Agentic AI solution automated 70% of our manual data pipeline tasks. The ROI was visible within the first quarter. Highly recommend.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            Building trust through exceptional delivery and long-term
            partnerships.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-foreground-muted leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-foreground-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
