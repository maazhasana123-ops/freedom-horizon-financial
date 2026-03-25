import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { VideoCard } from "@/components/shared/video-card";
import { cn } from "@/lib/utils";

interface Video {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

interface VideoGalleryProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  videos: Video[];
  cols?: 2 | 3;
  bgAlt?: boolean;
}

export function VideoGallery({
  badge,
  headline,
  subheadline,
  videos,
  cols = 3,
  bgAlt = false,
}: VideoGalleryProps) {
  return (
    <section className={cn("section-pad", bgAlt ? "bg-fhf-off-white" : "bg-white")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <SectionHeader badge={badge} headline={headline} subheadline={subheadline} align="center" />
        </ScrollReveal>

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-px bg-fhf-rule border border-fhf-rule",
            cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          )}
        >
          {videos.map((video, i) => (
            <ScrollReveal key={video.slug} delay={0.04 + (i % cols) * 0.08}>
              <VideoCard {...video} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
