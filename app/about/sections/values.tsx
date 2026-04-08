"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, adopting emerging technologies and building solutions that define the future.",
  },
  {
    icon: Heart,
    title: "Client Obsession",
    description:
      "Every decision we make starts with the client. Their success is the metric that matters most.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description:
      "We ship production-ready code with robust testing, security, and performance standards.",
  },
  {
    icon: Zap,
    title: "Agility & Speed",
    description:
      "Fast iterations, lean processes, and rapid delivery without compromising on quality.",
  },
  {
    icon: Users,
    title: "People & Culture",
    description:
      "We invest in our team's growth, fostering a culture of learning, collaboration, and ownership.",
  },
  {
    icon: TrendingUp,
    title: "Impact-Driven",
    description:
      "We measure success by the tangible business impact our solutions create for our clients.",
  },
];

export function Values() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Values
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            What Drives Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all"
            >
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary">
                <value.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
