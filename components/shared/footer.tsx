import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Development", href: "/services#mobile" },
    { label: "Machine Learning", href: "/services#ml" },
    { label: "Agentic AI", href: "/services#agentic-ai" },
    { label: "Cloud & Deployment", href: "/services#cloud" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/internships" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Internship Program", href: "/internships" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Tech Blog", href: "/blogs" },
  ],
};

const offices = [
  { country: "India", flag: "🇮🇳", city: "Hyderabad" },
  { country: "USA", flag: "🇺🇸", city: "New York" },
  { country: "UK", flag: "🇬🇧", city: "London" },
];

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      {/* CTA Strip */}
      <div className="gradient-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Ready to Build Something Intelligent?
            </h3>
            <p className="text-white/80 mt-1">
              Let&apos;s transform your ideas into future-ready technology.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
              <div className="inline-flex items-center gap-2 sm:gap-3 rounded-lg bg-white/95 px-2.5 py-2 shadow-sm">
                <Image
                  src="/logo-mark.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
                />
                <Image
                  src="/logo-name.png"
                  alt="AIRYSys — Build Intelligence"
                  width={200}
                  height={44}
                  className="h-8 sm:h-9 w-auto max-w-[200px] object-contain object-left"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mt-4">
              AIRYSys is a next-generation IT solutions company specializing in
              AI-driven platforms, web & mobile development, and intelligent
              automation for businesses worldwide.
            </p>

            {/* Global Offices */}
            <div className="flex items-center gap-4 mt-6">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className="flex items-center gap-1.5 text-sm text-white/50"
                >
                  <span>{office.flag}</span>
                  <span>{office.city}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: "LinkedIn", href: "#", text: "in" },
                { label: "Twitter", href: "#", text: "X" },
                { label: "GitHub", href: "#", text: "GH" },
                { label: "Instagram", href: "#", text: "IG" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 hover:bg-primary hover:text-white transition-all duration-300 text-xs font-bold"
                >
                  {social.text}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@airysys.com"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@airysys.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  Hyderabad, India
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} AIRYSys Pvt Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
