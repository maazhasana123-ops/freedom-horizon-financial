"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

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
    <ScrollExpandMedia
      mediaSrc="/videos/hero.mp4"
      posterSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
      bgImageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
      title="Freedom Horizon"
      date="Your Financial Future"
      scrollToExpand="Scroll to explore"
    >
      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section className="py-24 relative z-20" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "23",
                numSuffix: "out of",
                numEnd: "50",
                desc: "States reached across the nation with our localized financial courses for high schoolers.",
                source: "Council For Economic Education, 2022",
              },
              {
                num: "4.5",
                numSuffix: "Billion",
                numEnd: "",
                desc: "People globally who lack basic financial literacy resources according to latest reports.",
                source: "Gitnux Financial Literacy Report, 2023",
              },
              {
                num: "37",
                numSuffix: "%",
                numEnd: "",
                desc: "Of Americans who can't cover a $400 emergency expense without confidence.",
                source: "Federal Reserve Economic Report, 2023",
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="group p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl cursor-pointer"
                  style={{ background: "#ecf5fb", borderRadius: "1rem" }}
                >
                  <span className="font-display font-black mb-4 tracking-tighter" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#004ac6" }}>
                    {s.num}{" "}
                    <span className="font-medium" style={{ color: "#784b00", fontSize: "0.65em" }}>{s.numSuffix}</span>
                    {s.numEnd && <>{" "}{s.numEnd}</>}
                  </span>
                  <div className="w-12 h-1 mb-6 rounded-full transition-all duration-500 group-hover:w-24" style={{ background: "#784b00", opacity: 0.3 }} />
                  <p className="font-body font-medium text-lg leading-snug" style={{ color: "#434655" }}>
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          IMPACT BANNER
      ══════════════════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: "#004ac6" }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn className="flex-1">
            <h2
              className="font-display font-black text-white tracking-tighter leading-none mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              100,000+ Families <br />Educated Worldwide
            </h2>
            <p className="font-body text-xl font-medium max-w-lg opacity-80" style={{ color: "#bfdbfe" }}>
              Join a global movement dedicated to breaking the cycle of financial uncertainty across North America.
            </p>
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

      {/* ══════════════════════════════════════
          BENTO GRID
      ══════════════════════════════════════ */}
      <section className="py-32 overflow-hidden" style={{ background: "#ecf5fb" }}>
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn className="max-w-2xl">
              <span
                className="inline-block px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-6"
                style={{ background: "#b5d0fd", color: "#3e5980" }}
              >
                Our Ecosystem
              </span>
              <h2
                className="font-display font-black tracking-tighter text-on-surface leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#141d21" }}
              >
                The Freedom Horizon <br />Success System
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-xl max-w-sm font-medium leading-relaxed pb-2" style={{ color: "#434655" }}>
                Our comprehensive approach combines modern tools with timeless principles to build your financial foundation.
              </p>
            </FadeIn>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ minHeight: "700px" }}>
            {/* Card 1 — col 4 */}
            <FadeIn delay={0} className="md:col-span-4">
              <div
                className="group p-8 flex flex-col justify-between h-full transition-all duration-300 hover:text-white cursor-pointer"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "320px" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#004ac6")}
                onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
              >
                <div>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/20" style={{ background: "#e0e9ef" }}>
                    <span className="material-symbols-outlined transition-colors duration-300 group-hover:text-white" style={{ color: "#004ac6" }}>school</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 transition-colors duration-300" style={{ color: "inherit" }}>Professional Development</h3>
                  <p className="font-body leading-relaxed transition-colors duration-300 group-hover:text-white/80" style={{ color: "#434655" }}>
                    Continuous training and certification programs for our field leaders and educators.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 — col 8 with image */}
            <FadeIn delay={0.08} className="md:col-span-8">
              <div
                className="group p-8 flex flex-col md:flex-row gap-8 items-center h-full transition-all duration-300 cursor-pointer"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "320px" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#2563eb")}
                onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/20" style={{ background: "#e0e9ef" }}>
                    <span className="material-symbols-outlined transition-colors duration-300 group-hover:text-white" style={{ color: "#004ac6" }}>devices</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 transition-colors duration-300 group-hover:text-white">Technology &amp; Marketing</h3>
                  <p className="font-body leading-relaxed transition-colors duration-300 group-hover:text-white/80" style={{ color: "#434655" }}>
                    Proprietary digital platforms and marketing engines designed to simplify complex financial concepts for every family.
                  </p>
                </div>
                <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0" style={{ background: "#ecf5fb" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
                    alt="Technology & Marketing"
                    width={256}
                    height={192}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Card 3 — col 5 */}
            <FadeIn delay={0.05} className="md:col-span-5">
              <div
                className="group p-8 flex flex-col justify-between h-full transition-all duration-300 cursor-pointer"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "280px" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#996100")}
                onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
              >
                <div>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/20" style={{ background: "#e0e9ef" }}>
                    <span className="material-symbols-outlined transition-colors duration-300 group-hover:text-white" style={{ color: "#004ac6" }}>history_edu</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 transition-colors duration-300 group-hover:text-white">Decades of Experience</h3>
                  <p className="font-body leading-relaxed transition-colors duration-300 group-hover:text-white/80" style={{ color: "#434655" }}>
                    Backed by a leadership team with over 40 years of collective wisdom in the financial services industry.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 4 — col 4 */}
            <FadeIn delay={0.1} className="md:col-span-4">
              <div
                className="group p-8 flex flex-col justify-between h-full transition-all duration-300 cursor-pointer"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "280px" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#455f87")}
                onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
              >
                <div>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/20" style={{ background: "#e0e9ef" }}>
                    <span className="material-symbols-outlined transition-colors duration-300 group-hover:text-white" style={{ color: "#004ac6" }}>self_improvement</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 transition-colors duration-300 group-hover:text-white">Personal Development</h3>
                  <p className="font-body leading-relaxed transition-colors duration-300 group-hover:text-white/80" style={{ color: "#434655" }}>
                    Focusing on the psychological foundation required for long-term wealth building.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 5 — col 3 */}
            <FadeIn delay={0.15} className="md:col-span-3">
              <div
                className="group p-8 flex flex-col justify-between h-full transition-all duration-300 cursor-pointer"
                style={{ background: "#ffffff", borderRadius: "1rem", minHeight: "280px" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#784b00")}
                onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
              >
                <div>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/20" style={{ background: "#e0e9ef" }}>
                    <span className="material-symbols-outlined transition-colors duration-300 group-hover:text-white" style={{ color: "#004ac6" }}>settings_input_component</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 transition-colors duration-300 group-hover:text-white">System Powered</h3>
                  <p className="font-body leading-relaxed transition-colors duration-300 group-hover:text-white/80" style={{ color: "#434655" }}>
                    A repeatable, scalable system that removes guesswork from financial success.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROGRESS BAR
      ══════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#f4faff" }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <h4 className="font-body font-bold tracking-widest uppercase text-xs mb-8" style={{ color: "#004ac6" }}>
              Current Global Mission Progress
            </h4>
            <div className="relative w-full h-8 rounded-full overflow-hidden mb-6" style={{ background: "#e0e9ef" }}>
              <div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ width: "72%", background: "linear-gradient(90deg, #ffddb8 0%, #784b00 100%)" }}
              >
                <div className="absolute inset-0 flex items-center justify-end px-4" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <span className="text-white font-bold text-sm">72%</span>
                </div>
              </div>
            </div>
            <p className="font-body font-medium italic" style={{ color: "#434655" }}>
              Over 360,000 lives impacted through our primary 2024 initiative.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="py-24 relative" style={{ background: "#f4faff" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn>
            <div
              className="relative p-12 md:p-20 text-center overflow-hidden"
              style={{ background: "#ecf5fb", borderRadius: "1rem" }}
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=60"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <h2
                  className="font-display font-extrabold mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#141d21" }}
                >
                  Ready to change your financial trajectory?
                </h2>
                <p className="font-body text-xl font-medium mb-12 max-w-2xl mx-auto" style={{ color: "#434655" }}>
                  Join thousands of families who have found clarity and confidence through the Freedom Horizon mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-started"
                    className="px-12 py-5 rounded-full font-bold font-body text-lg text-white hover:scale-105 transition-all shadow-xl"
                    style={{ background: "linear-gradient(135deg, #004ac6, #2563eb)", boxShadow: "0 8px 32px rgba(0,74,198,0.2)" }}
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="/contact"
                    className="px-12 py-5 rounded-full font-bold font-body text-lg hover:bg-white transition-all shadow-sm"
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
    </ScrollExpandMedia>
  );
}
