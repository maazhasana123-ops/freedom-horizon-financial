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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Horizon gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(to bottom, #1e3a8a 0%, #1d4ed8 45%, #f59e0b 85%, #d97706 100%)" }}
        />
        {/* Background image */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src="https://images.unsplash.com/photo-1515191107209-c28698631303?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.45, mixBlendMode: "multiply" }}
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-48" style={{ background: "linear-gradient(to top, #f4faff, transparent)" }} />
        </div>
        {/* Sun glow */}
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 65%, rgba(251,191,36,0.25) 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center" style={{ paddingTop: "9rem", paddingBottom: "8rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-body font-bold text-xs uppercase tracking-widest mb-6"
            style={{ color: "rgba(255,221,184,0.9)" }}
          >
            The Financial Freedom Company
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-white drop-shadow-2xl mb-8 tracking-tighter leading-[0.9]"
            style={{ fontSize: "clamp(3.25rem, 8vw, 6rem)" }}
          >
            Your Financial <br />
            Freedom Starts <br />
            at the <span style={{ color: "#ffddb8" }}>Horizon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-lg md:text-xl font-medium max-w-2xl mx-auto mb-14 leading-relaxed"
            style={{ color: "rgba(219,234,254,0.92)" }}
          >
            We believe everyone deserves to understand how money works. Freedom
            Horizon Financial is on a mission to educate, empower, and help
            families build lasting wealth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/mission"
              className="w-full sm:w-auto px-10 py-5 rounded-full font-bold font-body text-lg transition-all hover:bg-blue-50 shadow-2xl"
              style={{ background: "#ffffff", color: "#004ac6" }}
            >
              Discover Our Mission
            </Link>
            <Link
              href="/system"
              className="w-full sm:w-auto px-10 py-5 rounded-full font-bold font-body text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2 text-white"
              style={{ border: "2px solid rgba(255,255,255,0.45)" }}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "1.25rem" }}>
                play_circle
              </span>
              Watch System Overview
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px blur-sm z-10" style={{ background: "linear-gradient(to right, transparent, rgba(255,221,184,0.6), transparent)" }} />
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="group flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl"
                  style={{ background: "#ecf5fb", borderRadius: "1rem", padding: "2.5rem" }}
                >
                  <p className="font-body font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#784b00" }}>
                    {s.prefix}
                  </p>
                  <div className="font-display font-black tracking-tighter leading-none mb-2" style={{ fontSize: "clamp(3rem, 5vw, 4rem)", color: "#004ac6" }}>
                    {s.num}
                  </div>
                  <p className="font-display font-bold text-xl mb-4" style={{ color: "#1a2d5a" }}>
                    {s.suffix}
                  </p>
                  <div className="w-12 h-1 mb-4 rounded-full transition-all duration-500 group-hover:w-24" style={{ background: "#784b00", opacity: 0.3 }} />
                  <p className="font-body font-medium leading-snug mb-3" style={{ color: "#434655", fontSize: "1rem" }}>
                    {s.desc}
                  </p>
                  <p className="font-body text-xs font-medium" style={{ color: "#737686" }}>
                    {s.source}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EDUCATION SPLIT
      ════════════════════════════════════════ */}
      <section style={{ background: "#ecf5fb", paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeIn delay={0}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1513001900722-370f803f498d?w=800&q=80"
                  alt="Financial education books and study materials"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,74,198,0.15), transparent)" }} />
              </div>
            </FadeIn>
            {/* Text */}
            <FadeIn delay={0.12}>
              <span
                className="inline-block px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-6"
                style={{ background: "#b5d0fd", color: "#3e5980" }}
              >
                Our Books. Your Education.
              </span>
              <h2
                className="font-display font-black tracking-tighter leading-tight mb-6"
                style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", color: "#141d21" }}
              >
                Based on the 7 Wealth Milestones
              </h2>
              <p className="font-body text-lg font-medium leading-relaxed mb-8" style={{ color: "#434655" }}>
                Our educational materials are financial survival guides changing literacy and lives everywhere. Grounded in proven strategies and real-world application, each resource is designed to meet families where they are.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Explore the 7 Wealth Milestones",
                  "Discover the Rule of 72",
                  "Take the Financial Literacy Challenge",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#004ac6" }}>
                      <span className="material-symbols-outlined text-white" style={{ fontSize: "0.9rem" }}>check</span>
                    </span>
                    <span className="font-body font-medium" style={{ color: "#434655" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base text-white transition-all hover:opacity-90 shadow-lg"
                style={{ background: "linear-gradient(135deg, #004ac6, #2563eb)", boxShadow: "0 8px 24px rgba(0,74,198,0.25)" }}
              >
                Request a Book
                <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OPPORTUNITY SPLIT (reversed)
      ════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <FadeIn delay={0}>
              <span
                className="inline-block px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-6"
                style={{ background: "#ffddb8", color: "#2a1700" }}
              >
                Join Our Mission
              </span>
              <h2
                className="font-display font-black tracking-tighter leading-tight mb-6"
                style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", color: "#141d21" }}
              >
                Align With Our Mission
              </h2>
              <p className="font-body text-lg font-medium leading-relaxed mb-10" style={{ color: "#434655" }}>
                To carry out our vision, we empower entrepreneurs with high-tech, high-touch tools to reach their goals. Our platform gives every motivated individual the resources, support, and systems to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/system"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base text-white transition-all hover:opacity-90 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #004ac6, #2563eb)", boxShadow: "0 8px 24px rgba(0,74,198,0.25)" }}
                >
                  Explore Our Business
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base transition-all hover:shadow-md"
                  style={{ background: "#ecf5fb", color: "#004ac6" }}
                >
                  Schedule a Conversation
                </Link>
              </div>
            </FadeIn>
            {/* Image */}
            <FadeIn delay={0.12}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="FHF team collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent, rgba(0,74,198,0.1))" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          IMPACT BANNER
      ════════════════════════════════════════ */}
      <section style={{ background: "#004ac6", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn className="flex-1">
            <div className="flex flex-col sm:flex-row gap-16">
              <div>
                <div className="font-display font-black tracking-tighter leading-none text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3.75rem)" }}>100,000+</div>
                <p className="font-display font-bold text-lg mt-2" style={{ color: "rgba(219,234,254,0.95)" }}>Individuals &amp; Families</p>
                <p className="font-body font-medium mt-2 max-w-xs" style={{ color: "rgba(219,234,254,0.7)", fontSize: "0.9rem" }}>
                  received financial literacy education through our growing network
                </p>
              </div>
              <div>
                <div className="font-display font-black tracking-tighter leading-none text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3.75rem)" }}>1,000+</div>
                <p className="font-display font-bold text-lg mt-2" style={{ color: "rgba(219,234,254,0.95)" }}>Freedom Horizon Educators</p>
                <p className="font-body font-medium mt-2 max-w-xs" style={{ color: "rgba(219,234,254,0.7)", fontSize: "0.9rem" }}>
                  across North America sharing financial knowledge in their communities
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="flex gap-4 flex-shrink-0">
            {[
              "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
            ].map((src, i) => (
              <div key={i} className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0" style={{ border: "4px solid rgba(255,255,255,0.2)" }}>
                <Image src={src} alt="" width={80} height={80} className="object-cover w-full h-full" />
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURES BENTO GRID
      ════════════════════════════════════════ */}
      <section style={{ background: "#ecf5fb", paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn>
              <div className="max-w-2xl">
                <span
                  className="inline-block px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-6"
                  style={{ background: "#b5d0fd", color: "#3e5980" }}
                >
                  Our Ecosystem
                </span>
                <h2
                  className="font-display font-black tracking-tighter leading-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#141d21" }}
                >
                  The Freedom Horizon <br />Success System
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-xl max-w-sm font-medium leading-relaxed" style={{ color: "#434655" }}>
                Our comprehensive approach combines modern tools with timeless principles to build your financial foundation.
              </p>
            </FadeIn>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            <FadeIn delay={0} className="md:col-span-4">
              <div className="p-10 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full" style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "300px" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8" style={{ background: "#e0e9ef" }}>
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>school</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>Professional Development</h3>
                <p className="font-body leading-relaxed" style={{ color: "#434655" }}>
                  Monthly events, weekly webinars, ongoing training, and mentorship to keep you growing and on track.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="md:col-span-8">
              <div className="p-10 flex flex-col md:flex-row gap-8 items-center group transition-all duration-300 hover:shadow-xl cursor-pointer h-full" style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "300px" }}>
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8" style={{ background: "#e0e9ef" }}>
                    <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>devices</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>Technology &amp; Marketing</h3>
                  <p className="font-body leading-relaxed" style={{ color: "#434655" }}>
                    Build your brand with world-class digital tools, marketing systems, and lead generation support from day one.
                  </p>
                </div>
                <div className="w-full md:w-64 h-52 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
                    alt="Technology & Marketing"
                    width={256}
                    height={208}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <FadeIn delay={0.05} className="md:col-span-5">
              <div className="p-10 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full" style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "260px" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8" style={{ background: "#e0e9ef" }}>
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>history_edu</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>Decades of Experience</h3>
                <p className="font-body leading-relaxed" style={{ color: "#434655" }}>
                  Our leadership team has decades of combined experience, guiding you with confidence and proven strategies.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="md:col-span-4">
              <div className="p-10 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full" style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "260px" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8" style={{ background: "#e0e9ef" }}>
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>self_improvement</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>Personal Development</h3>
                <p className="font-body leading-relaxed" style={{ color: "#434655" }}>
                  Our leadership program elevates you to be your personal best in every area of business and life.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="md:col-span-3">
              <div className="p-10 flex flex-col group transition-all duration-300 hover:shadow-xl cursor-pointer h-full" style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "260px" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8" style={{ background: "#e0e9ef" }}>
                  <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>settings_input_component</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>System Powered</h3>
                <p className="font-body leading-relaxed" style={{ color: "#434655" }}>
                  Every area of our business has an easy-to-learn, step-by-step process so you can focus on growth—not trial and error.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROGRESS BAR
      ════════════════════════════════════════ */}
      <section style={{ background: "#f4faff", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <span className="font-display font-bold tracking-widest uppercase text-xs mb-8 block" style={{ color: "#004ac6" }}>
              Current Global Mission Progress
            </span>
            <div className="relative w-full h-8 rounded-full overflow-hidden mb-6" style={{ background: "#e0e9ef" }}>
              <div
                className="absolute top-0 left-0 h-full rounded-full flex items-center justify-end px-4"
                style={{ width: "72%", background: "linear-gradient(90deg, #ffddb8 0%, #784b00 100%)" }}
              >
                <span className="text-white font-bold text-sm">72%</span>
              </div>
            </div>
            <p className="font-body font-medium italic" style={{ color: "#434655" }}>
              Over 360,000 lives impacted through our primary 2024 initiative.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section style={{ background: "#f4faff", paddingBottom: "8rem" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn>
            <div
              className="relative overflow-hidden text-center"
              style={{ background: "#ecf5fb", borderRadius: "1.5rem", padding: "6rem 4rem" }}
            >
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=60" alt="" fill className="object-cover" />
              </div>
              <div className="relative z-10">
                <h2
                  className="font-display font-black tracking-tighter mb-6"
                  style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", color: "#141d21" }}
                >
                  Ready to change your financial trajectory?
                </h2>
                <p className="font-body text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: "#434655" }}>
                  Join thousands of families who have found clarity and confidence through the Freedom Horizon mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-started"
                    className="px-12 py-5 rounded-full font-bold font-body text-lg text-white transition-all hover:opacity-90 shadow-xl"
                    style={{ background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)", boxShadow: "0 8px 32px rgba(0,74,198,0.25)" }}
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="/contact"
                    className="px-12 py-5 rounded-full font-bold font-body text-lg transition-all hover:bg-white shadow-sm"
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
