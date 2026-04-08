"use client";

import { useState } from "react";
import Image from "next/image";
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
    image: "/images/service-agentic.png",
  },
  {
    title: "Next.js 15 App Router: A Complete Guide for Production",
    excerpt:
      "Everything you need to know about building production-ready applications with Next.js 15's App Router, Server Components, and streaming.",
    category: "web" as BlogCategory,
    date: "Mar 20, 2026",
    readTime: "12 min read",
    featured: false,
    image: "/images/service-web.png",
  },
  {
    title: "Building RAG Pipelines That Actually Work",
    excerpt:
      "A practical guide to retrieval-augmented generation — from chunking strategies to vector databases and evaluation frameworks.",
    category: "ai" as BlogCategory,
    date: "Mar 15, 2026",
    readTime: "10 min read",
    featured: false,
    image: "/images/service-ml.png",
  },
  {
    title: "IoT in Manufacturing: Real-World Case Studies",
    excerpt:
      "How industrial IoT is reducing downtime and improving efficiency — with real implementation stories and metrics.",
    category: "engineering" as BlogCategory,
    date: "Mar 10, 2026",
    readTime: "6 min read",
    featured: false,
    image: "/images/service-iot.png",
  },
  {
    title: "From Intern to Engineer: How to Break Into Tech in 2026",
    excerpt:
      "Practical advice for students and career switchers looking to land their first tech role, with or without a CS degree.",
    category: "career" as BlogCategory,
    date: "Mar 5, 2026",
    readTime: "7 min read",
    featured: false,
    image: "/images/hero-internships.png",
  },
  {
    title: "Blockchain Beyond Crypto: Enterprise Use Cases",
    excerpt:
      "Smart contracts for supply chains, decentralized identity, and transparent auditing — blockchain is transforming enterprise operations.",
    category: "engineering" as BlogCategory,
    date: "Feb 28, 2026",
    readTime: "9 min read",
    featured: false,
    image: "/images/service-blockchain.png",
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
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-dark-bg/30" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                      <Tag className="h-3.5 w-3.5" />
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 bg-card flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-4 text-foreground-muted leading-relaxed">
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
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-dark-bg/20" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium capitalize">
                        {post.category}
                      </span>
                    </div>
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
