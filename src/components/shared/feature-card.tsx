import { cn } from "@/lib/utils";
import {
  GraduationCap,
  Laptop,
  Users,
  Star,
  Zap,
  Lightbulb,
  Search,
  Target,
  RefreshCw,
  Shield,
  Map,
  Megaphone,
  Settings,
  TrendingUp,
  Package,
  BookOpen,
  Clock,
  Rocket,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Laptop,
  Users,
  Star,
  Zap,
  Lightbulb,
  Search,
  Target,
  RefreshCw,
  Shield,
  Map,
  Megaphone,
  Settings,
  TrendingUp,
  Package,
  BookOpen,
  Clock,
  Rocket,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "numbered";
  number?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = "default",
  number,
}: FeatureCardProps) {
  const Icon = iconMap[icon] || Zap;

  return (
    <div
      className={cn(
        "group relative pl-6 py-6 pr-5 border-l-2 border-transparent",
        "hover:border-fhf-blue transition-all duration-300",
        "hover:bg-fhf-light/30",
        className
      )}
    >
      {/* Number or icon */}
      <div className="flex items-start gap-4">
        {variant === "numbered" && number ? (
          <span className="flex-shrink-0 font-display font-bold text-3xl text-fhf-blue/30 leading-none mt-0.5 select-none">
            {number}
          </span>
        ) : (
          <div className="flex-shrink-0 mt-0.5">
            <Icon className="w-5 h-5 text-fhf-blue/70 group-hover:text-fhf-blue transition-colors duration-200" />
          </div>
        )}

        <div className="min-w-0">
          <h3 className="font-display font-semibold text-fhf-navy text-xl leading-snug mb-2">
            {title}
          </h3>
          <p className="font-body text-fhf-ink-mid/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
