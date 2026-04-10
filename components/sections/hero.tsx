"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    badge: "AI-Powered IT Solutions",
    headline: "Transforming Ideas into",
    highlight: "Future-Ready",
    headlineEnd: "Technology",
    description:
      "We architect intelligent solutions that scale — from cutting-edge web platforms and mobile apps to Agentic AI systems that automate your future.",
    cta: { label: "Get Started", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    image: "/images/hero-services.png",
  },
  {
    badge: "Class to Career Internship",
    headline: "Break the",
    highlight: '"No Experience — No Job"',
    headlineEnd: "Cycle",
    description:
      "Join AIRYSys Academy — work on live projects, get mentored by industry experts, earn a stipend, and launch your tech career with confidence.",
    cta: { label: "Apply Now", href: "/internships" },
    secondaryCta: { label: "View Programs", href: "/internships#programs" },
    image: "/images/hero-internships.png",
  },
  {
    badge: "Agentic AI & Machine Learning",
    headline: "Building",
    highlight: "Autonomous AI",
    headlineEnd: "That Thinks & Acts",
    description:
      "From multi-agent orchestration to RAG pipelines and intelligent automation — we deliver AI systems that reason, plan, and execute complex workflows.",
    cta: { label: "Explore AI Services", href: "/services/agentic-ai" },
    secondaryCta: { label: "View Portfolio", href: "/portfolio" },
    image: "/images/hero-ai-expertise.png",
  },
  {
    badge: "Global Technology Partner",
    headline: "Serving Clients Across",
    highlight: "India & the World",
    headlineEnd: "",
    description:
      "With offices in Nandyal and Hyderabad, we deliver projects for clients in the USA, UK, Middle East, Africa, and beyond — combining local expertise with global delivery.",
    cta: { label: "Start a Project", href: "/contact" },
    secondaryCta: { label: "About Us", href: "/about" },
    image: "/images/hero-company.png",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg pt-18">
      {/* Background Image */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-dark-bg/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
                {slide.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                {slide.headline}{" "}
                <span className="gradient-text">{slide.highlight}</span>{" "}
                {slide.headlineEnd}
              </h1>

              <p className="mt-5 text-lg text-white/60 max-w-xl leading-relaxed">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <Link href={slide.cta.href}>
                  <Button size="xl" className="group">
                    {slide.cta.label}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href={slide.secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    {slide.secondaryCta.label}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats Card (visible on desktop) */}
          <div className="hidden lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 max-w-sm"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "3", label: "Global Offices" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                >
                  <div className="text-2xl font-semibold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="mt-12 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-white/20 text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-lg border border-white/20 text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
