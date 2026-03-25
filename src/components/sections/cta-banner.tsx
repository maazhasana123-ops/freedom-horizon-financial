import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface CtaBannerProps {
  headline?: string;
  subheadline?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export function CtaBanner({
  headline = "Ready to Start Your Journey?",
  subheadline = "Join thousands of families discovering the power of financial literacy.",
  ctaPrimary,
  ctaSecondary,
}: CtaBannerProps) {
  return (
    <section className="bg-fhf-dark relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-fhf-sky/50 to-transparent" />

      {/* Large ghost quote marks */}
      <div
        className="absolute left-4 lg:left-12 top-0 font-display font-bold text-transparent leading-none select-none pointer-events-none hidden lg:block"
        style={{
          fontSize: "18rem",
          WebkitTextStroke: "1px rgba(201,146,42,0.07)",
          lineHeight: 0.8,
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <ScrollReveal>
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span className="rule-gold" />
              <span className="text-eyebrow text-fhf-blue">Take Action Today</span>
            </div>

            {/* Editorial headline — large serif */}
            <h2
              className="font-display font-bold text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {headline}
            </h2>

            {/* Subheadline */}
            <p className="font-body text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-fhf-blue text-fhf-navy text-sm font-semibold font-body tracking-wide hover:bg-fhf-sky transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-blue focus-visible:ring-offset-2 focus-visible:ring-offset-fhf-ink shadow-[0_0_30px_rgba(201,146,42,0.3)]"
              >
                {ctaPrimary.label}
                <span className="text-[11px] opacity-70">→</span>
              </Link>
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-medium font-body tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-fhf-ink"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
