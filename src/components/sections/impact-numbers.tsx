import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface ImpactStat {
  number: string;
  label: string;
  description: string;
}

interface ImpactNumbersProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  stats: ImpactStat[];
}

export function ImpactNumbers({ badge, headline, stats }: ImpactNumbersProps) {
  return (
    <section className="bg-fhf-dark relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-fhf-sky/50 to-transparent" />

      {/* Ghosted serif number backdrop */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none hidden lg:block"
        style={{
          fontSize: "28rem",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,146,42,0.04)",
        }}
        aria-hidden="true"
      >
        100K
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        {(badge || headline) && (
          <ScrollReveal className="mb-16 max-w-xl">
            {badge && (
              <div className="flex items-center gap-3 mb-5">
                <span className="rule-gold" />
                <span className="text-eyebrow text-fhf-blue">{badge}</span>
              </div>
            )}
            {headline && (
              <h2
                className="font-display font-bold text-white leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                {headline}
              </h2>
            )}
          </ScrollReveal>
        )}

        {/* Stats — side by side with large numbers and vertical divider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative py-10 ${i > 0 ? "sm:pl-12 sm:border-l border-white/10" : "sm:pr-12"}`}>

                {/* The number — massive */}
                <div
                  className="font-display font-bold text-fhf-blue leading-none mb-3"
                  style={{
                    fontSize: "clamp(4.5rem, 9vw, 7.5rem)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div className="font-display font-semibold text-white text-xl mb-3 leading-snug">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-fhf-sky/50 to-transparent" />
    </section>
  );
}
