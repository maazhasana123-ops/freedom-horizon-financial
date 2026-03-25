import { Check, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeader } from "@/components/shared/section-header";

interface ComparisonRow {
  traditional: string;
  fhf: string;
}

interface ComparisonTableProps {
  headline: string;
  subheadline?: string;
  traditional: string;
  fhf: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({
  headline,
  subheadline,
  traditional,
  fhf,
  rows,
}: ComparisonTableProps) {
  return (
    <section className="section-pad bg-fhf-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader headline={headline} subheadline={subheadline} align="center" />
        </ScrollReveal>

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Column headers */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-fhf-rule mb-px">
              <div className="bg-fhf-off-white px-7 py-4 flex items-center gap-3">
                <Minus className="w-4 h-4 text-fhf-navy/25 flex-shrink-0" />
                <span className="text-eyebrow text-fhf-ink-light">{traditional}</span>
              </div>
              <div className="bg-fhf-navy px-7 py-4 flex items-center gap-3">
                <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                  <span className="rule-gold" style={{ width: "1rem" }} />
                </span>
                <span className="text-eyebrow text-fhf-blue">{fhf}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Rows */}
          <div className="flex flex-col gap-px bg-fhf-rule">
            {rows.map((row, i) => (
              <ScrollReveal key={i} delay={0.05 + i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-fhf-rule">
                  {/* Traditional */}
                  <div className="flex items-start gap-4 bg-white px-7 py-5">
                    <Minus className="w-4 h-4 text-fhf-navy/20 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-fhf-ink-light text-sm leading-relaxed">{row.traditional}</span>
                  </div>
                  {/* FHF */}
                  <div className="flex items-start gap-4 bg-fhf-light/40 px-7 py-5 border-l-2 border-fhf-blue">
                    <Check className="w-4 h-4 text-fhf-blue flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="font-body text-fhf-navy font-medium text-sm leading-relaxed">{row.fhf}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
