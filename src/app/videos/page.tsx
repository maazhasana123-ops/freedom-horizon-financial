import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch the Freedom Horizon Financial story and educational videos about financial literacy, wealth building, and business opportunity.",
};

const featuredVideos = [
  {
    title: "The Freedom Horizon Story",
    desc: "A look into how we founded this mission to empower global families.",
    duration: "12:45",
    thumb: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
  },
  {
    title: "The Challenge of Dreams",
    desc: "Why dreaming big is the first step toward true economic stability.",
    duration: "08:20",
    thumb: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
  },
  {
    title: "Your Path to Freedom",
    desc: "A step-by-step roadmap for the modern family unit.",
    duration: "15:10",
    thumb: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
];

const educationalVideos = [
  {
    title: "What Is Life Insurance?",
    label: "Strategy Series",
    duration: "4:32",
    thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "The Rule of 72",
    label: "Wealth Basics",
    duration: "6:15",
    thumb: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80",
  },
  {
    title: "Legacy Planning",
    label: "Family Protection",
    duration: "9:45",
    thumb: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=600&q=80",
  },
  {
    title: "The Freedom System",
    label: "Our Mission",
    duration: "12:00",
    thumb: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
  },
];

export default function VideosPage() {
  return (
    <>
      {/* ── Hero + Featured Video ── */}
      <section className="relative pt-32 pb-24 overflow-hidden px-4 sm:px-8">
        {/* Background radial glow */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(181, 208, 253, 0.3), transparent 50%)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left text */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <span
                  className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-8"
                  style={{ background: "#b5d0fd", color: "#3e5980" }}
                >
                  Featured Premiere
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1
                  className="font-display font-black leading-[0.9] mb-8 tracking-tighter"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    color: "#141d21",
                  }}
                >
                  The Freedom Horizon{" "}
                  <span style={{ color: "#784b00" }}>Story</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p
                  className="text-xl font-medium leading-relaxed mb-12 max-w-lg"
                  style={{ color: "#434655", opacity: 0.9 }}
                >
                  Our story video shares the journey of Freedom Horizon
                  Financial and our mission to erase financial illiteracy so
                  families can dream again.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button
                    className="w-full sm:w-auto px-8 py-5 rounded-full font-bold text-lg text-white shadow-2xl transition-all flex items-center justify-center gap-3"
                    style={{
                      background: "#004ac6",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_circle
                    </span>
                    Watch Story
                  </button>
                  <button
                    className="w-full sm:w-auto px-8 py-5 rounded-full font-bold text-lg transition-all"
                    style={{
                      border: "2px solid #c3c6d7",
                      color: "#141d21",
                    }}
                  >
                    Full Playlist
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — featured video player */}
            <div className="lg:col-span-7 relative group">
              <ScrollReveal delay={0.15}>
                <div
                  className="aspect-video w-full overflow-hidden relative"
                  style={{
                    borderRadius: "1rem",
                    boxShadow: "0 32px 64px -16px rgba(0,0,0,0.20)",
                    border: "8px solid #ffffff",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                    alt="The Freedom Horizon Story — featured video"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(20, 29, 33, 0.05)" }}>
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer pulse-gold"
                      style={{
                        background: "rgba(255,255,255,0.22)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-white"
                        style={{ fontSize: "3rem", fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>

                {/* Horizon glow behind video */}
                <div
                  className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-lg blur-3xl"
                  style={{ background: "rgba(37, 99, 235, 0.1)" }}
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Insights ── */}
      <section className="py-24 px-4 sm:px-8" style={{ background: "#ecf5fb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <ScrollReveal>
                <span
                  className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6"
                  style={{ background: "#ffddb8", color: "#2a1700" }}
                >
                  Expert Perspectives
                </span>
                <h2
                  className="font-display font-black tracking-tighter leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#141d21" }}
                >
                  Featured Insights
                </h2>
                <p className="text-lg font-medium mt-4" style={{ color: "#434655" }}>
                  Deep dives into the mechanics of financial freedom.
                </p>
              </ScrollReveal>
            </div>

            {/* Scroll controls (decorative) */}
            <div className="flex gap-4 mb-2">
              {["chevron_left", "chevron_right"].map((icon) => (
                <button
                  key={icon}
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "#dbe4ea", color: "#141d21" }}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredVideos.map((video, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div
                    className="relative mb-8 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500"
                    style={{ aspectRatio: "16/10", borderRadius: "1rem" }}
                  >
                    <Image
                      src={video.thumb}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 transition-opacity"
                      style={{
                        background: "linear-gradient(to top, rgba(20,29,33,0.6), transparent)",
                        opacity: 0.6,
                      }}
                    />
                    {/* Duration badge */}
                    <div
                      className="absolute bottom-4 right-4 px-3 py-1 text-xs font-bold text-white"
                      style={{
                        background: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "0.375rem",
                      }}
                    >
                      {video.duration}
                    </div>
                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(255,255,255,0.3)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.4)",
                        }}
                      >
                        <span
                          className="material-symbols-outlined text-white"
                          style={{ fontSize: "1.75rem", fontVariationSettings: "'FILL' 1" }}
                        >
                          play_arrow
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="font-display font-black text-2xl mb-3 tracking-tight leading-none transition-colors"
                    style={{ color: "#141d21" }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: "#434655", opacity: 0.8 }}
                  >
                    {video.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Educational Library ── */}
      <section className="py-32 px-4 sm:px-8" style={{ background: "#f4faff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <span
                className="font-display font-bold tracking-widest uppercase text-xs mb-6 block"
                style={{ color: "#004ac6" }}
              >
                Resource Hub
              </span>
              <h2
                className="font-display font-black tracking-tighter leading-none mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#141d21" }}
              >
                Educational Library
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {["All Topics", "Life Insurance", "Compound Interest", "Budgeting"].map(
                  (topic, i) => (
                    <button
                      key={topic}
                      className="px-8 py-3 rounded-full font-bold text-sm transition-all"
                      style={
                        i === 0
                          ? {
                              background: "#004ac6",
                              color: "#ffffff",
                              boxShadow: "0 4px 16px rgba(0, 74, 198, 0.2)",
                            }
                          : {
                              background: "#ecf5fb",
                              color: "#434655",
                            }
                      }
                    >
                      {topic}
                    </button>
                  )
                )}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalVideos.map((video, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="p-6 flex flex-col group card-hover-glow cursor-pointer overflow-hidden"
                  style={{ background: "#ffffff", borderRadius: "1rem" }}
                >
                  <div
                    className="relative mb-6 overflow-hidden"
                    style={{ aspectRatio: "16/9", borderRadius: "0.75rem", background: "#e0e9ef" }}
                  >
                    <Image
                      src={video.thumb}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "rgba(20, 29, 33, 0.35)" }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.4)" }}>
                        <span
                          className="material-symbols-outlined text-white"
                          style={{ fontSize: "1.5rem", fontVariationSettings: "'FILL' 1" }}
                        >
                          play_arrow
                        </span>
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 text-xs font-bold text-white rounded"
                      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}>
                      {video.duration}
                    </div>
                  </div>
                  <h4
                    className="font-display font-bold text-lg transition-colors duration-200 group-hover:text-[#004ac6]"
                    style={{ color: "#141d21" }}
                  >
                    {video.title}
                  </h4>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mt-3"
                    style={{ color: "#784b00" }}
                  >
                    {video.label} • {video.duration}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Signature CTA Banner */}
          <ScrollReveal>
            <div
              className="mt-32 relative p-12 text-center text-white overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(to bottom, #1e40af 0%, #3b82f6 60%, #f59e0b 100%)",
                borderRadius: "1rem",
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full" style={{ background: "radial-gradient(circle at center, white 0%, transparent 70%)" }} />
              </div>

              {/* Horizon line motif */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 blur-sm opacity-50"
                style={{ background: "linear-gradient(to right, transparent, #ffddb8, transparent)" }}
              />

              <div className="relative z-10">
                <h3
                  className="font-display font-black mb-6 tracking-tighter"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  Want more personalized guidance?
                </h3>
                <p className="text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: "#dbeafe", opacity: 0.9 }}>
                  Our educational videos are just the start. Let&rsquo;s build a
                  custom roadmap that fits your specific family goals.
                </p>
                <Link
                  href="/get-started"
                  className="relative inline-block bg-white font-bold text-lg px-12 py-5 rounded-full shadow-lg hover:scale-105 transition-all overflow-hidden shimmer-on-hover"
                  style={{ color: "#004ac6", boxShadow: "0 8px 32px rgba(30, 64, 175, 0.4)" }}
                >
                  Book a Video Consultation
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
