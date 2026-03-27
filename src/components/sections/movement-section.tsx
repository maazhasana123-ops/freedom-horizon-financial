import Image from "next/image";
import Link from "next/link";

export function MovementSection() {
  return (
    <section className="py-24" style={{ background: "#eaf4f7" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Main card */}
        <div
          className="overflow-hidden rounded-2xl"
          style={{ boxShadow: "0 24px 80px rgba(0,74,198,0.14)" }}
        >

          {/* ── Top row: teal panel + photo ── */}
          <div className="flex flex-col lg:flex-row">

            {/* Left: teal content panel */}
            <div
              className="relative flex flex-col justify-between p-10 lg:p-14 lg:w-1/2 flex-shrink-0"
              style={{ background: "#006b7a", minHeight: "480px" }}
            >
              {/* Decorative circuit dots */}
              <div className="absolute right-6 top-6 bottom-6 w-24 opacity-10 pointer-events-none select-none overflow-hidden">
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 3 }).map((__, col) => (
                    <div
                      key={`${row}-${col}`}
                      className="absolute w-1.5 h-1.5 rounded-full bg-white"
                      style={{ top: row * 56 + 8, left: col * 28 + 4 }}
                    />
                  ))
                )}
              </div>

              <div>
                {/* Eyebrow */}
                <span
                  className="inline-block font-body font-bold text-xs uppercase tracking-widest mb-6 px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}
                >
                  Our Movement
                </span>

                <h2
                  className="font-display font-black text-white leading-tight mb-6"
                  style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.4rem)" }}
                >
                  This is our movement,<br />
                  inspired by our mission.
                </h2>

                <p
                  className="font-body text-base leading-relaxed mb-10 max-w-sm"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  Eradicating financial illiteracy requires a diverse team of leaders united
                  by the vision to reach every community across North America. The catalyst
                  that started the Freedom Horizon movement — helping frustrated employees
                  make the move to successful financial freedom.
                </p>
              </div>

              <Link
                href="/mission"
                className="self-start inline-flex items-center gap-2 font-body font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  padding: "10px 24px",
                  borderRadius: "6px",
                }}
              >
                Meet Our Movement
                <span className="text-xs opacity-60">→</span>
              </Link>
            </div>

            {/* Right: photo — use a fixed-height container with overflow hidden */}
            <div className="lg:w-1/2 flex-shrink-0 overflow-hidden" style={{ minHeight: "400px" }}>
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=85"
                alt="Freedom Horizon Financial leader"
                width={900}
                height={700}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "400px" }}
              />
            </div>
          </div>

          {/* ── Bottom dark strip: quote + stats ── */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ background: "#0d1f2d" }}
          >
            {/* Quote */}
            <div
              className="flex items-start gap-4 px-10 lg:px-14 py-8 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <span
                className="font-display font-black flex-shrink-0"
                style={{ fontSize: "3rem", color: "#2e9bb5", lineHeight: 0.8, marginTop: "4px" }}
              >
                &#8220;&#8220;
              </span>
              <div>
                <p className="font-display font-bold text-white text-lg leading-snug mb-3">
                  Leadership is the capacity to translate vision into reality.
                </p>
                <p className="font-body font-semibold text-sm" style={{ color: "#2e9bb5" }}>
                  Mike Marino
                </p>
                <p className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Freedom Horizon Financial Founder
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              <div
                className="px-8 lg:px-10 py-8"
                style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p
                  className="font-display font-black text-white mb-1"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
                >
                  62%
                </p>
                <div className="w-8 h-0.5 mb-3" style={{ background: "#2e9bb5" }} />
                <p className="font-body text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                  of people want to be the boss of their own business.
                </p>
              </div>
              <div className="px-8 lg:px-10 py-8">
                <p
                  className="font-display font-black text-white mb-1"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
                >
                  49%
                </p>
                <div className="w-8 h-0.5 mb-3" style={{ background: "#2e9bb5" }} />
                <p className="font-body text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                  believe they can make the move to entrepreneurship.
                </p>
                <p className="font-body text-xs mt-2 italic" style={{ color: "rgba(255,255,255,0.2)" }}>
                  SmallBizGenius, 2023
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
