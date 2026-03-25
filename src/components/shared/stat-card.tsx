import { cn } from "@/lib/utils";

interface StatCardProps {
  prefix?: string;
  number: string;
  suffix?: string;
  description: string;
  source?: string;
  className?: string;
}

export function StatCard({
  prefix,
  number,
  suffix,
  description,
  source,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden group",
        "border-l-2 border-fhf-blue pl-7 py-6 pr-6",
        className
      )}
    >
      {prefix && (
        <span className="text-eyebrow text-white/40 mb-3">{prefix}</span>
      )}

      {/* Enormous number */}
      <div
        className="font-display font-bold text-fhf-sky leading-none mb-2"
        style={{ fontSize: "clamp(4rem, 8vw, 6.5rem)", letterSpacing: "-0.03em" }}
      >
        {number}
      </div>

      {suffix && (
        <div className="font-display font-semibold text-white text-xl leading-snug mb-3">
          {suffix}
        </div>
      )}

      <p className="font-body text-white/50 text-sm leading-relaxed flex-1">{description}</p>

      {source && (
        <p className="text-[11px] text-white/25 font-body mt-4 pt-3 border-t border-white/10">
          {source}
        </p>
      )}
    </div>
  );
}
