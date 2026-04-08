"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";

export function ServicesList() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            id={service.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "" : ""}`}
            >
              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block relative aspect-video rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-dark-bg/30 group-hover:bg-dark-bg/10 transition-colors" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 rounded-xl bg-primary text-white shadow-lg">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-medium mb-4`}
                >
                  {service.shortTitle}
                </div>
                <h2 className="text-3xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key features preview */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {service.features.slice(0, 4).map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground-muted"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <Link href={`/services/${service.slug}`}>
                    <Button className="group">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
