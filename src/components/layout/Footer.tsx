import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, SITE_TAGLINE } from "@/lib/constants";

const FOOTER_SERVICES = [
  { label: "Executive Search", href: "/leistungen" },
  { label: "Direct Search", href: "/leistungen" },
  { label: "Candidate Management", href: "/kandidaten" },
  { label: "Employer Branding", href: "/arbeitgeber" },
  { label: "HR Consulting", href: "/leistungen" },
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00AEEF]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />

      {/* CTA Banner */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
        <div className="relative rounded-sm border border-[#00AEEF]/15 bg-gradient-to-br from-[#111318] to-[#0A0A0A] p-8 lg:p-12 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase mb-2">
                Bereit für den nächsten Schritt?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-none">
                Lass uns gemeinsam
                <br />
                <span className="text-gradient">Karrieren bauen.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/kontakt"
                className="group relative overflow-hidden px-6 py-3.5 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_30px_rgba(0,174,239,0.5)] transition-all duration-300 text-center">
                <span className="relative z-10">Jetzt Kontakt aufnehmen</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
              <Link
                href="/jobs"
                className="px-6 py-3.5 border border-[#00AEEF]/30 text-[#00AEEF] text-sm font-medium rounded-sm hover:bg-[#00AEEF]/8 transition-all duration-200 text-center">
                Jobs entdecken
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="TalentForge HR"
                width={180}
                height={44}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-[#8BA3B0] text-sm leading-relaxed mb-5 max-w-[240px]">
              Wir verbinden außergewöhnliche Talente mit führenden Unternehmen.
              Präzise. Vertraulich. Nachhaltig.
            </p>
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

          <div>
            <h3 className="text-xs font-mono tracking-[0.25em] text-[#00AEEF] uppercase mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 text-sm text-[#8BA3B0] hover:text-white transition-colors duration-200">
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
