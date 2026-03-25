import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { cn } from "@/lib/utils";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
  cols?: 2 | 3;
  bgAlt?: boolean;
  className?: string;
}

export function FeatureGrid({
  badge,
  headline,
  subheadline,
  features,
  cols = 3,
  bgAlt = false,
  className,
}: FeatureGridProps) {
  return (
    <section className={cn("section-pad", bgAlt ? "bg-fhf-off-white" : "bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={badge}
            headline={headline}
            subheadline={subheadline}
            align="center"
          />
        </ScrollReveal>

        <div
          className={cn(
            "mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-fhf-rule border border-fhf-rule",
            cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          )}
        >
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={0.04 + (i % cols) * 0.07}>
              <div className="bg-white hover:bg-fhf-off-white transition-colors">
                <FeatureCard {...feature} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
