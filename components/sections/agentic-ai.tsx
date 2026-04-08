"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Workflow,
  Zap,
  Shield,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Autonomous Reasoning",
    description:
      "AI agents that think, plan, and make decisions without constant human oversight.",
  },
  {
    icon: Workflow,
    title: "Multi-Step Workflows",
    description:
      "Orchestrate complex business processes with agents that handle end-to-end execution.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Interface",
    description:
      "Interact with your systems using conversational AI — no technical expertise needed.",
  },
  {
    icon: Zap,
    title: "Real-Time Adaptation",
    description:
      "Agents that learn from context and adapt their strategies in real-time.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Built with guardrails, audit trails, and compliance frameworks for safe AI deployment.",
  },
];

export function AgenticAI() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Agentic AI
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white leading-tight">
              The Future of Intelligent Automation is{" "}
              <span className="gradient-text">Agentic</span>
            </h2>
            <p className="mt-5 text-lg text-white/60 leading-relaxed">
              Our Agentic AI platform goes beyond chatbots and basic automation.
              We build autonomous AI systems that reason, plan, collaborate, and
              execute — transforming how your business operates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/services#agentic-ai">
                <Button size="lg" className="group">
                  Explore Agentic AI
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/8 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/20 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
