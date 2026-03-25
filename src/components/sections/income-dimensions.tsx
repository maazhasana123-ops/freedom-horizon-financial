import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeader } from "@/components/shared/section-header";

interface Dimension {
  number: string;
  title: string;
  description: string;
}

interface IncomeDimensionsProps {
  badge?: string;
  headline?: string;
  dimensions: Dimension[];
}

export function IncomeDimensions({ badge, headline, dimensions }: IncomeDimensionsProps) {
  return (
    <section className="section-pad bg-fhf-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {headline && (
          <ScrollReveal className="mb-14">
            <SectionHeader badge={badge} headline={headline} align="center" />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-fhf-rule border border-fhf-rule">
          {dimensions.map((dim, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="relative bg-white hover:bg-fhf-light/30 transition-colors duration-300 overflow-hidden group p-8 h-full">

                {/* Large ghost number — editorial watermark */}
                <div
                  className="absolute -top-4 -right-2 font-display font-bold leading-none select-none pointer-events-none text-transparent group-hover:opacity-100 opacity-60 transition-opacity"
                  style={{
                    fontSize: "7rem",
                    WebkitTextStroke: "1px rgba(201,146,42,0.12)",
                  }}
                  aria-hidden="true"
                >
                  {dim.number}
                </div>

                {/* Gold left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-fhf-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="relative z-10">
                  <span className="text-eyebrow text-fhf-blue/70 block mb-4">{dim.number}</span>
                  <h3
                    className="font-display font-bold text-fhf-navy text-xl leading-snug mb-3"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {dim.title}
                  </h3>
                  <p className="font-body text-fhf-ink-mid/80 text-sm leading-relaxed">
                    {dim.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
