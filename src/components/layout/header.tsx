"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";



export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 32);
      // Hide when scrolling down past 80px, show when scrolling up
      if (currentY > 80) {
        setHidden(currentY > lastY);
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isScrolled = mounted && scrolled;
  // Always light (white) nav text when not scrolled — header is always dark-glass at top
  const useLightNav = !isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        style={{
          background: isScrolled
            ? "rgba(244, 250, 255, 0.75)"
            : "rgba(10, 22, 40, 0.18)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: isScrolled ? "0 1px 0 rgba(195, 198, 215, 0.35)" : "none",
          minHeight: "140px",
        }}
      >
        {/* Bottom hairline — gradient tint, no solid border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: isScrolled
              ? "linear-gradient(to right, transparent, rgba(195, 198, 215, 0.6), transparent)"
              : "linear-gradient(to right, transparent, rgba(181, 208, 253, 0.25), transparent)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: "140px" }}>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ ["--tw-ring-color" as string]: "#004ac6" }}
              aria-label="Freedom Horizon Financial — Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Freedom Horizon Financial"
                style={{ height: "110px", width: "auto", display: "block" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 text-base font-bold font-display tracking-tight transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5",
                    "after:scale-x-0 after:transition-transform after:duration-200 after:origin-left",
                    "hover:after:scale-x-100",
                    useLightNav
                      ? "text-white/80 hover:text-white after:bg-white/50"
                      : "text-fhf-ink-mid hover:text-fhf-navy after:bg-fhf-blue"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  "text-base font-medium font-body tracking-wide transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2",
                  useLightNav ? "text-white/70 hover:text-white" : "text-fhf-ink-light hover:text-fhf-navy"
                )}
              >
                Contact
              </Link>

              <span
                className="w-px h-4"
                style={{ background: useLightNav ? "rgba(255,255,255,0.2)" : "#c5d8e8" }}
              />

              <Link
                href="/get-started"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-base font-bold font-body text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-md hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)",
                  boxShadow: "0 4px 16px rgba(0, 74, 198, 0.25)",
                }}
              >
                Get Started
                <span className="text-[10px] opacity-60">→</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "md:hidden w-10 h-10 flex items-center justify-center transition-colors",
                "focus-visible:outline-none focus-visible:ring-2",
                useLightNav ? "text-white" : "text-fhf-navy"
              )}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
