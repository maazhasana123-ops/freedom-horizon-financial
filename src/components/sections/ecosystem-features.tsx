import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  GraduationCap,
  Monitor,
  Brain,
  Settings2,
  LucideIcon,
} from 'lucide-react'
import { ReactNode } from 'react'
import Image from 'next/image'

/* ── Corner decorator ── */
const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 border-[#004ac6]" />
    <span className="absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 border-[#004ac6]" />
    <span className="absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 border-[#004ac6]" />
    <span className="absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 border-[#004ac6]" />
  </>
)

/* ── Feature card wrapper ── */
const FeatureCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <Card
    className={cn(
      'group relative rounded-none border-[#dbe4ea] bg-white shadow-none overflow-hidden',
      className
    )}
  >
    <CardDecorator />
    {children}
  </Card>
)

/* ── Card heading ── */
const CardHeading = ({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: LucideIcon
  eyebrow: string
  title: string
}) => (
  <div className="p-7 pb-4">
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase font-body" style={{ color: '#004ac6' }}>
      <Icon className="size-3.5" />
      {eyebrow}
    </span>
    <p className="mt-5 font-display font-bold text-2xl leading-snug tracking-tight" style={{ color: '#141d21' }}>
      {title}
    </p>
  </div>
)

/* ── Stat pill ── */
const StatPill = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl px-6 py-4" style={{ background: '#ecf5fb' }}>
    <span className="font-display font-black text-3xl tracking-tighter" style={{ color: '#004ac6' }}>{value}</span>
    <span className="font-body text-xs font-medium mt-1 text-center" style={{ color: '#434655' }}>{label}</span>
  </div>
)

/* ── Main export ── */
export function EcosystemFeatures() {
  return (
    <section className="py-24 md:py-32" style={{ background: '#ecf5fb' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-5"
              style={{ background: '#b5d0fd', color: '#3e5980' }}
            >
              Our Ecosystem
            </span>
            <h2
              className="font-display font-black tracking-tighter leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#141d21' }}
            >
              The Freedom Horizon<br />Success System
            </h2>
          </div>
          <p className="font-body text-lg font-medium max-w-sm leading-relaxed pb-1" style={{ color: '#434655' }}>
            Our comprehensive approach combines modern tools with timeless principles to build your financial foundation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-px lg:grid-cols-2" style={{ background: '#dbe4ea' }}>

          {/* Card 1 — Professional Development + image */}
          <FeatureCard>
            <CardHeader className="p-0 pb-0">
              <CardHeading
                icon={GraduationCap}
                eyebrow="Professional Development"
                title="Continuous training that turns educators into financial leaders."
              />
            </CardHeader>
            <div className="relative mt-2 border-t border-dashed border-[#dbe4ea]">
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(120% 120% at 50% 0%, transparent 40%, #ecf5fb 100%)' }} />
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Professional development training"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </FeatureCard>

          {/* Card 2 — Technology + image */}
          <FeatureCard>
            <CardHeader className="p-0 pb-0">
              <CardHeading
                icon={Monitor}
                eyebrow="Technology & Marketing"
                title="Proprietary platforms that simplify complex financial concepts."
              />
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative mt-2">
                <div className="absolute -inset-0 pointer-events-none z-10" style={{ background: 'radial-gradient(50% 50% at 80% 50%, transparent, #ffffff 100%)' }} />
                <div className="aspect-[4/3] border-t border-dashed border-[#dbe4ea] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
                    alt="Financial technology platform"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          {/* Card 3 — wide impact stats */}
          <FeatureCard className="lg:col-span-2 p-8 lg:p-10">
            <p className="mx-auto mb-10 max-w-lg text-balance text-center font-display font-bold text-2xl lg:text-3xl tracking-tight" style={{ color: '#141d21' }}>
              A proven system backed by decades of real-world impact across North America.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <StatPill value="40+" label="Years Combined Experience" />
              <StatPill value="100K+" label="Families Educated" />
              <StatPill value="23" label="States Reached" />
              <StatPill value="1,000+" label="Active Educators" />
            </div>
          </FeatureCard>

          {/* Card 4 — Personal Dev */}
          <FeatureCard className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#e0e9ef' }}>
                <Brain className="size-5" style={{ color: '#004ac6' }} />
              </div>
              <div>
                <span className="font-body font-bold text-xs uppercase tracking-widest" style={{ color: '#004ac6' }}>Personal Development</span>
                <h3 className="font-display font-bold text-xl mt-1 tracking-tight" style={{ color: '#141d21' }}>The mindset behind lasting wealth.</h3>
              </div>
            </div>
            <p className="font-body leading-relaxed" style={{ color: '#434655' }}>
              We go beyond numbers. Our curriculum focuses on the psychological foundation — habits, beliefs, and disciplines — required for generational financial success.
            </p>
            <div className="mt-6 flex gap-3">
              {['Mindset', 'Discipline', 'Vision'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full font-body text-xs font-semibold" style={{ background: '#e0e9ef', color: '#3e5980' }}>{tag}</span>
              ))}
            </div>
          </FeatureCard>

          {/* Card 5 — System Powered */}
          <FeatureCard className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#e0e9ef' }}>
                <Settings2 className="size-5" style={{ color: '#004ac6' }} />
              </div>
              <div>
                <span className="font-body font-bold text-xs uppercase tracking-widest" style={{ color: '#004ac6' }}>System Powered</span>
                <h3 className="font-display font-bold text-xl mt-1 tracking-tight" style={{ color: '#141d21' }}>A repeatable path to financial freedom.</h3>
              </div>
            </div>
            <p className="font-body leading-relaxed" style={{ color: '#434655' }}>
              Remove guesswork with a proven, scalable system. Whether you&apos;re starting your journey or building a team, our framework works consistently at every level.
            </p>
            <div className="mt-6 flex gap-3">
              {['Scalable', 'Proven', 'Repeatable'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full font-body text-xs font-semibold" style={{ background: '#e0e9ef', color: '#3e5980' }}>{tag}</span>
              ))}
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  )
}
