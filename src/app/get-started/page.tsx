import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { GetStartedForm } from "@/components/forms/get-started-form";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Take the first step toward financial freedom. Connect with Freedom Horizon Financial today.",
};

export default function GetStartedPage() {
  return (
    <>
      <HeroSection
        badge="Your Journey Begins Here"
        headline="Take the First Step Toward Financial Freedom"
        subheadline="Whether you want to improve your own financial literacy, explore a part-time opportunity, or build a full-time career — we're here to help you get started."
        ctaPrimary={{ label: "Fill Out the Form Below", href: "#form" }}
        imageSrc="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1920&q=80"
        imageAlt="Freedom Horizon Financial — Get Started"
        minHeight="min-h-[60vh]"
      />

      <section id="form" className="py-20 lg:py-28 bg-fhf-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
                <div className="mb-8 text-center">
                  <h2 className="font-display font-bold text-fhf-primary-dark text-2xl lg:text-3xl mb-2">
                    Connect With Our Team
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Fill out the form below and a Freedom Horizon Financial team member will reach out within 24 hours.
                  </p>
                </div>
                <GetStartedForm />
              </div>
            </ScrollReveal>

            {/* Trust signals */}
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
                {[
                  { number: "100K+", label: "Lives Changed" },
                  { number: "1,000+", label: "Educators" },
                  { number: "No Spam", label: "Ever" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="font-display font-bold text-fhf-blue text-xl">{item.number}</span>
                    <span className="text-gray-500 text-xs mt-0.5">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
