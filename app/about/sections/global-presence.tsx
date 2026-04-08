"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    country: "India",
    flag: "🇮🇳",
    city: "Hyderabad",
    type: "HQ & Development Center",
    address: "Hyderabad, Telangana, India",
    timezone: "IST (UTC+5:30)",
    phone: "+91 98765 43210",
    email: "india@airysys.com",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    city: "New York",
    type: "Americas Office",
    address: "New York, NY, USA",
    timezone: "EST (UTC-5)",
    phone: "+1 (212) 555-0198",
    email: "usa@airysys.com",
  },
  {
    country: "UK",
    flag: "🇬🇧",
    city: "London",
    type: "Europe Office",
    address: "London, United Kingdom",
    timezone: "GMT (UTC+0)",
    phone: "+44 20 7946 0958",
    email: "uk@airysys.com",
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
            Global Presence
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            Where We Operate
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            With offices across three continents, we deliver solutions with
            global perspective and local expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, i) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{office.flag}</span>
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
      </div>
    </section>
  );
}
