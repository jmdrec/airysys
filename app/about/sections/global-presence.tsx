"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const indiaOffices = [
  {
    city: "Nandyal",
    type: "Office",
    address:
      "2nd Floor, 25/684/374, opp. Nayana Hospital, Padmavathi Nagar, Nandyala, Andhra Pradesh 518501",
    timezone: "IST (UTC+5:30)",
    phone: "+91 98765 43210",
    email: "hello@airysys.com",
  },
  {
    city: "Hyderabad",
    type: "Office",
    address:
      "604, Block B, Skill Estate, Vijay nagar colony, Hyderabad, Telangana, India",
    timezone: "IST (UTC+5:30)",
    phone: "+91 98765 43210",
    email: "hello@airysys.com",
  },
];

const clientRegions = [
  {
    flag: "🇺🇸",
    label: "United States",
    detail: "Enterprise and startup engagements",
  },
  {
    flag: "🇬🇧",
    label: "United Kingdom",
    detail: "Technology and product partnerships",
  },
  {
    flag: "🌍",
    label: "Middle East",
    detail: "Regional projects and support",
  },
  {
    flag: "🌍",
    label: "Africa",
    detail: "Growing client collaborations",
  },
];

export function GlobalPresence() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Presence & reach
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            Offices in India, clients worldwide
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            We operate from Nandyal and Hyderabad, and partner with organizations
            across the USA, UK, Middle East, Africa, and other regions —
            combining local delivery with global collaboration.
          </p>
        </motion.div>

        <h3 className="text-lg font-semibold text-foreground mb-6 text-center md:text-left">
          Our offices in India
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {indiaOffices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇮🇳</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {office.city}
                  </h3>
                  <span className="text-sm text-primary font-medium">
                    {office.type}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-foreground-muted">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  {office.address}
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground-muted">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  {office.timezone}
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground-muted">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {office.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground-muted">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {office.email}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <Globe className="h-5 w-5" />
            <span>Where our clients are based</span>
          </div>
          <p className="mt-2 text-sm text-foreground-muted max-w-xl mx-auto">
            These are regions we actively work with — not separate AIRYSys
            offices. Delivery is coordinated from our India hubs and remotely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientRegions.map((region, i) => (
            <motion.div
              key={region.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-background-alt border border-border text-center"
            >
              <span className="text-3xl block mb-3">{region.flag}</span>
              <h4 className="font-semibold text-foreground">{region.label}</h4>
              <p className="text-sm text-foreground-muted mt-2">{region.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
