import { MapPin, Phone, Mail, Share2, AtSign, Globe, Video } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { COMPANY_INFO } from "@/lib/constants";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Contact info */}
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="rule-gold" />
                <span className="text-eyebrow text-fhf-blue">Get in Touch</span>
              </div>

              <h2
                className="font-display font-bold text-fhf-navy leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
              >
                We&apos;d Love to Hear From You
              </h2>
              <p className="font-body text-fhf-ink-mid/80 leading-relaxed mb-10">
                Whether you&apos;re curious about our financial education programs, interested in joining our team, or want to schedule a conversation — we&apos;re here for you.
              </p>

              <div className="flex flex-col gap-0 border-t border-fhf-rule">
                {[
                  { Icon: MapPin, label: "Location", value: COMPANY_INFO.city, href: null },
                  { Icon: Phone, label: "Phone", value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
                  { Icon: Mail, label: "Email", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-5 py-5 border-b border-fhf-rule">
                    <Icon className="w-4 h-4 text-fhf-blue flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-eyebrow text-fhf-ink-light mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="font-body text-fhf-navy text-sm hover:text-fhf-blue transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="font-body text-fhf-navy text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-7">
                <p className="text-eyebrow text-fhf-ink-light mb-4">Follow Us</p>
                <div className="flex items-center gap-2">
                  {[
                    { Icon: Share2, label: "Facebook" },
                    { Icon: AtSign, label: "Instagram" },
                    { Icon: Globe, label: "LinkedIn" },
                    { Icon: Video, label: "YouTube" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-9 h-9 border border-fhf-rule flex items-center justify-center text-fhf-ink-light hover:border-fhf-blue hover:text-fhf-blue transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-blue"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right">
            <div className="border border-fhf-rule p-8 lg:p-10 bg-fhf-off-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="rule-gold" />
                <h3 className="font-display font-semibold text-fhf-navy text-xl">
                  Send Us a Message
                </h3>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
