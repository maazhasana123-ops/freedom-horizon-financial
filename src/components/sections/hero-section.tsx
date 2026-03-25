"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CtaLink {
  label: string;
  href: string;
}

interface HeroSectionProps {
  badge?: string;
  headline: string;
  subheadline: string;
  ctaPrimary: CtaLink;
  ctaSecondary?: CtaLink;
  imageSrc: string;
  imageAlt: string;
  minHeight?: string;
  overlay?: "full" | "left";
}

export function HeroSection({
  badge,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt,
  minHeight = "min-h-[92vh]",
}: HeroSectionProps) {
  const headlineParts = headline.split("\n");

  return (
    <section className={cn("relative flex items-end overflow-hidden", minHeight)}>

      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center scale-[1.02]"
        priority
        unoptimized
      />

      {/* Hero overlay — rich ink with warm gold corona at bottom-right */}
      <div className="absolute inset-0 bg-fhf-hero" />

      {/* Diagonal line texture — subtle architectural feel */}
      <div className="absolute inset-0 bg-diagonal-dark opacity-80" />

      {/* Vertical gold rule on far left — editorial accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-fhf-sky to-transparent opacity-40" />

      {/* Content — bottom-aligned for editorial impact */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-32 lg:pt-40">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="rule-gold" />
              <span className="text-eyebrow text-fhf-blue">{badge}</span>
            </motion.div>
          )}

          {/* Headline — editorial serif, massive */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white mb-6 leading-[1.02]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            {headlineParts.map((part, i) => (
              <span key={i} className="block">
                {/* Second line gets gold italic treatment if multiline */}
                {i === 1 ? (
                  <em className="not-italic text-fhf-sky">{part}</em>
                ) : part}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-white/65 font-body leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-fhf-blue text-fhf-navy text-sm font-semibold font-body tracking-wide hover:bg-fhf-sky transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-blue focus-visible:ring-offset-2 focus-visible:ring-offset-transparent shadow-[0_0_30px_rgba(201,146,42,0.35)]"
            >
              {ctaPrimary.label}
              <span className="text-[11px] opacity-70">→</span>
            </Link>

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white text-sm font-medium font-body tracking-wide hover:bg-white/8 hover:border-white/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        </div>

        {/* Bottom-right editorial number — large ghosted */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-12 right-6 lg:right-12 hidden lg:block"
          aria-hidden="true"
        >
          <div
            className="font-display font-bold text-transparent leading-none select-none"
            style={{
              fontSize: "clamp(8rem, 16vw, 14rem)",
              WebkitTextStroke: "1px rgba(201,146,42,0.10)",
            }}
          >
            FHF
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-fhf-cream/10 to-transparent pointer-events-none" />
    </section>
  );
}
