import Link from "next/link";
import { BookOpen, Clock, Rocket, LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = { BookOpen, Clock, Rocket };

interface Way {
  tag: string;
  icon: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  featured?: boolean;
}

interface ThreeWaysSectionProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  ways: Way[];
}

export function ThreeWaysSection({ badge, headline, subheadline, ways }: ThreeWaysSectionProps) {
  return (
    <section className="section-pad bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {headline && (
          <ScrollReveal className="mb-14">
            <SectionHeader badge={badge} headline={headline} subheadline={subheadline} align="center" />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-fhf-rule border border-fhf-rule">
          {ways.map((way, i) => {
            const Icon = iconMap[way.icon] || BookOpen;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={cn(
                    "group relative flex flex-col h-full p-8 lg:p-10 transition-all duration-300",
                    way.featured
                      ? "bg-fhf-dark text-white"
                      : "bg-white hover:bg-fhf-off-white"
                  )}
                >
                  {/* Gold top rule on featured */}
                  {way.featured && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-fhf-sky to-transparent" />
                  )}

                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className={cn(
                      "text-eyebrow",
                      way.featured ? "text-fhf-blue" : "text-fhf-blue"
                    )}>
                      {way.tag}
                    </span>
                    {way.featured && (
                      <span className="ml-2 px-2 py-0.5 bg-fhf-blue/20 border border-fhf-blue/30 text-fhf-blue text-[10px] font-semibold uppercase tracking-wider">
                        Recommended
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={cn(
                    "w-10 h-10 flex items-center justify-center mb-5 border",
                    way.featured ? "border-white/15 bg-white/8" : "border-fhf-rule bg-fhf-off-white"
                  )}>
                    <Icon className={cn(
                      "w-5 h-5",
                      way.featured ? "text-fhf-blue" : "text-fhf-navy/50 group-hover:text-fhf-blue"
                    )} />
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    "font-display font-bold text-2xl leading-snug mb-4",
                    way.featured ? "text-white" : "text-fhf-navy"
                  )}
                  style={{ letterSpacing: "-0.01em" }}>
                    {way.title}
                  </h3>

                  {/* Description */}
                  <p className={cn(
                    "font-body text-sm leading-relaxed flex-1",
                    way.featured ? "text-white/50" : "text-fhf-ink-mid/80"
                  )}>
                    {way.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={way.cta.href}
                    className={cn(
                      "mt-8 inline-flex items-center gap-2 text-sm font-semibold font-body transition-colors group-inner",
                      way.featured
                        ? "text-fhf-blue hover:text-fhf-sky"
                        : "text-fhf-navy/50 hover:text-fhf-navy"
                    )}
                  >
                    {way.cta.label}
                    <span className="text-[11px]">→</span>
                  </Link>

                  {/* Bottom gold rule on hover */}
                  {!way.featured && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-fhf-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
