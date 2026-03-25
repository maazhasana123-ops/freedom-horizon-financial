"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";

// Pages whose hero section has a dark background — nav starts white
const DARK_HERO_PAGES = ["/", "/mission", "/system"];

/* FHF Logo SVG — wave + sun mark */
function FHFLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sun circle */}
      <ellipse cx="24" cy="20" rx="7" ry="7" fill="#7ab8d9" />
      {/* Sun rays */}
      <line x1="24" y1="8"  x2="24" y2="4"  stroke="#2e6db4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="11" x2="34.5" y2="7.5" stroke="#2e6db4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="19" x2="40"   y2="19"   stroke="#2e6db4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="11" x2="13.5" y2="7.5"  stroke="#2e6db4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="19" x2="8"    y2="19"   stroke="#2e6db4" strokeWidth="1.5" strokeLinecap="round" />
      {/* Wave 1 — sky blue */}
      <path
        d="M2 24 Q10 19 18 23 Q26 27 34 22 Q42 17 46 21"
        stroke="#7ab8d9" strokeWidth="2.2" fill="none" strokeLinecap="round"
      />
      {/* Wave 2 — mid blue */}
      <path
        d="M2 28 Q10 23 18 27 Q26 31 34 26 Q42 21 46 25"
        stroke="#2e6db4" strokeWidth="2.5" fill="none" strokeLinecap="round"
      />
      {/* Wave 3 — navy */}
      <path
        d="M2 33 Q12 27 20 32 Q28 37 38 30 Q43 27 46 29"
        stroke="#1a2d5a" strokeWidth="3" fill="none" strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll(); // sync immediately on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isScrolled = mounted && scrolled;
  // Show white nav text only when at top of a dark-hero page
  const useLightNav = !isScrolled && hasDarkHero;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        )}
        style={
          isScrolled
            ? {
                background: "rgba(244, 250, 255, 0.92)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 1px 0 rgba(195, 198, 215, 0.4)",
              }
            : useLightNav
            ? {
                background: "rgba(10, 22, 40, 0.15)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }
            : {
                background: "rgba(244, 250, 255, 0.92)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 1px 0 rgba(195, 198, 215, 0.3)",
              }
        }
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
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ ["--tw-ring-color" as string]: "#004ac6" }}
              aria-label="Freedom Horizon Financial — Home"
            >
              <FHFLogoMark className="w-10 h-8 flex-shrink-0" />
              <div className="leading-none">
                <div
                  className="font-display font-bold text-base tracking-tight leading-none transition-colors duration-300"
                  style={{ color: useLightNav ? "#ffffff" : "#1a2d5a" }}
                >
                  Freedom Horizon
                </div>
                <div
                  className="text-eyebrow mt-0.5 transition-colors duration-300"
                  style={{ color: useLightNav ? "rgba(181,208,253,0.85)" : "#2e6db4" }}
                >
                  Financial
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-bold font-display tracking-tight transition-colors duration-200",
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
                  "text-sm font-medium font-body tracking-wide transition-colors duration-200",
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
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold font-body text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-md hover:opacity-90"
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
