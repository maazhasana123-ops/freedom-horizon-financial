"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  {
    prefix: "Only",
    num: "23",
    suffix: "out of 50 states",
    desc: "require high school students to take a personal finance course to graduate",
    source: "Council For Economic Education, 2022",
  },
  {
    prefix: "Over",
    num: "4.5B",
    suffix: "people worldwide",
    desc: "throughout the world today are financially illiterate",
    source: "Gitnux Financial Literacy Report, 2023",
  },
  {
    prefix: "Studies Reveal",
    num: "37%",
    suffix: "of Americans",
    desc: "can't cover a $400 emergency expense",
    source: "Federal Reserve Economic Report, 2023",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Horizon gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, #1e3a8a 0%, #1d4ed8 45%, #f59e0b 85%, #d97706 100%)",
          }}
        />
        {/* Silhouette image — people on ridge at sunrise */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src="https://images.unsplash.com/photo-1515191107209-c28698631303?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.45, mixBlendMode: "multiply" }}
            priority
          />
          {/* Fade bottom to surface */}
          <div
            className="absolute bottom-0 left-0 w-full h-40"
            style={{
              background: "linear-gradient(to top, #f4faff 0%, transparent 100%)",
            }}
          />
        </div>
        {/* Warm sun glow */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 65%, rgba(251,191,36,0.25) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-white drop-shadow-2xl mb-8 tracking-tighter leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            Your Financial <br />
            Freedom Starts <br />
            at the{" "}
            <span style={{ color: "#ffddb8" }}>Horizon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(219,234,254,0.92)" }}
          >
            We believe everyone deserves to understand how money works. Freedom
            Horizon Financial is on a mission to educate, empower, and help
            families build lasting wealth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/mission"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-blue-50 shadow-2xl"
              style={{ background: "#ffffff", color: "#004ac6" }}
            >
              Discover Our Mission
            </Link>
            <Link
              href="/system"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2 text-white"
              style={{ border: "2px solid rgba(255,255,255,0.45)" }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "1.25rem" }}
              >
                play_circle
              </span>
              Watch System Overview
            </Link>
          </motion.div>
        </div>

        {/* Horizon line */}
        <div
          className="absolute bottom-0 left-0 w-full h-px blur-sm z-10"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,221,184,0.6), transparent)",
          }}
        />
      </section>

      {/* ── Stats ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="group p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl"
                  style={{ background: "#ecf5fb", borderRadius: "1rem" }}
                >
                  <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#784b00" }}>
                    {s.prefix}
                  </p>
                  <div className="font-display font-black mb-1 tracking-tighter leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#004ac6" }}>
                    {s.num}
                  </div>
                  <p className="font-display font-bold text-lg mb-3" style={{ color: "#1a2d5a" }}>
                    {s.suffix}
                  </p>
                  <div
                    className="w-12 h-1 mb-4 rounded-full transition-all duration-500 group-hover:w-24"
                    style={{ background: "#784b00", opacity: 0.3 }}
                  />
                  <p className="font-medium leading-snug mb-3" style={{ color: "#434655" }}>
                    {s.desc}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "#737686" }}>
                    {s.source}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Banner ── */}
      <section className="py-16 overflow-hidden" style={{ background: "#004ac6" }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn className="flex-1">
            <div className="flex flex-col sm:flex-row gap-12">
              <div>
                <div className="font-display font-black tracking-tighter leading-none text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
                  100,000+
                </div>
                <p className="font-bold text-lg mt-1" style={{ color: "rgba(219,234,254,0.9)" }}>Individuals &amp; Families</p>
                <p className="font-medium mt-2 max-w-xs" style={{ color: "rgba(219,234,254,0.7)", fontSize: "0.95rem" }}>
                  received financial literacy education through our growing network
                </p>
              </div>
              <div>
                <div className="font-display font-black tracking-tighter leading-none text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
                  1,000+
                </div>
                <p className="font-bold text-lg mt-1" style={{ color: "rgba(219,234,254,0.9)" }}>Freedom Horizon Educators</p>
                <p className="font-medium mt-2 max-w-xs" style={{ color: "rgba(219,234,254,0.7)", fontSize: "0.95rem" }}>
                  across North America sharing financial knowledge in their communities
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="flex gap-4 flex-shrink-0">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: "4px solid rgba(255,255,255,0.2)" }}
              >
                <Image
                  src={src}
                  alt=""
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Features Bento Grid ── */}
      <section className="py-32 overflow-hidden" style={{ background: "#ecf5fb" }}>
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn>
              <div className="max-w-2xl">
                <span
                  className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6"
                  style={{ background: "#b5d0fd", color: "#3e5980" }}
                >
                  Our Ecosystem
                </span>
                <h2
                  className="font-display font-black tracking-tighter leading-tight"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                    color: "#141d21",
                  }}
                >
                  The Freedom Horizon <br />Success System
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p
                className="text-xl max-w-sm font-medium leading-relaxed pb-2"
                style={{ color: "#434655" }}
              >
                Our comprehensive approach combines modern tools with timeless
                principles to build your financial foundation.
              </p>
            </FadeIn>
          </div>

          {/* Bento — Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            {/* Card 1 — 4 col */}
            <FadeIn delay={0} className="md:col-span-4">
              <div
                className="p-8 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "280px" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "#e0e9ef" }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>
                    school
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>
                  Professional Development
                </h3>
                <p style={{ color: "#434655" }}>
                  Monthly events, weekly webinars, ongoing training, and mentorship to keep you growing and on track.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 — 8 col with image */}
            <FadeIn delay={0.05} className="md:col-span-8">
              <div
                className="p-8 flex flex-col md:flex-row gap-8 items-center group transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "280px" }}
              >
                <div className="flex-1">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#e0e9ef" }}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>
                      devices
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>
                    Technology &amp; Marketing
                  </h3>
                  <p style={{ color: "#434655" }}>
                    Build your brand with world-class digital tools, marketing systems, and lead generation support from day one.
                  </p>
                </div>
                <div
                  className="w-full md:w-56 h-48 rounded-xl overflow-hidden flex-shrink-0"
                  style={{ background: "#ecf5fb" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
                    alt="Technology"
                    width={224}
                    height={192}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bento — Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 3 — 5 col */}
            <FadeIn delay={0.1} className="md:col-span-5">
              <div
                className="p-8 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "240px" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "#e0e9ef" }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>
                    history_edu
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>
                  Decades of Experience
                </h3>
                <p style={{ color: "#434655" }}>
                  Our leadership team has decades of combined experience, guiding you with confidence and proven strategies.
                </p>
              </div>
            </FadeIn>

            {/* Card 4 — 4 col */}
            <FadeIn delay={0.15} className="md:col-span-4">
              <div
                className="p-8 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "240px" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "#e0e9ef" }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>
                    self_improvement
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>
                  Personal Development
                </h3>
                <p style={{ color: "#434655" }}>
                  Our leadership program elevates you to be your personal best in every area of business and life.
                </p>
              </div>
            </FadeIn>

            {/* Card 5 — 3 col */}
            <FadeIn delay={0.2} className="md:col-span-3">
              <div
                className="p-8 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "240px" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "#e0e9ef" }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>
                    settings_input_component
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>
                  System Powered
                </h3>
                <p style={{ color: "#434655" }}>
                  Every area of our business has an easy-to-learn, step-by-step process so you can focus on growth—not trial and error.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Horizon Progress Bar ── */}
      <section className="py-20" style={{ background: "#f4faff" }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <span
              className="font-display font-bold tracking-widest uppercase text-xs mb-8 block"
              style={{ color: "#004ac6" }}
            >
              Current Global Mission Progress
            </span>
            <div
              className="relative w-full h-8 rounded-full overflow-hidden mb-6"
              style={{ background: "#e0e9ef" }}
            >
              <div
                className="absolute top-0 left-0 h-full rounded-full flex items-center justify-end px-4"
                style={{
                  width: "72%",
                  background: "linear-gradient(90deg, #ffddb8 0%, #784b00 100%)",
                }}
              >
                <span className="text-white font-bold text-sm">72%</span>
              </div>
            </div>
            <p className="font-medium italic" style={{ color: "#434655" }}>
              Over 360,000 lives impacted through our primary 2024 initiative.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24" style={{ background: "#f4faff" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn>
            <div
              className="p-12 md:p-20 text-center relative overflow-hidden"
              style={{ background: "#ecf5fb", borderRadius: "1.5rem" }}
            >
              {/* Subtle texture */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=60"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10">
                <h2
                  className="font-display font-black tracking-tighter mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#141d21" }}
                >
                  Ready to change your financial trajectory?
                </h2>
                <p
                  className="text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "#434655" }}
                >
                  Join thousands of families who have found clarity and confidence through
                  the Freedom Horizon mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-started"
                    className="px-12 py-5 rounded-full font-bold text-lg text-white transition-all hover:opacity-90 shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)",
                      boxShadow: "0 8px 32px rgba(0,74,198,0.25)",
                    }}
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="/contact"
                    className="px-12 py-5 rounded-full font-bold text-lg transition-all hover:bg-white shadow-sm"
                    style={{ background: "#ffffff", color: "#141d21" }}
                  >
                    Talk to an Educator
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
