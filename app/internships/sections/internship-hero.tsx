"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function InternshipHero() {
  return (
    <section className="relative pt-32 pb-20 bg-dark-bg overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-internships.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-bg/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
            <GraduationCap className="h-4 w-4" />
            AIRYSys Academy — Class to Career Internship
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Break the{" "}
            <span className="gradient-text">
              &ldquo;No Experience — No Job&rdquo;
            </span>{" "}
            Cycle
          </h1>

          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            Stuck in the &ldquo;No Experience, No Job&rdquo; loop? Join our
            Class to Career Internship — learn, work on real projects, earn a
            stipend, and step confidently into your career. Any degree eligible.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link href="/contact">
              <Button size="xl" className="group">
                Apply Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#programs">
              <Button
                variant="outline"
                size="xl"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                View Programs & Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
