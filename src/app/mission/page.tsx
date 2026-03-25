import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Freedom Horizon Financial is on a mission to erase financial illiteracy so families can dream again and build lasting wealth.",
};

const pillars = [
  {
    icon: "diversity_3",
    title: "Engagement",
    body: "Interactive learning that turns complex data into meaningful family conversations.",
  },
  {
    icon: "explore",
    title: "Discovery",
    body: "Revealing the hidden rules of money that the financial industry doesn't want you to know.",
  },
  {
    icon: "lightbulb",
    title: "Clarity & Simplicity",
    body: "Removing jargon and complexity. If a child can't understand it, it's too complicated.",
  },
  {
    icon: "update",
    title: "Up-to-Date",
    body: "Strategies that work in today's dynamic economy, not 40-year-old outdated theories.",
  },
  {
    icon: "verified_user",
    title: "Honesty",
    body: "Transparent guidance focused on your success, not commission-driven product sales.",
  },
  {
    icon: "ads_click",
    title: "Strategy",
    body: "A cohesive battle plan that connects your savings, protection, and growth goals.",
  },
];

export default function MissionPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[85vh] flex items-center px-4 sm:px-8 overflow-hidden pt-24">
        {/* Atmospheric background glow */}
        <div
          className="absolute top-1/2 -right-64 w-[800px] h-[800px] rounded-full -z-10"
          style={{
            background: "rgba(0, 74, 198, 0.05)",
            filter: "blur(120px)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — headline */}
          <div className="lg:col-span-7 z-10">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-6"
                style={{ background: "#ffddb8", color: "#2a1700" }}>
                Global Crisis Report
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="font-display font-extrabold leading-[1.05] tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  color: "#141d21",
                  letterSpacing: "-0.03em",
                }}
              >
                Financial{" "}
                <span className="italic" style={{ color: "#004ac6" }}>
                  Illiteracy
                </span>{" "}
                is the #1 Economic Crisis in the World
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl"
                style={{ color: "#434655" }}
              >
                More than 4.5 billion people around the world can&rsquo;t answer
                basic questions about money.{" "}
                <span className="font-bold" style={{ color: "#141d21" }}>
                  Can you?
                </span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-started"
                  className="px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)" }}
                >
                  Take the Assessment
                </Link>
                <Link
                  href="/system"
                  className="px-8 py-4 rounded-full font-bold text-lg transition-colors"
                  style={{ background: "#dbe4ea", color: "#004ac6" }}
                >
                  Read the Study
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — editorial image */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={0.2}>
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0 40px 60px -20px rgba(20, 29, 33, 0.12)",
                  transform: "rotate(3deg)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Families building financial freedom together"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-10 -left-10 hidden md:block max-w-xs p-8"
                style={{
                  background: "#ffffff",
                  borderRadius: "1rem",
                  boxShadow: "0 40px 60px -20px rgba(20, 29, 33, 0.10)",
                  border: "1px solid rgba(195, 198, 215, 0.15)",
                }}
              >
                <div
                  className="font-display font-bold text-4xl mb-2"
                  style={{ color: "#784b00" }}
                >
                  4.5B+
                </div>
                <p className="text-sm font-medium" style={{ color: "#434655" }}>
                  People globally lack fundamental financial education. We are here
                  to change that.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Vision ── */}
      <section className="py-24 px-4 sm:px-8" style={{ background: "#ecf5fb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image mosaic */}
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <ScrollReveal className="space-y-4 pt-12">
                <div className="relative w-full h-80 overflow-hidden" style={{ borderRadius: "1rem" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                    alt="Multi-generational family laughing together"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-64 overflow-hidden" style={{ borderRadius: "1rem" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                    alt="Confident professional at sunrise"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="space-y-4">
                <div className="relative w-full h-64 overflow-hidden" style={{ borderRadius: "1rem" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                    alt="Young adults collaborating on financial goals"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-80 overflow-hidden" style={{ borderRadius: "1rem" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&q=80"
                    alt="Building generational wealth"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Text content */}
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <h2
                  className="font-display font-extrabold leading-tight mb-8"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    color: "#141d21",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Vision: A World Without Limits
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "#434655" }}>
                  We envision a future where every family, regardless of their
                  starting point, possesses the tools to build a legacy. Success
                  isn&rsquo;t just about numbers — it&rsquo;s about the{" "}
                  <span className="font-bold" style={{ color: "#004ac6" }}>
                    freedom
                  </span>{" "}
                  to choose how you live your life.
                </p>
                <ul className="space-y-4">
                  {[
                    "Restoring the American Dream for every household.",
                    "Equipping parents to teach their children.",
                    "Building bridges to generational wealth.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span
                        className="material-symbols-outlined flex-shrink-0"
                        style={{
                          color: "#784b00",
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        check_circle
                      </span>
                      <span className="font-medium" style={{ color: "#141d21" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 Forces ── */}
      <section className="py-24 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-5xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2
              className="font-display font-extrabold mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#141d21",
                letterSpacing: "-0.02em",
              }}
            >
              2 Forces Stand in Our Way
            </h2>
            <div
              className="h-1 w-24 mx-auto rounded-full"
              style={{ background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)" }}
            />
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: "school",
              title: "Force 1: Scarcity of Financial Education",
              body: "The traditional education system focuses on everything except the one thing we use every single day: money. This gap leaves families vulnerable to bad advice and predatory practices.",
            },
            {
              icon: "account_balance",
              title: "Force 2: The Financial Industry Itself",
              body: "The industry is built on complexity and high barriers to entry. It often prioritizes profit over people, keeping the best strategies behind closed doors for only the ultra-wealthy.",
            },
          ].map((force, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div
                className="p-10 h-full"
                style={{
                  background: "#ffffff",
                  borderRadius: "1rem",
                  boxShadow: "0 40px 60px -20px rgba(20, 29, 33, 0.06)",
                  border: "1px solid rgba(195, 198, 215, 0.05)",
                }}
              >
                <span
                  className="material-symbols-outlined text-5xl mb-6 block"
                  style={{
                    color: "#004ac6",
                    fontVariationSettings: "'FILL' 1",
                    fontSize: "3rem",
                  }}
                >
                  {force.icon}
                </span>
                <h3
                  className="font-display font-bold text-2xl mb-4"
                  style={{ color: "#141d21" }}
                >
                  {force.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#434655" }}>
                  {force.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Critical Mass ── */}
      <section
        className="py-24 px-4 sm:px-8 relative overflow-hidden"
        style={{ background: "#293236", color: "#ffffff" }}
      >
        {/* Decorative glow */}
        <div
          className="absolute -bottom-64 -left-64 w-[600px] h-[600px] rounded-full"
          style={{ background: "rgba(0, 74, 198, 0.2)", filter: "blur(100px)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2
                className="font-display font-extrabold mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}
              >
                Building Critical Mass
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: "#cbd5e1" }}>
                To win this war on illiteracy, we need an army of educators. We
                are rapidly expanding our network of licensed agents who are
                committed to the mission.
              </p>

              <div className="space-y-8">
                {/* Current agents bar */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-bold text-sm tracking-widest uppercase">
                      Current Licensed Agents
                    </span>
                    <span className="text-2xl font-bold" style={{ color: "#ffddb8" }}>
                      500+
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full overflow-hidden" style={{ background: "#1e2a2f" }}>
                    <div
                      className="h-full rounded-full w-[10%]"
                      style={{ background: "linear-gradient(to right, #ffddb8 0%, #784b00 100%)" }}
                    />
                  </div>
                </div>
                {/* Target bar */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-bold text-sm tracking-widest uppercase">
                      Target Objective
                    </span>
                    <span className="text-2xl font-bold" style={{ color: "#64748b" }}>
                      5,000+
                    </span>
                  </div>
                  <div
                    className="h-4 w-full rounded-full opacity-50"
                    style={{ background: "#1e2a2f" }}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 10X card */}
            <ScrollReveal delay={0.15}>
              <div
                className="p-12 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="font-display font-bold text-6xl mb-2"
                  style={{ color: "#784b00" }}
                >
                  10X
                </div>
                <div
                  className="text-sm font-bold uppercase tracking-[0.2em] mb-6"
                  style={{ color: "#64748b" }}
                >
                  Expansion Goal
                </div>
                <p className="italic" style={{ color: "#cbd5e1" }}>
                  &ldquo;When we reach critical mass, the ripple effect of
                  financial literacy will be unstoppable.&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-32 px-4 sm:px-8 text-center" style={{ background: "#ecf5fb" }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span
              className="font-display font-bold tracking-[0.3em] uppercase text-sm block mb-6"
              style={{ color: "#004ac6" }}
            >
              Our Mission
            </span>
            <blockquote
              className="font-display font-extrabold leading-tight mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#141d21",
                letterSpacing: "-0.02em",
              }}
            >
              &ldquo;To erase financial illiteracy so families can{" "}
              <span style={{ color: "#004ac6" }}>dream again</span> and build
              lasting wealth.&rdquo;
            </blockquote>
            <div className="flex justify-center gap-2 items-center">
              <div className="w-2 h-2 rounded-full" style={{ background: "#784b00" }} />
              <div
                className="w-12 h-2 rounded-full"
                style={{ background: "linear-gradient(135deg, #004ac6 0%, #2563eb 100%)" }}
              />
              <div className="w-2 h-2 rounded-full" style={{ background: "#784b00" }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6 Pillars of Our System ── */}
      <section className="py-24 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <ScrollReveal>
              <h2
                className="font-display font-extrabold mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#141d21",
                  letterSpacing: "-0.02em",
                }}
              >
                The 6 Pillars of Our System
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#434655" }}>
                What makes our financial education different? It&rsquo;s built on
                these non-negotiable criteria.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className="p-8 flex flex-col items-center text-center h-full"
                  style={{
                    background: "#ffffff",
                    borderRadius: "1rem",
                    boxShadow: "0 40px 60px -20px rgba(20, 29, 33, 0.06)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(0, 74, 198, 0.08)" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#004ac6", fontSize: "1.75rem" }}
                    >
                      {pillar.icon}
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-xl mb-3"
                    style={{ color: "#141d21" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#434655" }}>
                    {pillar.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
              {/* Abstract glow */}
              <div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
                style={{ background: "rgba(255,255,255,0.10)", filter: "blur(80px)" }}
              />
              <div className="relative z-10">
                <h2
                  className="font-display font-extrabold text-white mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}
                >
                  Join the Movement Today
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#eeefff" }}>
                  Whether you want to learn for your family or join us as an
                  educator, the horizon is wide open. Let&rsquo;s start the journey.
                </p>
                <Link
                  href="/get-started"
                  className="inline-block bg-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
                  style={{ color: "#004ac6" }}
                >
                  Apply to Join Our Network
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
