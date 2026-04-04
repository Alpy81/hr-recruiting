import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, SITE_TAGLINE } from "@/lib/constants";

const FOOTER_SERVICES = [
  { label: "Executive Search", href: "/leistungen/executive-search" },
  { label: "Direct Search", href: "/leistungen/direct-search" },
  { label: "Candidate Management", href: "/leistungen/candidate-management" },
  { label: "Employer Branding", href: "/leistungen/employer-branding" },
  { label: "HR Consulting", href: "/leistungen/hr-consulting" },
];

const FOOTER_LEGAL = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Cookie-Richtlinie", href: "/cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#00AEEF]/10 overflow-hidden">
      {/* ── Background glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00AEEF]/4 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Top divider line ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />

      {/* ── Main Footer Grid ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 lg:gap-6 items-start">
          {/* ── Column 1: Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="TalentForge HR"
                width={180}
                height={44}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#8BA3B0] text-sm leading-relaxed mb-5 max-w-[240px]">
              Wir verbinden außergewöhnliche Talente mit führenden Unternehmen.
              Präzise. Vertraulich. Nachhaltig.
            </p>
            {/* Xing + LinkedIn */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 border border-[#1A1E26] rounded-sm text-[#8BA3B0] hover:text-[#00AEEF] hover:border-[#00AEEF]/30 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://xing.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Xing"
                className="p-2.5 border border-[#1A1E26] rounded-sm text-[#8BA3B0] hover:text-[#00AEEF] hover:border-[#00AEEF]/30 transition-all duration-200">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── Column 2: Navigation ── */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.25em] text-[#00AEEF] uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8BA3B0] hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-[#00AEEF] transition-all duration-200 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.25em] text-[#00AEEF] uppercase mb-5">
              Leistungen
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-[#8BA3B0] hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-[#00AEEF] transition-all duration-200 overflow-hidden" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ── */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.25em] text-[#00AEEF] uppercase mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 text-sm text-[#8BA3B0] hover:text-white transition-colors duration-200 group">
                  <Mail className="w-4 h-4 mt-0.5 text-[#00AEEF] flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-[#8BA3B0] hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 mt-0.5 text-[#00AEEF] flex-shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-[#8BA3B0]">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#00AEEF] flex-shrink-0" />
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-[#1A1E26] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8BA3B0] order-2 sm:order-1">
            © {year} TalentForge HR. Alle Rechte vorbehalten. —{" "}
            <span className="text-[#00AEEF]/60">{SITE_TAGLINE}</span>
          </p>
          <ul className="flex items-center gap-4 order-1 sm:order-2">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs text-[#8BA3B0] hover:text-[#00AEEF] transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
