import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export const metadata: Metadata = {
  title: "Freedom Horizon Financial — Financial Education & Services",
  description:
    "Freedom Horizon Financial is on a mission to erase financial illiteracy so families can dream again and build lasting wealth.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Horizon gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, #1e40af 0%, #3b82f6 60%, #f59e0b 100%)",
          }}
        />
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          {/* Fade to surface at bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-32"
            style={{ background: "linear-gradient(to top, #f4faff, transparent)" }}
          />
        </div>
        {/* Sun ray glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,221,184,0.4) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <ScrollReveal>
            <h1
              className="font-display font-black text-white leading-[0.9] tracking-tighter drop-shadow-lg mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
            >
              Your Financial <br />
              Freedom Starts <br />
              at the{" "}
              <span style={{ color: "#ffddb8" }}>Horizon</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p
              className="text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ color: "rgba(219, 234, 254, 0.9)" }}
            >
              We believe everyone deserves to understand how money works. Freedom
              Horizon Financial is on a mission to educate, empower, and help
              families build lasting wealth.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/mission"
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-blue-50"
                style={{ background: "#ffffff", color: "#004ac6" }}
              >
                Discover Our Mission
              </Link>
              <Link
                href="/system"
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2 text-white"
                style={{ border: "2px solid rgba(255,255,255,0.4)" }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1", fontSize: "1.25rem" }}
                >
                  play_circle
                </span>
                Watch System Overview
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizon line motif */}
        <div
          className="absolute bottom-0 left-0 w-full h-px blur-sm opacity-50"
          style={{
            background:
              "linear-gradient(to right, transparent, #ffddb8, transparent)",
          }}
        />
      </section>

      {/* ── Stats ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: (
                  <>
                    <span style={{ color: "#004ac6" }}>23</span>{" "}
                    <span className="text-3xl font-medium" style={{ color: "#784b00" }}>out of</span>{" "}
                    <span style={{ color: "#004ac6" }}>50</span>
                  </>
                ),
                desc: "States reached across the nation with our localized financial courses for high schoolers.",
              },
              {
                value: (
                  <>
                    <span style={{ color: "#004ac6" }}>4.5</span>{" "}
                    <span className="text-3xl font-medium" style={{ color: "#784b00" }}>Billion</span>
                  </>
                ),
                desc: "People globally who lack basic financial literacy resources according to latest reports.",
              },
              {
                value: (
                  <>
                    <span style={{ color: "#004ac6" }}>37</span>
                    <span className="text-3xl font-medium" style={{ color: "#784b00" }}>%</span>
                  </>
                ),
                desc: "Of Americans who can't cover a $400 emergency expense without confidence.",
              },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="group p-10 flex flex-col items-center text-center transition-all duration-500"
                  style={{
                    background: "#ecf5fb",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    className="font-display font-black text-5xl mb-4 tracking-tighter"
                  >
                    {stat.value}
                  </div>
                  <div
                    className="w-12 h-1 mb-6 rounded-full transition-all duration-500 group-hover:w-24"
                    style={{ background: "#784b00", opacity: 0.3 }}
                  />
                  <p
                    className="font-medium text-lg leading-snug"
                    style={{ color: "#434655" }}
                  >
                    {stat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Banner ── */}
      <section
        className="py-16 overflow-hidden relative"
        style={{ background: "#004ac6" }}
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal>
            <div className="flex-1">
              <h2
                className="font-display font-black tracking-tighter leading-none mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff" }}
              >
                100,000+ Families <br />Educated Worldwide
              </h2>
              <p
                className="text-xl font-medium max-w-lg"
                style={{ color: "rgba(219, 234, 254, 0.8)" }}
              >
                Join a global movement dedicated to breaking the cycle of
                financial uncertainty across North America.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex gap-4 flex-shrink-0">
              {[
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
              ].map((src, i) => (
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Features Bento Grid ── */}
      <section className="py-32 overflow-hidden" style={{ background: "#ecf5fb" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <ScrollReveal>
              <div className="max-w-2xl">
                <span
                  className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6"
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
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p
                className="text-xl max-w-sm font-medium leading-relaxed pb-2"
                style={{ color: "#434655" }}
              >
                Our comprehensive approach combines modern tools with timeless
                principles to build your financial foundation.
              </p>
            </ScrollReveal>
          </div>

          {/* Bento */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            style={{ minHeight: "700px" }}
          >
            {/* Card 1 — col 4 */}
            <ScrollReveal delay={0}>
              <div
                className="md:col-span-4 p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem" }}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#e0e9ef" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#004ac6" }}
                    >
                      school
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-4"
                    style={{ color: "#141d21" }}
                  >
                    Professional Development
                  </h3>
                  <p style={{ color: "#434655" }}>
                    Continuous training and certification programs for our field
                    leaders and educators.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 — col 8 with image */}
            <ScrollReveal delay={0.05}>
              <div
                className="md:col-span-8 p-8 flex flex-col md:flex-row gap-8 items-center group transition-all duration-300 hover:shadow-2xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem" }}
              >
                <div className="flex-1">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#e0e9ef" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#004ac6" }}
                    >
                      devices
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-4"
                    style={{ color: "#141d21" }}
                  >
                    Technology &amp; Marketing
                  </h3>
                  <p style={{ color: "#434655" }}>
                    Proprietary digital platforms and marketing engines designed to
                    simplify complex financial concepts for every family.
                  </p>
                </div>
                <div
                  className="flex-1 w-full h-48 rounded-xl overflow-hidden"
                  style={{ background: "#ecf5fb", minWidth: "180px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
                    alt="Technology & Marketing"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 — col 5 */}
            <ScrollReveal delay={0.1}>
              <div
                className="md:col-span-5 p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem" }}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#e0e9ef" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#004ac6" }}
                    >
                      history_edu
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-4"
                    style={{ color: "#141d21" }}
                  >
                    Decades of Experience
                  </h3>
                  <p style={{ color: "#434655" }}>
                    Backed by a leadership team with over 40 years of collective
                    wisdom in the financial services industry.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4 — col 4 */}
            <ScrollReveal delay={0.15}>
              <div
                className="md:col-span-4 p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem" }}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#e0e9ef" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#004ac6" }}
                    >
                      psychology
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-4"
                    style={{ color: "#141d21" }}
                  >
                    Mindset Training
                  </h3>
                  <p style={{ color: "#434655" }}>
                    Focusing on the psychological foundation required for
                    long-term wealth building.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5 — col 3 */}
            <ScrollReveal delay={0.2}>
              <div
                className="md:col-span-3 p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl cursor-pointer h-full"
                style={{ background: "#ffffff", borderRadius: "1rem" }}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#e0e9ef" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#004ac6" }}
                    >
                      settings_input_component
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-4"
                    style={{ color: "#141d21" }}
                  >
                    System Powered
                  </h3>
                  <p style={{ color: "#434655" }}>
                    A repeatable, scalable system that removes guesswork from
                    financial success.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Horizon Progress Bar ── */}
      <section className="py-20" style={{ background: "#f4faff" }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <ScrollReveal>
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
            <p
              className="font-medium italic"
              style={{ color: "#434655" }}
            >
              Over 360,000 lives impacted through our primary 2024 initiative.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 relative" style={{ background: "#f4faff" }}>
        <div className="max-w-5xl mx-auto px-8">
          <ScrollReveal>
            <div
              className="p-12 md:p-20 text-center relative overflow-hidden"
              style={{ background: "#ecf5fb", borderRadius: "1.5rem" }}
            >
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-3xl">
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
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#141d21",
                  }}
                >
                  Ready to change your financial trajectory?
                </h2>
                <p
                  className="text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "#434655" }}
                >
                  Join thousands of families who have found clarity and confidence
                  through the Freedom Horizon mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-started"
                    className="px-12 py-5 rounded-full font-bold text-lg text-white transition-all hover:opacity-90 shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)",
                      boxShadow: "0 8px 32px rgba(0, 74, 198, 0.25)",
                    }}
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="/contact"
                    className="px-12 py-5 rounded-full font-bold text-lg transition-all hover:bg-white shadow-sm"
                    style={{
                      background: "#ffffff",
                      color: "#141d21",
                    }}
                  >
                    Talk to an Educator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
