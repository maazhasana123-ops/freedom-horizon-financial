import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StatCard } from "@/components/shared/stat-card";

interface Stat {
  prefix?: string;
  number: string;
  suffix?: string;
  description: string;
  source?: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-fhf-dark relative overflow-hidden">
      {/* Top gold fade rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-fhf-sky/50 to-transparent" />

      {/* Large ghosted word — editorial backdrop */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none hidden lg:block"
        style={{
          fontSize: "22rem",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,146,42,0.06)",
        }}
        aria-hidden="true"
      >
        TRUTH
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Editorial label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="rule-gold" />
          <span className="text-eyebrow text-fhf-blue">The Crisis in Numbers</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-white/5">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-fhf-dark">
                <StatCard {...stat} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom gold fade rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-fhf-sky/50 to-transparent" />
    </section>
  );
}
