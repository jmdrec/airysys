"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@airysys.com",
    href: "mailto:hello@airysys.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919876543210",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri, 9 AM – 7 PM IST",
    href: null,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Hyderabad, Telangana, India",
    href: null,
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Contact Information
        </h2>
        <p className="text-foreground-muted">
          Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="space-y-5">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary">
              <detail.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-foreground-muted">{detail.label}</div>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    detail.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="font-medium text-foreground">
                  {detail.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Map */}
      <div className="rounded-2xl overflow-hidden border border-border h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.0431589!2d78.24323!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AIRYSys Office Location"
        />
      </div>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
      >
        <div className="p-2 rounded-lg bg-emerald-500 text-white">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div>
          <div className="font-semibold text-emerald-800">
            Quick Chat on WhatsApp
          </div>
          <div className="text-sm text-emerald-600">
            Get instant responses during business hours
          </div>
        </div>
      </a>
    </motion.div>
  );
}
