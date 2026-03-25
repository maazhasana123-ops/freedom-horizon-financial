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
  { icon: "diversity_3", title: "Engagement", body: "Interactive learning that turns complex data into meaningful family conversations." },
  { icon: "explore", title: "Discovery", body: "Revealing the hidden rules of money that the financial industry doesn't want you to know." },
  { icon: "lightbulb", title: "Clarity & Simplicity", body: "Removing jargon and complexity. If a child can't understand it, it's too complicated." },
  { icon: "update", title: "Up-to-Date", body: "Strategies that work in today's dynamic economy, not 40-year-old outdated theories." },
  { icon: "verified_user", title: "Honesty", body: "Transparent guidance focused on your success, not commission-driven product sales." },
  { icon: "ads_click", title: "Strategy", body: "A cohesive battle plan that connects your savings, protection, and growth goals." },
];

export default function MissionPage() {
  return (
    <>
      {/* HERO — deep navy gradient */}
      <section
        className="relative min-h-[88vh] flex items-center px-4 sm:px-8 overflow-hidden pt-24 pb-20"
        style={{ background: "linear-gradient(160deg, #0a1628 0%, #0f2d5c 45%, #1a4a8a 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,74,198,0.18) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-6"
                style={{ background: "rgba(255,255,255,0.1)", color: "#93c5fd", border: "1px solid rgba(147,197,253,0.2)" }}>
                Global Crisis Report
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-extrabold leading-[1.05] mb-6 text-white"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em" }}>
                Financial{" "}
                <span className="italic" style={{ color: "#60a5fa" }}>Illiteracy</span>{" "}
                is the #1 Economic Crisis in the World
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(255,255,255,0.68)" }}>
                More than 4.5 billion people can&rsquo;t answer basic questions about money.{" "}
                <span className="font-bold text-white">Can you?</span>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-started"
                  className="px-8 py-4 rounded-full font-bold text-base text-white hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)", boxShadow: "0 8px 32px rgba(37,99,235,0.4)" }}>
                  Take the Assessment
                </Link>
                <Link href="/system"
                  className="px-8 py-4 rounded-full font-bold text-base"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.18)" }}>
                  Read the Study
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative w-full aspect-square overflow-hidden"
                style={{ borderRadius: "1.25rem", transform: "rotate(2deg)", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
                <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Families building financial freedom" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 max-w-[220px]"
                style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.14)" }}>
                <div className="font-display font-bold text-4xl mb-1 text-white">4.5B+</div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>People globally lack financial education</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR VISION — light surface */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <ScrollReveal direction="left" className="space-y-4 pt-12">
              <div className="relative w-full h-72 overflow-hidden rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" alt="" fill className="object-cover" />
              </div>
              <div className="relative w-full h-52 overflow-hidden rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80" alt="" fill className="object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="left" className="space-y-4">
              <div className="relative w-full h-52 overflow-hidden rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="" fill className="object-cover" />
              </div>
              <div className="relative w-full h-72 overflow-hidden rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&q=80" alt="" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
              style={{ background: "rgba(0,74,198,0.08)", color: "#2563eb" }}>
              Our Vision
            </span>
            <h2 className="font-display font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
              A World Without Financial Limits
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#475569" }}>
              We envision a future where every family possesses the tools to build a legacy.
              Success isn&rsquo;t just about numbers — it&rsquo;s about the{" "}
              <span className="font-bold" style={{ color: "#2563eb" }}>freedom</span>{" "}
              to choose how you live your life.
            </p>
            <ul className="space-y-4">
              {["Restoring the American Dream for every household.", "Equipping parents to teach their children.", "Building bridges to generational wealth."].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined flex-shrink-0 mt-0.5"
                    style={{ color: "#2563eb", fontVariationSettings: "'FILL' 1", fontSize: "1.25rem" }}>check_circle</span>
                  <span className="font-medium" style={{ color: "#1e293b" }}>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* 2 FORCES — dark navy */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#1a2d5a" }}>
        <div className="max-w-5xl mx-auto text-center mb-14">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
              style={{ background: "rgba(255,255,255,0.08)", color: "#93c5fd" }}>
              What We&rsquo;re Up Against
            </span>
            <h2 className="font-display font-extrabold mb-4 text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}>
              2 Forces Stand in Our Way
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Understanding the enemy is the first step to defeating it.
            </p>
          </ScrollReveal>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "school", num: "01", title: "Scarcity of Financial Education", body: "The traditional education system focuses on everything except the one thing we use every single day: money. This gap leaves families vulnerable to bad advice and predatory practices." },
            { icon: "account_balance", num: "02", title: "The Financial Industry Itself", body: "The industry is built on complexity and high barriers to entry. It often prioritizes profit over people, keeping the best strategies behind closed doors for only the ultra-wealthy." },
          ].map((force, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="p-10 h-full"
                style={{ background: "rgba(255,255,255,0.05)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display font-bold text-5xl select-none" style={{ color: "rgba(255,255,255,0.1)" }}>{force.num}</span>
                  <span className="material-symbols-outlined" style={{ color: "#60a5fa", fontVariationSettings: "'FILL' 1", fontSize: "2.25rem" }}>{force.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-4 text-white">Force {force.num}: {force.title}</h3>
                <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>{force.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CRITICAL MASS — darkest */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden" style={{ background: "#060d1a" }}>
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "rgba(37,99,235,0.12)", filter: "blur(80px)" }} />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.05)", color: "#475569" }}>
              The Objective
            </span>
            <h2 className="font-display font-extrabold mb-6 text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}>
              Building Critical Mass
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "#475569" }}>
              To win this war on illiteracy, we need an army of educators. We are rapidly expanding our network of licensed agents committed to the mission.
            </p>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-bold text-sm tracking-widest uppercase text-white">Current Agents</span>
                  <span className="text-2xl font-bold" style={{ color: "#3b82f6" }}>500+</span>
                </div>
                <div className="h-3 w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full w-[10%]" style={{ background: "linear-gradient(to right, #3b82f6, #2563eb)" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-bold text-sm tracking-widest uppercase" style={{ color: "#1e293b" }}>Target</span>
                  <span className="text-2xl font-bold" style={{ color: "#1e293b" }}>5,000+</span>
                </div>
                <div className="h-3 w-full rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="right">
            <div className="p-12 text-center"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="font-display font-bold text-white mb-2" style={{ fontSize: "6rem", lineHeight: 1 }}>10X</div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] mb-6" style={{ color: "#3b82f6" }}>Expansion Goal</div>
              <p className="italic text-lg" style={{ color: "#475569" }}>
                &ldquo;When we reach critical mass, the ripple effect of financial literacy will be unstoppable.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSION STATEMENT — clean white */}
      <section className="py-32 px-4 sm:px-8 text-center" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="font-display font-bold tracking-[0.3em] uppercase text-sm block mb-6" style={{ color: "#2563eb" }}>Our Mission</span>
            <blockquote className="font-display font-extrabold leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "#0f172a", letterSpacing: "-0.025em" }}>
              &ldquo;To erase financial illiteracy so families can{" "}
              <span style={{ color: "#2563eb" }}>dream again</span> and build lasting wealth.&rdquo;
            </blockquote>
            <div className="flex justify-center gap-2 items-center">
              <div className="w-2 h-2 rounded-full" style={{ background: "#2563eb" }} />
              <div className="w-14 h-1 rounded-full" style={{ background: "linear-gradient(135deg, #004ac6, #3b82f6)" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "#2563eb" }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6 PILLARS — subtle off-white */}
      <section className="py-28 px-4 sm:px-8" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <ScrollReveal>
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
                style={{ background: "rgba(0,74,198,0.07)", color: "#2563eb" }}>
                Our Framework
              </span>
              <h2 className="font-display font-extrabold mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
                The 6 Pillars of Our System
              </h2>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "#475569" }}>
                What makes our financial education different? It&rsquo;s built on these non-negotiable criteria.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="p-8 flex flex-col items-center text-center h-full"
                  style={{ background: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2eaf5" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(37,99,235,0.07)" }}>
                    <span className="material-symbols-outlined" style={{ color: "#2563eb", fontSize: "1.6rem" }}>{pillar.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3" style={{ color: "#0f172a" }}>{pillar.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{pillar.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
                  Join the Movement Today
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Whether you want to learn for your family or join us as an educator, the horizon is wide open.
                </p>
                <Link href="/get-started"
                  className="inline-block font-bold text-lg px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #2563eb, #3b82f6)", color: "#ffffff", boxShadow: "0 8px 32px rgba(37,99,235,0.4)" }}>
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
