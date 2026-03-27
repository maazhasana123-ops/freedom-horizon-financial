"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { EcosystemFeatures } from "@/components/sections/ecosystem-features";

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

      <EcosystemFeatures />

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
