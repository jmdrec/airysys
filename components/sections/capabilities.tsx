"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Bot,
  Cloud,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Scalable, high-performance web applications built with modern frameworks and best practices.",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "hover:border-blue-500/30",
    iconColor: "text-blue-600",
    href: "/services#web",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "hover:border-purple-500/30",
    iconColor: "text-purple-600",
    href: "/services#mobile",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Custom ML models and data pipelines that turn raw data into actionable intelligence.",
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-600",
    href: "/services#ml",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description:
      "Autonomous AI agents that reason, plan, and execute complex business workflows.",
    color: "from-primary/10 to-emerald-500/10",
    borderColor: "hover:border-primary/40",
    iconColor: "text-primary",
    href: "/services#agentic-ai",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Enterprise-grade cloud infrastructure, CI/CD pipelines, and DevOps automation.",
    color: "from-rose-500/10 to-red-500/10",
    borderColor: "hover:border-rose-500/30",
    iconColor: "text-rose-600",
    href: "/services#cloud",
  },
];

export function Capabilities() {
  return (
    <section className="py-24 bg-background">
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
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            Core Capabilities
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            End-to-end technology solutions powered by AI, built for scale, and
            designed for impact.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={cap.href}
                className={`group block p-8 rounded-2xl bg-gradient-to-br ${cap.color} border border-border ${cap.borderColor} hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-white shadow-sm ${cap.iconColor}`}
                >
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-3 text-foreground-muted leading-relaxed">
                  {cap.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
