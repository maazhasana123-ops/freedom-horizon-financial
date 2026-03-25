"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  className?: string;
  size?: "default" | "large";
}

export function VideoCard({
  slug,
  title,
  description,
  thumbnail,
  duration,
  category,
  className,
}: VideoCardProps) {
  return (
    <Link
      href={`/videos/${slug}`}
      className={cn(
        "group block overflow-hidden border border-fhf-rule hover:border-fhf-blue transition-all duration-300",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-fhf-navy/40 group-hover:bg-fhf-navy/50 transition-colors" />

        {/* Play button — editorial square style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-fhf-blue/90 flex items-center justify-center group-hover:bg-fhf-blue transition-colors duration-200 shadow-[0_0_20px_rgba(201,146,42,0.4)]">
            <Play className="w-4 h-4 text-fhf-navy fill-fhf-ink ml-0.5" />
          </div>
        </div>

        {/* Duration — bottom left */}
        <div className="absolute bottom-0 left-0 px-3 py-1.5 bg-fhf-navy/80 text-white/70 text-xs font-body">
          {duration}
        </div>

        {/* Category — top right */}
        <div className="absolute top-3 right-3 bg-fhf-blue text-fhf-navy text-[10px] font-semibold font-body uppercase tracking-wider px-2.5 py-1">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 bg-white group-hover:bg-fhf-off-white transition-colors">
        <h3 className="font-display font-semibold text-fhf-navy text-lg leading-snug mb-2"
          style={{ letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <p className="font-body text-fhf-navy/50 text-sm leading-relaxed line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center text-fhf-blue text-xs font-semibold font-body uppercase tracking-wider gap-1.5">
          Watch
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      </div>
    </Link>
  );
}
