import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export const metadata: Metadata = {
  title: "Our System",
  description:
    "Discover the Freedom Horizon Financial platform — high-tech, high-touch tools and proven systems for financial professionals.",
};

const features = [
  {
    icon: "groups",
    title: "Leadership",
    body: "Direct access to the architects of the system, fostering a culture of mentorship and accountability.",
  },
  {
    icon: "campaign",
    title: "Marketing",
    body: "Turnkey digital assets and branding strategies that command attention in a crowded marketplace.",
  },
  {
    icon: "devices_fold",
    title: "Technology",
    body: "Proprietary CRM and analytical tools designed specifically for the Freedom Horizon workflow.",
  },
  {
    icon: "corporate_fare",
    title: "Administration",
    body: "Concierge-level back-office support allowing you to focus on growth, not paperwork.",
  },
  {
    icon: "trending_up",
    title: "Sales",
    body: "Proven psychological frameworks and closing techniques that drive consistent conversion.",
  },
  {
    icon: "inventory_2",
    title: "Products",
    body: "Exclusive access to premier financial vehicles curated for the modern client portfolio.",
  },
];

const dimensions = [
  {
    num: "01",
    title: "Personal Income",
    body: "Your direct impact on clients. High-margin revenue from individual expertise.",
    fill: "25%",
  },
  {
    num: "02",
    title: "Team Income",
    body: "Override rewards for building and coaching a localized unit of experts.",
    fill: "50%",
  },
  {
    num: "03",
    title: "Expansion Income",
    body: "Leveraging the network to scale across borders and territories globally.",
    fill: "75%",
  },
  {
    num: "04",
    title: "Bonus Income",
    body: "Profit-sharing and performance pools for top-tier organizational leaders.",
    fill: "100%",
  },
];

const comparisonRows = [
  { feature: "Compensation", traditional: "Hierarchical / Capped", fhf: "Democratic / Uncapped" },
  { feature: "Equity Path", traditional: "Gatekept by Tenure", fhf: "Performance-Driven Ownership" },
  { feature: "Infrastructure", traditional: "Fragmented Systems", fhf: "Unified Digital Ecosystem" },
  { feature: "Training", traditional: "Generalist / Outdated", fhf: "Specialist / High-Tech" },
  { feature: "Support", traditional: "Do-it-Yourself", fhf: "White-Glove Operational Concierge" },
];

const industryStats = [
  { value: "$158T", label: "Financial Services" },
  { value: "$34T", label: "Real Estate" },
  { value: "$24T", label: "Retail Market" },
];

const threeWays = [
  {
    title: "Client",
    body: "Access world-class financial strategies to secure your family's legacy.",
    cta: "Become a Client",
    highlight: false,
  },
  {
    title: "Part-Time",
    body: "Build your business while maintaining your current commitments.",
    cta: "Join the Mission",
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "Full-Time",
    body: "Full immersion into the Freedom Horizon leadership and growth track.",
    cta: "Career Opportunities",
    highlight: false,
  },
];

export default function SystemPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-8 py-24 overflow-hidden min-h-[85vh] flex items-center">
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(219, 225, 255, 0.2) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <ScrollReveal>
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 uppercase"
                style={{ background: "#b5d0fd", color: "#2d486d" }}
              >
                The System Revealed
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="font-display font-extrabold leading-[1.05] mb-8 tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: "#141d21",
                  letterSpacing: "-0.03em",
                }}
              >
                A Crusade Powered by{" "}
                <span style={{ color: "#004ac6" }}>Innovation</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl max-w-lg mb-12 leading-relaxed" style={{ color: "#434655" }}>
                A proven model for growth. A new standard in communication. We
                aren&rsquo;t just changing the industry; we are rebuilding it from
                the horizon up.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/get-started"
                  className="px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl hover:scale-[1.02] transition-transform"
                  style={{ background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)" }}
                >
                  Explore the Model
                </Link>
                <Link
                  href="/videos"
                  className="px-8 py-4 rounded-full font-bold text-lg transition-colors"
                  style={{ background: "#dbe4ea", color: "#004ac6" }}
                >
                  Watch Overview
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal delay={0.15}>
              <div
                className="aspect-square overflow-hidden shadow-2xl transition-all duration-700"
                style={{
                  borderRadius: "0.75rem",
                  transform: "rotate(3deg) scale(0.95)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern innovation platform for financial professionals"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating review card */}
              <div
                className="absolute -bottom-12 -left-12 p-8 max-w-xs hidden md:block"
                style={{
                  background: "#ffffff",
                  borderRadius: "1rem",
                  boxShadow: "0 40px 60px -20px rgba(20, 29, 33, 0.12)",
                  borderLeft: "4px solid #784b00",
                }}
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ color: "#784b00", fontVariationSettings: "'FILL' 1", fontSize: "1.1rem" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-bold" style={{ color: "#141d21" }}>
                  &ldquo;The most transparent growth engine I&rsquo;ve ever seen.&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── A New Era ── */}
      <section className="py-32 px-4 sm:px-8" style={{ background: "#ecf5fb" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="overflow-hidden flex flex-col md:flex-row shadow-sm"
              style={{ background: "#ffffff", borderRadius: "0.75rem" }}
            >
              <div className="flex-1 p-12 md:p-20">
                <h2
                  className="font-display font-extrabold mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    color: "#141d21",
                    letterSpacing: "-0.02em",
                  }}
                >
                  A New Era
                </h2>
                <div
                  className="w-20 h-1.5 rounded-full mb-8"
                  style={{ background: "#784b00" }}
                />
                <p className="text-lg leading-relaxed mb-8" style={{ color: "#434655" }}>
                  Freedom Horizon isn&rsquo;t just a brokerage; it&rsquo;s a
                  high-performance ecosystem designed to eliminate the friction
                  between a professional&rsquo;s ambition and their results. Our
                  platform integrates seamless data flows with high-impact human
                  mentorship.
                </p>
                <ul className="space-y-4">
                  {[
                    "Unified Wealth Intelligence",
                    "Decentralized Growth Incentives",
                    "Radical Leadership Transparency",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 font-semibold" style={{ color: "#141d21" }}>
                      <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 min-h-[400px] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Digital infrastructure and innovation"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 hidden md:block"
                  style={{
                    background: "linear-gradient(to right, #ffffff, transparent)",
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── High-tech. High-touch. ── */}
      <section className="py-32 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2
                className="font-display font-extrabold mb-4"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "#141d21",
                  letterSpacing: "-0.02em",
                }}
              >
                High-tech. High-touch.
              </h2>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "#434655" }}>
                Our six pillars of operational excellence that empower our
                associates to lead with confidence.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className="p-8 h-full transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: "#ffffff",
                    borderRadius: "1rem",
                    boxShadow: "0 2px 8px rgba(20, 29, 33, 0.06)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors"
                    style={{ background: "rgba(0, 74, 198, 0.08)" }}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>
                      {feature.icon}
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-4"
                    style={{ color: "#141d21" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#434655" }}>
                    {feature.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Model for Expansion ── */}
      <section className="py-32 px-4 sm:px-8" style={{ background: "#e0e9ef" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-display font-extrabold text-center mb-16"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#141d21",
                letterSpacing: "-0.02em",
              }}
            >
              Model for Expansion
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="overflow-hidden shadow-2xl"
              style={{ background: "#ffffff", borderRadius: "0.75rem" }}
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ background: "#004ac6", color: "#ffffff" }}>
                    <th className="p-8 text-xl font-bold">Feature</th>
                    <th className="p-8 text-xl font-bold">Traditional Agency</th>
                    <th className="p-8 text-xl font-bold" style={{ background: "rgba(0,0,0,0.15)" }}>
                      Freedom Horizon Model
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid #e6eff5",
                      }}
                    >
                      <td className="p-8 font-bold" style={{ color: "#141d21" }}>
                        {row.feature}
                      </td>
                      <td className="p-8" style={{ color: "#434655" }}>
                        {row.traditional}
                      </td>
                      <td
                        className="p-8 font-bold"
                        style={{
                          color: "#004ac6",
                          background: "rgba(0, 74, 198, 0.04)",
                        }}
                      >
                        {row.fhf}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4 Dimensions ── */}
      <section className="py-32 px-4 sm:px-8 relative overflow-hidden" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <ScrollReveal>
              <h2
                className="font-display font-extrabold mb-4"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "#141d21",
                  letterSpacing: "-0.02em",
                }}
              >
                Grow Your Income in 4 Dimensions
              </h2>
              <p className="text-lg" style={{ color: "#434655" }}>
                Building multi-generational wealth requires a multi-dimensional approach.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {dimensions.map((dim, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="p-10 h-full"
                  style={{
                    background: "#ffffff",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px rgba(20, 29, 33, 0.08)",
                    borderTop: `8px solid rgba(0, 74, 198, ${1 - i * 0.2})`,
                  }}
                >
                  <div className="font-bold mb-4" style={{ color: "#784b00" }}>
                    {dim.num}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "#141d21" }}>
                    {dim.title}
                  </h3>
                  <p style={{ color: "#434655" }}>{dim.body}</p>
                  <div
                    className="mt-8 h-1 w-full rounded-full overflow-hidden"
                    style={{ background: "#e0e9ef" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: dim.fill,
                        background: "linear-gradient(to right, #ffddb8 0%, #784b00 100%)",
                      }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Stats ── */}
      <section className="py-24 px-4 sm:px-8" style={{ background: "#293236", color: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-16 text-center">
          {industryStats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div>
                <div
                  className="font-display font-extrabold mb-2"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#dbe1ff" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-bold tracking-widest uppercase text-sm"
                  style={{ color: "#d5e3ff" }}
                >
                  {stat.label}
                </div>
              </div>
              {i < industryStats.length - 1 && (
                <div className="w-px h-20 hidden md:block" style={{ background: "rgba(255,255,255,0.1)" }} />
              )}
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="text-center mt-12 font-medium" style={{ color: "#64748b" }}>
            Positioned at the intersection of the world&rsquo;s largest asset classes.
          </p>
        </ScrollReveal>
      </section>

      {/* ── 3 Ways to Begin ── */}
      <section className="py-32 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="font-display font-extrabold mb-16"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#141d21",
                letterSpacing: "-0.02em",
              }}
            >
              3 Ways to Begin
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {threeWays.map((way, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="p-12 transition-all duration-300"
                  style={{
                    background: "#ffffff",
                    borderRadius: "0.75rem",
                    boxShadow: way.highlight
                      ? "0 20px 40px rgba(20, 29, 33, 0.12)"
                      : "0 2px 8px rgba(20, 29, 33, 0.06)",
                    transform: way.highlight ? "scale(1.05)" : "scale(1)",
                    borderBottom: way.highlight ? "4px solid #004ac6" : "4px solid transparent",
                    position: "relative",
                  }}
                >
                  {way.badge && (
                    <div
                      className="inline-block text-xs font-bold uppercase py-1 px-3 rounded-full mb-4"
                      style={{ background: "#dbe1ff", color: "#00174b" }}
                    >
                      {way.badge}
                    </div>
                  )}
                  <h3
                    className="font-display font-bold text-2xl mb-4"
                    style={{ color: "#141d21" }}
                  >
                    {way.title}
                  </h3>
                  <p className="mb-8" style={{ color: "#434655" }}>
                    {way.body}
                  </p>
                  <Link
                    href="/get-started"
                    className="block w-full py-4 rounded-full font-bold transition-all"
                    style={
                      way.highlight
                        ? {
                            background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)",
                            color: "#ffffff",
                            boxShadow: "0 4px 20px rgba(0, 74, 198, 0.25)",
                          }
                        : {
                            background: "#e0e9ef",
                            color: "#004ac6",
                          }
                    }
                  >
                    {way.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="p-12 md:p-20 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)",
                borderRadius: "1rem",
                boxShadow: "0 40px 60px -20px rgba(0, 74, 198, 0.30)",
              }}
            >
              <div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
                style={{ background: "rgba(255,255,255,0.10)", filter: "blur(80px)" }}
              />
              <div className="relative z-10">
                <h2
                  className="font-display font-extrabold text-white mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}
                >
                  Ready to Build With Us?
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#eeefff" }}>
                  Join a movement changing financial literacy across North America.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/get-started"
                    className="inline-block bg-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
                    style={{ color: "#004ac6" }}
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="/videos"
                    className="inline-block font-bold text-lg px-10 py-4 rounded-full transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    Watch Our Story
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
