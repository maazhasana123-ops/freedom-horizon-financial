import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SplitSection } from "@/components/sections/split-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ImpactNumbers } from "@/components/sections/impact-numbers";
import { CtaBanner } from "@/components/sections/cta-banner";
import { homepageContent as c } from "@/lib/content/homepage";

export const metadata: Metadata = {
  title: "Freedom Horizon Financial — Financial Education & Services",
  description:
    "Freedom Horizon Financial is on a mission to erase financial illiteracy so families can dream again and build lasting wealth.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge={c.hero.badge}
        headline={c.hero.headline}
        subheadline={c.hero.subheadline}
        ctaPrimary={c.hero.ctaPrimary}
        ctaSecondary={c.hero.ctaSecondary}
        imageSrc={c.hero.imageSrc}
        imageAlt={c.hero.imageAlt}
        minHeight="min-h-[92vh]"
      />

      <StatsSection stats={c.stats} />

      <SplitSection
        badge={c.education.badge}
        headline={c.education.headline}
        body={c.education.body}
        bullets={c.education.bullets}
        ctaPrimary={c.education.cta}
        imageSrc={c.education.imageSrc}
        imageAlt={c.education.imageAlt}
        imageRight={false}
        bgAlt
      />

      <SplitSection
        badge={c.opportunity.badge}
        headline={c.opportunity.headline}
        body={c.opportunity.body}
        ctaPrimary={c.opportunity.ctaPrimary}
        ctaSecondary={c.opportunity.ctaSecondary}
        imageSrc={c.opportunity.imageSrc}
        imageAlt={c.opportunity.imageAlt}
        imageRight
        bgAlt={false}
      />

      <FeatureGrid
        badge="Why Join FHF"
        headline="Everything You Need to Succeed"
        subheadline="Our platform gives you world-class tools, training, and support from day one."
        features={c.features}
        bgAlt
      />

      <ImpactNumbers
        badge="Our Impact"
        headline="Real People. Real Results."
        subheadline="Our growing network of educators is changing lives across North America."
        stats={c.impact}
      />

      <CtaBanner
        headline="Ready to Change Your Financial Story?"
        subheadline="Join thousands of families and educators building a better future through financial literacy."
        ctaPrimary={{ label: "Get Started Today", href: "/get-started" }}
        ctaSecondary={{ label: "Learn Our Mission", href: "/mission" }}
      />
    </>
  );
}
