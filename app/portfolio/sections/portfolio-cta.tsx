"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PortfolioCTA() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Want to See Your Idea Here?
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-xl mx-auto">
            Let&apos;s build something exceptional together. Every project in
            our portfolio started with a single conversation.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="xl" className="group">
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
