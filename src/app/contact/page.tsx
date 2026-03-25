import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with the Freedom Horizon Financial team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        badge="We're Here For You"
        headline="Connect With Freedom Horizon Financial"
        subheadline="Have questions? Want to learn more about our programs or business opportunity? Reach out — our team is ready to help."
        ctaPrimary={{ label: "Send a Message", href: "#contact" }}
        imageSrc="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=80"
        imageAlt="Contact Freedom Horizon Financial"
        minHeight="min-h-[55vh]"
      />

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
