"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-fhf-navy/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer — editorial dark */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-72 max-w-[88vw] bg-fhf-navy flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Gold left rule */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-fhf-sky/50 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-7 py-6 border-b border-white/10">
              <div>
                <div className="font-display font-semibold text-white text-sm leading-tight tracking-tight">
                  Freedom Horizon
                </div>
                <div className="text-eyebrow text-fhf-sky mt-0.5">Financial</div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-sky"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-7 py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.055, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 border-b border-white/8 font-display font-semibold text-white/60 hover:text-white text-xl tracking-tight transition-colors leading-none"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-7 pb-8 flex flex-col gap-3">
              <Link
                href="/get-started"
                onClick={onClose}
                className="block w-full text-center px-6 py-3.5 bg-fhf-blue text-white font-semibold font-body text-sm tracking-wide hover:bg-fhf-sky transition-colors"
              >
                Get Started →
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
