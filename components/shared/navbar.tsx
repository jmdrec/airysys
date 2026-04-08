"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/internships", label: "Internships" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white border-b border-border transition-all duration-300",
        isScrolled && "shadow-md"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo mark + wordmark (separate assets) */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={48}
              height={48}
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              priority
            />
            <Image
              src="/logo-name.png"
              alt="AIRYSys — Build Intelligence"
              width={200}
              height={48}
              className="h-9 sm:h-10 w-auto max-w-[min(52vw,200px)] object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground-muted hover:text-foreground hover:bg-primary/5"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:block">
              <Button size="default">Get in Touch</Button>
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground-muted hover:text-foreground hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link href="/contact">
                  <Button className="w-full" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
