import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

interface CtaLink {
  label: string;
  href: string;
}

interface SplitSectionProps {
  badge?: string;
  headline: string;
  body: string;
  bullets?: string[];
  ctaPrimary?: CtaLink;
  ctaSecondary?: CtaLink;
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
  bgAlt?: boolean;
}

export function SplitSection({
  badge,
  headline,
  body,
  bullets,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt,
  imageRight = false,
  bgAlt = false,
}: SplitSectionProps) {

  const imageCol = (
    <ScrollReveal direction={imageRight ? "right" : "left"}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          unoptimized
        />
        {/* Bottom-left editorial caption band */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-fhf-ink/70 to-transparent">
          <div className="flex items-center gap-2">
            <span className="rule-gold w-6 flex-shrink-0" style={{ width: "1.5rem" }} />
            <span className="text-white/60 text-xs font-body uppercase tracking-widest">
              Freedom Horizon Financial
            </span>
          </div>
        </div>
        {/* Gold corner accent */}
        <div className="absolute top-0 left-0 w-12 h-12">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-fhf-blue" />
          <div className="absolute top-0 left-0 h-full w-0.5 bg-fhf-blue" />
        </div>
      </div>
    </ScrollReveal>
  );

  const textCol = (
    <ScrollReveal direction={imageRight ? "left" : "right"}>
      <div className="flex flex-col justify-center py-4">
        <SectionHeader
          badge={badge}
          headline={headline}
          align="left"
        />
        <p className="font-body text-fhf-navy/60 leading-relaxed mt-4 mb-6 text-base">{body}</p>

        {bullets && bullets.length > 0 && (
          <ul className="flex flex-col gap-3.5 mb-8">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-fhf-blue" strokeWidth={2.5} />
                </span>
                <span className="font-body text-fhf-navy/70 text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-4">
          {ctaPrimary && (
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-fhf-navy text-fhf-cream text-sm font-semibold font-body tracking-wide hover:bg-fhf-navy transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-blue focus-visible:ring-offset-2"
            >
              {ctaPrimary.label}
              <span className="text-[11px] opacity-60">→</span>
            </Link>
          )}
          {ctaSecondary && (
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center gap-2 px-6 py-3 border border-fhf-rule text-fhf-navy text-sm font-medium font-body tracking-wide hover:border-fhf-blue hover:text-fhf-navy transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-blue focus-visible:ring-offset-2"
            >
              {ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <section className={cn("section-pad", bgAlt ? "bg-fhf-off-white" : "bg-white")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {imageRight ? (
            <>{textCol}{imageCol}</>
          ) : (
            <>{imageCol}{textCol}</>
          )}
        </div>
      </div>
    </section>
  );
}
