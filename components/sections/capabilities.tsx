"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  Brain,
  Bot,
  Cloud,
  Lightbulb,
  Wifi,
  Link as LinkIcon,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable web apps with Next.js, React, and Node.js.",
    image: "/images/service-web.png",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform & native apps for iOS and Android.",
    image: "/images/service-mobile.png",
    href: "/services/mobile-development",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models, NLP, and predictive analytics.",
    image: "/images/service-ml.png",
    href: "/services/machine-learning",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description: "Autonomous agents that reason, plan, and execute.",
    image: "/images/service-agentic.png",
    href: "/services/agentic-ai",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, Azure — CI/CD, Kubernetes, monitoring.",
    image: "/images/service-cloud.png",
    href: "/services/cloud-deployment",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Strategic tech advisory — AI, BI, SAP, Salesforce.",
    image: "/images/service-consulting.png",
    href: "/services/it-consulting",
  },
  {
    icon: Wifi,
    title: "IoT Development",
    description: "Smart connected devices and industrial IoT platforms.",
    image: "/images/service-iot.png",
    href: "/services/iot-development",
  },
  {
    icon: LinkIcon,
    title: "Blockchain",
    description: "Smart contracts, dApps, and decentralized solutions.",
    image: "/images/service-blockchain.png",
    href: "/services/blockchain-development",
  },
  {
    icon: MessageSquare,
    title: "Chatbot & AI Assistants",
    description: "AI-powered bots for support, sales, and engagement.",
    image: "/images/service-chatbot.png",
    href: "/services/chatbot-development",
  },
];

export function Capabilities() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                href={cap.href}
                className="group block rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative h-44">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-dark-bg/20 transition-colors" />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 shadow-sm">
                    <cap.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="p-5 bg-card">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {cap.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
