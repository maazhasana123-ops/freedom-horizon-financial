'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Refs so event listeners always read latest values without re-registering
  const progressRef = useRef(0);
  const expandedRef = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (expandedRef.current) {
        // Allow normal scroll once expanded
        return;
      }
      e.preventDefault();
      const next = Math.min(Math.max(progressRef.current + e.deltaY * 0.0012, 0), 1);
      progressRef.current = next;
      setScrollProgress(next);
      if (next >= 1 && !expandedRef.current) {
        expandedRef.current = true;
        setExpanded(true);
      }
      if (next <= 0 && expandedRef.current) {
        expandedRef.current = false;
        setExpanded(false);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (expandedRef.current) return;
      e.preventDefault();
      const delta = touchStartY.current - e.touches[0].clientY;
      touchStartY.current = e.touches[0].clientY;
      const next = Math.min(Math.max(progressRef.current + delta * 0.006, 0), 1);
      progressRef.current = next;
      setScrollProgress(next);
      if (next >= 1 && !expandedRef.current) {
        expandedRef.current = true;
        setExpanded(true);
      }
    };

    const onScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []); // registers once — uses refs internally

  const p = scrollProgress;
  const cardW = isMobile ? 280 + p * 700 : 320 + p * 1300;
  const cardH = isMobile ? 380 + p * 240 : 420 + p * 420;
  const splitX = p * (isMobile ? 120 : 160);

  const firstWord = title?.split(' ')[0] ?? '';
  const rest = title?.split(' ').slice(1).join(' ') ?? '';

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero expansion scene ── */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background image fades out as video expands */}
        <div
          className="absolute inset-0 z-0"
          style={{ opacity: Math.max(0, 1 - p * 1.4) }}
        >
          <Image
            src={bgImageSrc}
            alt=""
            fill
            draggable={false}
            className="object-cover object-center pointer-events-none select-none"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute bottom-0 left-0 w-full h-40"
            style={{ background: 'linear-gradient(to top, #f4faff, transparent)' }}
          />
        </div>

        {/* Expanding video card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden z-10"
          style={{
            width: `min(${cardW}px, 96vw)`,
            height: `min(${cardH}px, 88vh)`,
            boxShadow: `0 0 80px rgba(0,74,198,${0.15 + p * 0.25})`,
          }}
        >
          <video
            src={mediaSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            title=""
            draggable={false}
            className="w-full h-full object-cover pointer-events-none select-none"
          />
          {/* Brand tint overlay — fades as card expands */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, rgba(0,74,198,0.35) 0%, rgba(120,75,0,0.2) 100%)',
              opacity: Math.max(0, 1 - p * 1.2),
            }}
          />
        </div>

        {/* Text — splits apart on scroll */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none select-none">
          {date && (
            <p
              className="font-body font-bold text-xs tracking-widest uppercase mb-3"
              style={{
                color: '#ffddb8',
                transform: `translateX(-${splitX}vw)`,
                opacity: Math.max(0, 1 - p * 3),
              }}
            >
              {date}
            </p>
          )}

          <div className="flex flex-col items-center gap-1">
            <span
              className="font-display font-black tracking-tighter leading-none"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                color: '#ffffff',
                transform: `translateX(-${splitX}vw)`,
                textShadow: '0 2px 40px rgba(0,0,0,0.5)',
              }}
            >
              {firstWord}
            </span>
            <span
              className="font-display font-black tracking-tighter leading-none"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                color: '#ffddb8',
                transform: `translateX(${splitX}vw)`,
                textShadow: '0 2px 40px rgba(120,75,0,0.6)',
              }}
            >
              {rest}
            </span>
          </div>

          {scrollToExpand && (
            <p
              className="font-body text-sm mt-5"
              style={{
                color: 'rgba(255,255,255,0.55)',
                opacity: Math.max(0, 1 - p * 3),
              }}
            >
              ↓ {scrollToExpand}
            </p>
          )}
        </div>
      </div>

      {/* ── Page content revealed after expansion ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
