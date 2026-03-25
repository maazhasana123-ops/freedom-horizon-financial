import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  headline,
  subheadline,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className={cn(
          "flex items-center gap-3 mb-5",
          align === "center" && "justify-center"
        )}>
          <span className="rule-gold flex-shrink-0" />
          <span className={cn(
            "text-eyebrow",
            light ? "text-fhf-sky" : "text-fhf-blue"
          )}>
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display font-bold leading-tight mb-5",
          "text-4xl sm:text-5xl lg:text-[3.25rem]",
          light ? "text-white" : "text-fhf-navy"
        )}
        style={{ letterSpacing: "-0.02em" }}
      >
        {headline}
      </h2>

      {subheadline && (
        <p
          className={cn(
            "font-body leading-relaxed text-lg",
            light ? "text-white/60" : "text-fhf-ink-mid/80"
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
