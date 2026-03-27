"use client";

import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { ClassValue, clsx } from "clsx";
import * as Color from "color-bits";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to convert any CSS color to rgba
export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)",
): string => {
  if (typeof window === "undefined") return fallback;
  if (!cssColor) return fallback;

  try {
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div");
      element.style.color = cssColor;
      document.body.appendChild(element);
      const computedColor = window.getComputedStyle(element).color;
      document.body.removeChild(element);
      return Color.formatRGBA(Color.parse(computedColor));
    }
    return Color.formatRGBA(Color.parse(cssColor as string));
  } catch (e) {
    console.error("Color parsing failed:", e);
    return fallback;
  }
};

// Helper function to add opacity to an RGB color string
export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color;
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity));
};

// ─── Flickering Grid ─────────────────────────────────────────────────────────

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    return getRGBA(color);
  }, [color]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const cols = Math.floor(w / (squareSize + gridGap));
      const rows = Math.floor(h / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return {
        cols,
        rows,
        squares,
        dpr,
      };
    },
    [squareSize, gridGap, maxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, w * dpr, h * dpr);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          ctx.fillStyle = colorWithOpacity(memoizedColor, opacity);
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr,
          );
        }
      }
    },
    [memoizedColor, squareSize, gridGap],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let gridParams: ReturnType<typeof setupCanvas>;
    let animationFrameId: number;
    let lastTime = 0;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let resizeObserver: ResizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateCanvasSize);
      resizeObserver.observe(container);
    }

    const animate = (time: number) => {
      if (!isInView) return;
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;
      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvasSize.width || gridParams.cols * (squareSize + gridGap),
        canvasSize.height || gridParams.rows * (squareSize + gridGap),
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
    };
  }, [
    isInView,
    setupCanvas,
    updateSquares,
    drawGrid,
    width,
    height,
    squareSize,
    gridGap,
    canvasSize.width,
    canvasSize.height,
  ]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)}>
      <canvas
        ref={canvasRef}
        style={{
          width: width || "100%",
          height: height || "100%",
        }}
      />
    </div>
  );
}

// ─── Footer Link ──────────────────────────────────────────────────────────────

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-white",
        className,
      )}
    >
      <ChevronRightIcon className="h-3 w-3 shrink-0 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
      {children}
    </Link>
  );
}

// ─── Footer Column ────────────────────────────────────────────────────────────

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

const FOOTER_COLUMNS: FooterColumnProps[] = [
  {
    title: "Company",
    links: [
      { label: "Mission", href: "/mission" },
      { label: "System", href: "/system" },
      { label: "Videos", href: "/videos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Events", href: "/events" },
      { label: "Get Started", href: "/get-started" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclosures", href: "/disclosures" },
    ],
  },
];

export function FlickeringFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-zinc-950">
      {/* Flickering grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={3}
          gridGap={8}
          flickerChance={0.08}
          color="rgb(14, 165, 233)"
          maxOpacity={0.25}
        />
      </div>

      {/* Top gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent" />

      {/* Top border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="relative">
        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            {/* Brand column */}
            <motion.div
              className="md:col-span-5 lg:col-span-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <Link href="/" className="inline-flex mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Freedom Horizon Financial"
                  height={64}
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </Link>

              {/* Tagline */}
              <p className="mb-6 max-w-xs text-lg leading-snug text-zinc-400 italic">
                &ldquo;Erasing financial illiteracy so families can dream again.&rdquo;
              </p>

              <div className="mb-6 h-px max-w-[180px] bg-white/10" />

              {/* Contact info */}
              <ul className="flex flex-col gap-2.5">
                {[
                  { icon: "📍", text: "United States" },
                  {
                    icon: "📞",
                    text: "(888) 000-0000",
                    href: "tel:8880000000",
                  },
                  {
                    icon: "✉",
                    text: "contact@freedomhorizonfinancial.com",
                    href: "mailto:contact@freedomhorizonfinancial.com",
                  },
                ].map(({ icon, text, href }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-zinc-500">
                    <span className="w-4 text-sky-400 not-italic" aria-hidden="true">
                      {icon}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {text}
                      </a>
                    ) : (
                      <span>{text}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Social links */}
              <div className="mt-7 flex items-center gap-2">
                {[
                  { label: "Facebook", href: "#", initial: "f" },
                  { label: "Instagram", href: "#", initial: "in" },
                  { label: "LinkedIn", href: "#", initial: "li" },
                  { label: "YouTube", href: "#", initial: "yt" },
                ].map(({ label, href, initial }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold uppercase text-zinc-500 transition-all duration-200 hover:border-sky-500 hover:text-sky-400 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    {initial}
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="hidden lg:block lg:col-span-2" />

            {/* Nav columns */}
            {FOOTER_COLUMNS.map((col, i) => (
              <motion.div
                key={col.title}
                className="md:col-span-4 lg:col-span-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <FooterColumn title={col.title} links={col.links} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="border-t border-white/5 bg-zinc-950/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Ready to take control of your financial future?</p>
                <p className="text-xs text-zinc-500 mt-0.5">Join thousands of families building lasting wealth.</p>
              </div>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                style={{ background: "linear-gradient(135deg, #2e6db4, #004ac6)" }}
              >
                Get Started
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-zinc-600">
                © {currentYear} Freedom Horizon Financial. All rights reserved.
              </p>
              <p className="text-xs text-zinc-700 max-w-2xl leading-relaxed">
                Financial products and services offered through licensed agents. This website is for informational purposes only and does not constitute financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
