import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2, AtSign, Video, Globe } from "lucide-react";
import { FOOTER_NAV, COMPANY_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fhf-navy text-white relative">

      {/* Top blue rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-fhf-sky/60 to-transparent" />

      {/* Main footer body */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            {/* Logo wordmark */}
            <Link href="/" className="group inline-flex mb-6">
              <Image
                src="/images/logo.png"
                alt="Freedom Horizon Financial"
                width={200}
                height={80}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Tagline */}
            <p className="text-editorial text-white/70 text-lg leading-snug mb-6 max-w-xs">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <div className="h-px bg-white/10 mb-6 max-w-[180px]" />

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-sm text-white/50 font-body">
                <MapPin className="w-3.5 h-3.5 text-fhf-sky flex-shrink-0" />
                <span>{COMPANY_INFO.city}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="w-3.5 h-3.5 text-fhf-sky flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white/50 hover:text-white transition-colors font-body">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail className="w-3.5 h-3.5 text-fhf-sky flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/50 hover:text-white transition-colors font-body">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-7">
              {[
                { Icon: Share2, label: "Facebook", href: "#" },
                { Icon: AtSign, label: "Instagram", href: "#" },
                { Icon: Globe, label: "LinkedIn", href: "#" },
                { Icon: Video, label: "YouTube", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-fhf-sky hover:text-fhf-sky hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-sky"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2" />

          {/* Navigation columns */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-eyebrow text-fhf-sky mb-5">Company</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-body leading-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-eyebrow text-fhf-sky mb-5">Connect</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-body leading-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/get-started"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold font-body hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-sky focus-visible:ring-offset-2 focus-visible:ring-offset-fhf-navy overflow-hidden shimmer-on-hover"
                style={{ background: "linear-gradient(135deg, #2e6db4, #004ac6)" }}
              >
                Get Started
                <span className="text-[10px] opacity-60">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-xs text-white/30 font-body">
              © {currentYear} Freedom Horizon Financial. All rights reserved.
            </p>
            <p className="text-xs text-white/20 font-body max-w-2xl leading-relaxed">
              Financial products and services offered through licensed agents. This website is for informational purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
