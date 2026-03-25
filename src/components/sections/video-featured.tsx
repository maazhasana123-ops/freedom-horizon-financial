import Image from "next/image";
import { Play } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface VideoFeaturedProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export function VideoFeatured({ title, description, thumbnail, duration, category }: VideoFeaturedProps) {
  return (
    <section className="section-pad bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">

            {/* Video player — editorial framed */}
            <div className="relative aspect-video overflow-hidden cursor-pointer group border border-fhf-rule hover:border-fhf-blue transition-colors duration-300 shadow-[0_20px_60px_rgba(13,31,56,0.15)]">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-fhf-navy/45 group-hover:bg-fhf-navy/55 transition-colors" />

              {/* Play button — square editorial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-fhf-blue/90 flex items-center justify-center group-hover:bg-fhf-blue transition-colors duration-200 shadow-[0_0_40px_rgba(201,146,42,0.5)]">
                  <Play className="w-7 h-7 text-fhf-navy fill-fhf-ink ml-1" />
                </div>
              </div>

              {/* Category + duration strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between bg-gradient-to-t from-fhf-ink/60 to-transparent">
                <span className="bg-fhf-blue text-fhf-navy text-[10px] font-semibold font-body uppercase tracking-wider px-2.5 py-1">
                  {category}
                </span>
                <span className="text-white/60 text-xs font-body">{duration}</span>
              </div>

              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-fhf-blue" />
                <div className="absolute top-0 left-0 h-full w-0.5 bg-fhf-blue" />
              </div>
            </div>

            {/* Video info */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rule-gold" />
                  <span className="text-eyebrow text-fhf-blue">Featured</span>
                </div>
                <h2
                  className="font-display font-bold text-fhf-navy leading-tight mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
                >
                  {title}
                </h2>
              </div>
              <div>
                <p className="font-body text-fhf-ink-mid/80 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
