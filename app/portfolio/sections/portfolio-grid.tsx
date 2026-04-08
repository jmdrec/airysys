"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "ai" | "web" | "mobile";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI & ML" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile" },
];

const projects = [
  {
    title: "FinGuard AI",
    description:
      "AI-powered fraud detection platform for a fintech client. Reduced false positives by 40% using custom ML models.",
    category: "ai" as Category,
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    gradient: "from-blue-600 to-cyan-500",
    size: "lg",
  },
  {
    title: "HealthBridge Mobile",
    description:
      "Cross-platform telehealth application serving 50K+ daily active users with real-time video consultations.",
    category: "mobile" as Category,
    tags: ["React Native", "Node.js", "WebRTC"],
    gradient: "from-purple-600 to-pink-500",
    size: "sm",
  },
  {
    title: "DataFlow Orchestrator",
    description:
      "Multi-agent AI system that automates data pipeline management, reducing manual tasks by 70%.",
    category: "ai" as Category,
    tags: ["LangChain", "CrewAI", "Python", "PostgreSQL"],
    gradient: "from-primary to-emerald-500",
    size: "sm",
  },
  {
    title: "RetailEdge Platform",
    description:
      "Full-stack e-commerce platform with AI-powered recommendation engine and predictive inventory management.",
    category: "web" as Category,
    tags: ["Next.js", "TypeScript", "Stripe", "Redis"],
    gradient: "from-amber-500 to-orange-500",
    size: "sm",
  },
  {
    title: "SmartCity Dashboard",
    description:
      "IoT-integrated real-time monitoring dashboard for urban infrastructure management across 3 cities.",
    category: "web" as Category,
    tags: ["React", "D3.js", "GraphQL", "AWS"],
    gradient: "from-rose-500 to-red-500",
    size: "sm",
  },
  {
    title: "EduMentor AI",
    description:
      "Adaptive learning platform with AI tutoring agents that personalize curriculum for each student.",
    category: "ai" as Category,
    tags: ["OpenAI", "Next.js", "MongoDB", "Python"],
    gradient: "from-indigo-500 to-violet-500",
    size: "lg",
  },
  {
    title: "LogiTrack Mobile",
    description:
      "Logistics tracking app with real-time GPS, route optimization, and delivery proof capture.",
    category: "mobile" as Category,
    tags: ["Flutter", "Firebase", "Google Maps API"],
    gradient: "from-teal-500 to-green-500",
    size: "sm",
  },
  {
    title: "ComplianceBot",
    description:
      "RAG-powered AI agent for regulatory compliance checking, processing 1000+ documents daily.",
    category: "ai" as Category,
    tags: ["LangChain", "Pinecone", "FastAPI", "React"],
    gradient: "from-sky-500 to-blue-600",
    size: "sm",
  },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                activeCategory === cat.value
                  ? "bg-primary text-white shadow-md"
                  : "bg-background-alt text-foreground-muted hover:text-foreground hover:bg-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "group relative rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500",
                  project.size === "lg" ? "md:col-span-2" : ""
                )}
              >
                {/* Gradient Header */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-end`}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-lg bg-white/20 text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <p className="text-foreground-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-background-alt text-foreground-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
