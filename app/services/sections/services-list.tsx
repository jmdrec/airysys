"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Bot,
  Cloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Application Development",
    description:
      "We build scalable, high-performance web applications using modern frameworks like Next.js, React, and Node.js. Our solutions are optimized for speed, SEO, and conversion.",
    features: [
      "Custom SaaS Platforms",
      "Progressive Web Apps (PWA)",
      "E-Commerce Solutions",
      "Enterprise Dashboards",
      "API Development & Integration",
      "Real-time Applications",
    ],
    tech: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android, built for performance and engagement.",
    features: [
      "Cross-Platform Apps (React Native / Flutter)",
      "Native iOS & Android",
      "Offline-First Architecture",
      "Push Notifications",
      "App Store Optimization",
      "In-App Analytics",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: "ml",
    icon: Brain,
    title: "Machine Learning",
    description:
      "Custom ML models, data pipelines, and predictive analytics that transform raw data into actionable business intelligence and competitive advantage.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Anomaly Detection",
      "Data Pipeline Engineering",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI Systems",
    description:
      "Autonomous AI agents that reason, plan, and execute complex business workflows — going beyond chatbots to true intelligent automation.",
    features: [
      "Autonomous AI Agents",
      "Multi-Agent Orchestration",
      "Tool-Use & Function Calling",
      "RAG Pipelines",
      "Conversational AI",
      "AI Safety & Guardrails",
    ],
    tech: ["LangChain", "CrewAI", "OpenAI", "Anthropic", "Vector DBs"],
    gradient: "from-primary to-emerald-500",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Enterprise-grade cloud infrastructure, CI/CD pipelines, and DevOps automation that ensures your applications are secure, scalable, and always available.",
    features: [
      "Cloud Architecture (AWS / GCP / Azure)",
      "CI/CD Pipeline Setup",
      "Container Orchestration",
      "Infrastructure as Code",
      "Monitoring & Alerting",
      "Security & Compliance",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    gradient: "from-rose-500 to-red-500",
  },
];

export function ServicesList() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-5`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="group">
                      Discuss Your Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Features list */}
              <div
                className={`p-8 rounded-2xl bg-background-alt border border-border ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  What We Deliver
                </h3>
                <div className="grid gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
