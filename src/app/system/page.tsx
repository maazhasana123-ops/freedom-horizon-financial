import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export const metadata: Metadata = {
  title: "Our System",
  description: "Discover the Freedom Horizon Financial platform — high-tech, high-touch tools and proven systems.",
};

const features = [
  { icon: "groups", title: "Leadership", body: "Direct access to the architects of the system, fostering a culture of mentorship and accountability." },
  { icon: "campaign", title: "Marketing", body: "Turnkey digital assets and branding strategies that command attention in a crowded marketplace." },
  { icon: "devices_fold", title: "Technology", body: "Proprietary CRM and analytical tools designed specifically for the Freedom Horizon workflow." },
  { icon: "corporate_fare", title: "Administration", body: "Concierge-level back-office support allowing you to focus on growth, not paperwork." },
  { icon: "trending_up", title: "Sales", body: "Proven psychological frameworks and closing techniques that drive consistent conversion." },
  { icon: "inventory_2", title: "Products", body: "Exclusive access to premier financial vehicles curated for the modern client portfolio." },
];

const dimensions = [
  { num: "01", title: "Personal Income", body: "Your direct impact on clients. High-margin revenue from individual expertise.", fill: "25%" },
  { num: "02", title: "Team Income", body: "Override rewards for building and coaching a localized unit of experts.", fill: "50%" },
  { num: "03", title: "Expansion Income", body: "Leveraging the network to scale across borders and territories globally.", fill: "75%" },
  { num: "04", title: "Bonus Income", body: "Profit-sharing and performance pools for top-tier organizational leaders.", fill: "100%" },
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
  { title: "Client", body: "Access world-class financial strategies to secure your family's legacy.", cta: "Become a Client", highlight: false },
  { title: "Part-Time", body: "Build your business while maintaining your current commitments.", cta: "Join the Mission", highlight: true, badge: "Most Popular" },
  { title: "Full-Time", body: "Full immersion into the Freedom Horizon leadership and growth track.", cta: "Career Opportunities", highlight: false },
];

export default function SystemPage() {
  return (
    <>
      {/* HERO — dark navy gradient */}
      <section
        className="relative px-4 sm:px-8 py-24 overflow-hidden min-h-[88vh] flex items-center"
        style={{ background: "linear-gradient(160deg, #0a1628 0%, #0f2d5c 45%, #1a4a8a 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-6"
                style={{ background: "rgba(255,255,255,0.1)", color: "#93c5fd", border: "1px solid rgba(147,197,253,0.2)" }}>
                The System Revealed
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-extrabold leading-[1.05] mb-6 text-white"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}>
                A Crusade Powered by{" "}
                <span style={{ color: "#60a5fa" }}>Innovation</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl max-w-lg mb-12 leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                A proven model for growth. A new standard in communication. We aren&rsquo;t just changing the industry; we are rebuilding it from the horizon up.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-started"
                  className="px-8 py-4 rounded-full font-bold text-base text-white hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)", boxShadow: "0 8px 32px rgba(37,99,235,0.4)" }}>
                  Explore the Model
                </Link>
                <Link href="/videos"
                  className="px-8 py-4 rounded-full font-bold text-base"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.18)" }}>
                  Watch Overview
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative hidden md:block">
            <ScrollReveal delay={0.15} direction="right">
              <div className="aspect-square overflow-hidden shadow-2xl"
                style={{ borderRadius: "1.25rem", transform: "rotate(2deg) scale(0.96)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Innovation platform" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.4) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 max-w-[260px]"
                style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.14)" }}>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ color: "#f59e0b", fontVariationSettings: "'FILL' 1", fontSize: "1rem" }}>star</span>
                  ))}
                </div>
                <p className="font-bold text-white text-sm">&ldquo;The most transparent growth engine I&rsquo;ve ever seen.&rdquo;</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* A NEW ERA — white with image split */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="overflow-hidden flex flex-col md:flex-row shadow-lg"
              style={{ background: "#f8faff", borderRadius: "1.25rem", border: "1px solid #e2eaf5" }}>
              <div className="flex-1 p-12 md:p-16">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-6"
                  style={{ background: "rgba(0,74,198,0.07)", color: "#2563eb" }}>
                  The Platform
                </span>
                <h2 className="font-display font-extrabold mb-5"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
                  A New Era
                </h2>
                <div className="w-16 h-1.5 rounded-full mb-8" style={{ background: "linear-gradient(135deg, #2563eb, #3b82f6)" }} />
                <p className="text-lg leading-relaxed mb-8" style={{ color: "#475569" }}>
                  Freedom Horizon isn&rsquo;t just a brokerage; it&rsquo;s a high-performance ecosystem designed to eliminate the friction between a professional&rsquo;s ambition and their results.
                </p>
                <ul className="space-y-4">
                  {["Unified Wealth Intelligence", "Decentralized Growth Incentives", "Radical Leadership Transparency"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-semibold" style={{ color: "#1e293b" }}>
                      <span className="material-symbols-outlined" style={{ color: "#2563eb", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 min-h-[360px] relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Digital infrastructure" fill className="object-cover" />
                <div className="absolute inset-0 hidden md:block"
                  style={{ background: "linear-gradient(to right, #f8faff 0%, transparent 30%)" }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HIGH-TECH HIGH-TOUCH — dark navy */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#1a2d5a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.08)", color: "#93c5fd" }}>
                6 Pillars of Excellence
              </span>
              <h2 className="font-display font-extrabold mb-4 text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}>
                High-tech. High-touch.
              </h2>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
                Six pillars of operational excellence that empower our associates to lead with confidence.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="relative p-8 h-full card-hover-glow-dark overflow-hidden cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.05)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)", transform: "translate(40%, -40%)" }} />
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110"
                    style={{ background: "rgba(96,165,250,0.12)" }}>
                    <span className="material-symbols-outlined" style={{ color: "#60a5fa" }}>{feature.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-white">{feature.title}</h3>
                  <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.58)" }}>{feature.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL FOR EXPANSION — light surface with clean table */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal>
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
                style={{ background: "rgba(0,74,198,0.07)", color: "#2563eb" }}>
                The Comparison
              </span>
              <h2 className="font-display font-extrabold"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
                Model for Expansion
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <div className="overflow-hidden shadow-xl" style={{ borderRadius: "1.25rem", border: "1px solid #e2eaf5" }}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, #0a1628, #1a3a6e)" }}>
                    <th className="p-6 text-base font-bold text-white">Feature</th>
                    <th className="p-6 text-base font-bold" style={{ color: "rgba(255,255,255,0.55)" }}>Traditional Agency</th>
                    <th className="p-6 text-base font-bold" style={{ color: "#60a5fa" }}>Freedom Horizon Model</th>
                  </tr>
                </thead>
                <tbody style={{ background: "#ffffff" }}>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td className="p-6 font-bold text-sm" style={{ color: "#0f172a" }}>{row.feature}</td>
                      <td className="p-6 text-sm" style={{ color: "#94a3b8" }}>{row.traditional}</td>
                      <td className="p-6 font-bold text-sm" style={{ color: "#2563eb", background: "rgba(37,99,235,0.03)" }}>{row.fhf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 DIMENSIONS — white with strong cards */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <ScrollReveal>
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
                style={{ background: "rgba(0,74,198,0.07)", color: "#2563eb" }}>
                Income Architecture
              </span>
              <h2 className="font-display font-extrabold mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
                Grow Your Income in 4 Dimensions
              </h2>
              <p className="text-lg" style={{ color: "#475569" }}>
                Building multi-generational wealth requires a multi-dimensional approach.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {dimensions.map((dim, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative p-8 h-full card-hover-glow overflow-hidden shimmer-on-hover cursor-pointer"
                  style={{
                    background: "#f8faff", borderRadius: "1.25rem", border: "1px solid #e2eaf5",
                    borderTop: `4px solid rgba(37,99,235,${0.4 + i * 0.15})`,
                  }}>
                  <div className="font-display font-bold text-4xl mb-1" style={{ color: "rgba(37,99,235,0.2)" }}>{dim.num}</div>
                  <h3 className="font-display font-bold text-lg mb-3" style={{ color: "#0f172a" }}>{dim.title}</h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "#64748b" }}>{dim.body}</p>
                  <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: "#e2eaf5" }}>
                    <div className="h-full rounded-full" style={{ width: dim.fill, background: "linear-gradient(to right, #3b82f6, #2563eb)" }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY STATS — very dark */}
      <section className="py-24 px-4 sm:px-8" style={{ background: "#060d1a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-around items-center gap-12 text-center">
            {industryStats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  {i < industryStats.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 hidden md:block" style={{ background: "rgba(255,255,255,0.08)" }} />
                  )}
                  <div className="font-display font-extrabold mb-2 text-white px-8"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                    {stat.value}
                  </div>
                  <div className="font-bold tracking-widest uppercase text-sm" style={{ color: "#3b82f6" }}>{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center mt-12 font-medium" style={{ color: "#334155" }}>
              Positioned at the intersection of the world&rsquo;s largest asset classes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 WAYS TO BEGIN — light */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
              style={{ background: "rgba(0,74,198,0.07)", color: "#2563eb" }}>
              Your Path
            </span>
            <h2 className="font-display font-extrabold mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
              3 Ways to Begin
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {threeWays.map((way, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative p-10 overflow-hidden transition-all duration-300 card-hover-glow"
                  style={{
                    background: way.highlight ? "linear-gradient(160deg, #0a1628, #0f2d5c)" : "#ffffff",
                    borderRadius: "1.25rem",
                    border: way.highlight ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e2eaf5",
                    boxShadow: way.highlight ? "0 24px 48px rgba(10,22,40,0.3)" : "0 2px 8px rgba(20,29,33,0.05)",
                    transform: way.highlight ? "scale(1.04)" : "scale(1)",
                  }}>
                  {way.highlight && (
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-20"
                      style={{ background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                  )}
                  {way.badge && (
                    <div className="inline-block text-xs font-bold uppercase py-1 px-3 rounded-full mb-4"
                      style={{ background: "rgba(37,99,235,0.2)", color: "#93c5fd" }}>
                      {way.badge}
                    </div>
                  )}
                  <h3 className="font-display font-bold text-2xl mb-4" style={{ color: way.highlight ? "#ffffff" : "#0f172a" }}>
                    {way.title}
                  </h3>
                  <p className="mb-8" style={{ color: way.highlight ? "rgba(255,255,255,0.6)" : "#64748b" }}>{way.body}</p>
                  <Link href="/get-started"
                    className="relative block w-full py-4 rounded-full font-bold transition-all hover:scale-105 hover:opacity-90 overflow-hidden shimmer-on-hover"
                    style={way.highlight
                      ? { background: "linear-gradient(135deg, #2563eb, #3b82f6)", color: "#ffffff", boxShadow: "0 8px 24px rgba(37,99,235,0.4)" }
                      : { background: "#f1f5f9", color: "#2563eb" }}>
                    {way.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="p-12 md:p-20 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2d5c 50%, #1e4d9b 100%)", borderRadius: "1.5rem", boxShadow: "0 40px 80px -20px rgba(10,22,40,0.45)" }}>
              <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <h2 className="font-display font-extrabold text-white mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}>
                  Ready to Build With Us?
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Join a movement changing financial literacy across North America.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/get-started"
                    className="relative inline-block font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all overflow-hidden shimmer-on-hover pulse-glow"
                    style={{ background: "linear-gradient(135deg, #2563eb, #3b82f6)", color: "#ffffff", boxShadow: "0 8px 32px rgba(37,99,235,0.4)" }}>
                    Start Your Journey
                  </Link>
                  <Link href="/videos"
                    className="inline-block font-bold text-lg px-10 py-4 rounded-full transition-all hover:bg-white/15 hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}>
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
