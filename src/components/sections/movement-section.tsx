import Image from "next/image";
import Link from "next/link";

export function MovementSection() {
  return (
    <section className="py-24" style={{ background: "#f4faff" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Main card */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ boxShadow: "0 24px 80px rgba(0,74,198,0.12)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left: teal content panel ── */}
            <div
              className="relative flex flex-col justify-between p-10 lg:p-14 min-h-[480px]"
              style={{ background: "#006b7a" }}
            >
              {/* Decorative maze/circuit pattern */}
              <div
                className="absolute right-0 top-0 bottom-0 w-32 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='400' viewBox='0 0 120 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='20' width='40' height='40' rx='2' stroke='white' stroke-width='1.5'/%3E%3Crect x='70' y='60' width='40' height='40' rx='2' stroke='white' stroke-width='1.5'/%3E%3Crect x='10' y='120' width='40' height='40' rx='2' stroke='white' stroke-width='1.5'/%3E%3Crect x='70' y='160' width='40' height='40' rx='2' stroke='white' stroke-width='1.5'/%3E%3Crect x='10' y='220' width='40' height='40' rx='2' stroke='white' stroke-width='1.5'/%3E%3Crect x='70' y='260' width='40' height='40' rx='2' stroke='white' stroke-width='1.5'/%3E%3Crect x='10' y='320' width='40' height='40' rx='2' stroke='white' stroke-width='1.5'/%3E%3Cline x1='50' y1='40' x2='70' y2='40' stroke='white' stroke-width='1.5'/%3E%3Cline x1='50' y1='140' x2='70' y2='160' stroke='white' stroke-width='1.5'/%3E%3Cline x1='50' y1='240' x2='70' y2='260' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat-y",
                }}
              />

              <div>
                {/* Eyebrow label */}
                <span
                  className="inline-block font-body font-bold text-xs uppercase tracking-widest mb-6 px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}
                >
                  Our Movement
                </span>

                <h2
                  className="font-display font-black text-white leading-tight mb-6"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  This is our movement,<br />
                  inspired by our mission.
                </h2>

                <p
                  className="font-body text-base leading-relaxed mb-8 max-w-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Eradicating financial illiteracy requires a diverse team of leaders united
                  by the vision to reach every community across North America. The catalyst
                  that started the Freedom Horizon movement — helping frustrated employees
                  make the move to successful financial freedom.
                </p>
              </div>

              <div>
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-all duration-200 hover:gap-3"
                  style={{
                    color: "white",
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    padding: "10px 24px",
                    borderRadius: "6px",
                  }}
                >
                  Meet Our Movement
                  <span className="text-xs opacity-70">→</span>
                </Link>
              </div>
            </div>

            {/* ── Right: photo ── */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=85"
                alt="Freedom Horizon Financial leader"
                fill
                className="object-cover object-top"
              />
              {/* Subtle left-edge fade into teal */}
              <div
                className="absolute inset-y-0 left-0 w-16 pointer-events-none hidden lg:block"
                style={{ background: "linear-gradient(to right, #006b7a, transparent)" }}
              />
            </div>
          </div>

          {/* ── Bottom dark strip: quote + stats ── */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ background: "rgba(10,22,40,0.92)", backdropFilter: "blur(4px)" }}
          >
            {/* Quote */}
            <div className="flex items-start gap-4 px-10 lg:px-14 py-8 border-b lg:border-b-0 border-white/10 lg:border-r">
              <span
                className="font-display font-black flex-shrink-0 leading-none mt-1"
                style={{ fontSize: "2.5rem", color: "#2e9bb5", lineHeight: 1 }}
              >
                &ldquo;&ldquo;
              </span>
              <div>
                <p className="font-display font-bold text-white text-lg leading-snug mb-3">
                  Leadership is the capacity to translate vision into reality.
                </p>
                <p className="font-body font-semibold text-sm" style={{ color: "#2e9bb5" }}>
                  Mike Marino
                </p>
                <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Freedom Horizon Financial Founder
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="px-8 lg:px-10 py-8">
                <p
                  className="font-display font-black text-white mb-2"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
                >
                  62%
                </p>
                <div className="w-8 h-0.5 mb-3" style={{ background: "#2e9bb5" }} />
                <p className="font-body text-sm leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                  of people want to be the boss of their own business.
                </p>
              </div>
              <div className="px-8 lg:px-10 py-8">
                <p
                  className="font-display font-black text-white mb-2"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
                >
                  49%
                </p>
                <div className="w-8 h-0.5 mb-3" style={{ background: "#2e9bb5" }} />
                <p className="font-body text-sm leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                  believe they can make the move to entrepreneurship.
                </p>
                <p className="font-body text-xs mt-2 italic" style={{ color: "rgba(255,255,255,0.25)" }}>
                  &ldquo;39 Entrepreneur Statistics You Need to Know in 2023,&rdquo; SmallBizGenius, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
