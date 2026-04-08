"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BlogCategory = "all" | "ai" | "web" | "engineering" | "career";

const blogCategories: { value: BlogCategory; label: string }[] = [
  { value: "all", label: "All Posts" },
  { value: "ai", label: "AI & ML" },
  { value: "web", label: "Web Dev" },
  { value: "engineering", label: "Engineering" },
  { value: "career", label: "Career" },
];

const blogPosts = [
  {
    title: "Understanding Agentic AI: Beyond Chatbots and Copilots",
    excerpt:
      "Agentic AI represents a paradigm shift in automation. Learn how autonomous agents are revolutionizing enterprise workflows and why your business should care.",
    category: "ai" as BlogCategory,
    date: "Mar 28, 2026",
    readTime: "8 min read",
    featured: true,
    gradient: "from-primary to-emerald-500",
  },
  {
    title: "Next.js 15 App Router: A Complete Guide for Production",
    excerpt:
      "Everything you need to know about building production-ready applications with Next.js 15's App Router, Server Components, and streaming.",
    category: "web" as BlogCategory,
    date: "Mar 20, 2026",
    readTime: "12 min read",
    featured: false,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Building RAG Pipelines That Actually Work",
    excerpt:
      "A practical guide to retrieval-augmented generation — from chunking strategies to vector databases and evaluation frameworks.",
    category: "ai" as BlogCategory,
    date: "Mar 15, 2026",
    readTime: "10 min read",
    featured: false,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "The SDLC is Dead. Long Live AI-Augmented Development",
    excerpt:
      "How AI tools are reshaping the software development lifecycle — and what it means for engineering teams in 2026.",
    category: "engineering" as BlogCategory,
    date: "Mar 10, 2026",
    readTime: "6 min read",
    featured: false,
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "From Intern to Engineer: How to Break Into Tech in 2026",
    excerpt:
      "Practical advice for students and career switchers looking to land their first tech role, with or without a CS degree.",
    category: "career" as BlogCategory,
    date: "Mar 5, 2026",
    readTime: "7 min read",
    featured: false,
    gradient: "from-rose-500 to-red-500",
  },
  {
    title: "Scaling React Native Apps to 100K+ Users",
    excerpt:
      "Lessons learned from building and scaling cross-platform mobile applications — performance, architecture, and monitoring.",
    category: "web" as BlogCategory,
    date: "Feb 28, 2026",
    readTime: "9 min read",
    featured: false,
    gradient: "from-indigo-500 to-violet-500",
  },
];

export function BlogsList() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");

  const filtered =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPost = filtered.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured);

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {blogCategories.map((cat) => (
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

        {/* Featured Post */}
        {featuredPost && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 group"
          >
            <Link href="#" className="block">
              <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                <div
                  className={`h-64 md:h-auto bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center p-8`}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm mb-4">
                      <Tag className="h-3.5 w-3.5" />
                      Featured
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                      {featuredPost.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 bg-card flex flex-col justify-center">
                  <p className="text-foreground-muted leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-foreground-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <Link href="#" className="block h-full">
                <div className="h-full rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                  <div
                    className={`h-40 bg-gradient-to-br ${post.gradient} flex items-end p-6`}
                  >
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium capitalize">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-foreground-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-foreground-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
