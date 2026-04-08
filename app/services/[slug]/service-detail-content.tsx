"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { ServiceData } from "@/lib/services-data";
import { cn } from "@/lib/utils";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-background-alt transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-foreground-muted transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-foreground-muted leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export function ServiceDetailContent({
  service,
  otherServices,
}: {
  service: ServiceData;
  otherServices: ServiceData[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-bg overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-bg/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>

            <div
              className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-medium mb-5`}
            >
              {service.shortTitle}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              {service.title}
            </h1>

            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl">
              {service.longDescription}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="xl" className="group">
                  Discuss Your Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features + Tech */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                What We Deliver
              </h2>
              <div className="grid gap-4">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground-muted">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech + Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Why Choose AIRYSys
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-bold text-primary mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-white">Our Process</h2>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-white mb-2">{p.step}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-3">
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Explore Other Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all"
              >
                <div className="relative h-40">
                  <Image
                    src={s.image}
                    alt={s.shortTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-dark-bg/50" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${s.gradient} text-white text-xs font-medium`}
                    >
                      {s.shortTitle}
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-card">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-foreground-muted">
            Let&apos;s discuss how {service.shortTitle.toLowerCase()} can
            transform your business.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="xl" className="group">
                Start a Conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
