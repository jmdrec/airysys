"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  ShoppingCart,
  Landmark,
  Zap,
  Building2,
  Factory,
  Truck,
  GraduationCap,
  RadioTower,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "AI and data analytics for diagnostics, patient care, telehealth, and operational efficiency.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description:
      "Personalized experiences, inventory systems, secure payments, and omnichannel platforms.",
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    description:
      "Fraud detection, risk analytics, compliance-ready systems, and secure digital banking.",
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Smart grids, predictive maintenance, and sustainability analytics for energy providers.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Property tech, smart building platforms, and AI-driven customer engagement.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Automation, IoT, quality control, and predictive maintenance on the shop floor.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Route optimization, fleet tracking, warehouse systems, and IoT-enabled visibility.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "EdTech platforms, learning analytics, and AI-powered student support.",
  },
  {
    icon: RadioTower,
    title: "Telecom",
    description:
      "Network efficiency, customer experience, and fraud detection for telecom operators.",
  },
];

export function Industries() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Industry
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            We deliver tailored AI and technology solutions across sectors — from
            healthcare and finance to manufacturing and logistics, inspired by
            how leading partners like{" "}
            <a
              href="https://www.haasa.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Haasa AI
            </a>{" "}
            approach industry-specific innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/25 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ind.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {ind.title}
              </h3>
              <p className="mt-3 text-foreground-muted leading-relaxed text-sm">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Discuss your industry use case
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
