"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Search,
  Users,
  Brain,
  Megaphone,
  UserCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    number: "01",
    title: "Executive Search",
    href: "/leistungen/executive-search",
    description:
      "Wir identifizieren und gewinnen Führungspersönlichkeiten auf C-Level und Senior-Management — diskret, präzise und nachhaltig.",
    tags: ["C-Level", "Management", "Führung"],
  },
  {
    icon: Users,
    number: "02",
    title: "Direct Search",
    href: "/leistungen/direct-search",
    description:
      "Gezielte Direktansprache qualifizierter Fachkräfte über unser starkes Netzwerk — für Positionen die nicht öffentlich ausgeschrieben werden.",
    tags: ["Netzwerk", "Direktansprache", "Fachkräfte"],
  },
  {
    icon: Brain,
    number: "03",
    title: "HR Consulting",
    href: "/leistungen/hr-consulting",
    description:
      "Strategische Beratung für Ihre HR-Prozesse: von der Organisationsentwicklung bis zur Optimierung Ihrer Recruiting-Strategie.",
    tags: ["Strategie", "Prozesse", "Beratung"],
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Employer Branding",
    href: "/leistungen/employer-branding",
    description:
      "Wir positionieren Ihr Unternehmen als attraktiven Arbeitgeber — für mehr Sichtbarkeit, bessere Kandidaten und langfristige Bindung.",
    tags: ["Positionierung", "Sichtbarkeit", "Kultur"],
  },
  {
    icon: UserCheck,
    number: "05",
    title: "Candidate Management",
    href: "/leistungen/candidate-management",
    description:
      "Ganzheitliche Betreuung der Kandidaten vom ersten Kontakt bis zur erfolgreichen Einstellung — transparent und professionell.",
    tags: ["Betreuung", "Onboarding", "Matching"],
  },
  {
    icon: Briefcase,
    number: "06",
    title: "Interim Management",
    href: "/leistungen/interim-management",
    description:
      "Kurzfristige Besetzung von Schlüsselpositionen mit erfahrenen Interim Managern — wenn schnelles Handeln entscheidend ist.",
    tags: ["Interim", "Flexibilität", "Soforteinsatz"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="leistungen"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top fade from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />

      {/* Glow accent right */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#00AEEF]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#00AEEF]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
                Was wir tun
              </span>
            </div>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Unsere
              <br />
              <span className="text-gradient">Leistungen</span>
            </h2>
          </div>
          <p className="text-[#8BA3B0] text-base leading-relaxed max-w-[400px] lg:text-right">
            Von der ersten Kontaktaufnahme bis zur erfolgreichen Besetzung — wir
            begleiten Sie durch den gesamten Recruiting-Prozess.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1A1E26]/60">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={service.href}
                className="group relative bg-[#0A0A0A] p-8 lg:p-10 flex flex-col gap-5 hover:bg-[#111318] transition-colors duration-300 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#00AEEF] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* Number */}
                <span className="font-mono text-xs tracking-[0.3em] text-[#00AEEF]/40 group-hover:text-[#00AEEF]/70 transition-colors duration-300">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1E26] group-hover:border-[#00AEEF]/30 rounded-sm transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#8BA3B0] group-hover:text-[#00AEEF] transition-colors duration-300" />
                  <div className="absolute inset-0 bg-[#00AEEF]/0 group-hover:bg-[#00AEEF]/5 rounded-sm transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold uppercase text-xl lg:text-2xl text-white tracking-tight group-hover:text-[#00AEEF] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#8BA3B0] text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 border border-[#1A1E26] group-hover:border-[#00AEEF]/20 text-[#8BA3B0]/70 group-hover:text-[#00AEEF]/70 rounded-sm transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#00AEEF]/50 group-hover:text-[#00AEEF] transition-all duration-300 uppercase">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-[#1A1E26]">
          <div className="flex flex-col gap-1.5">
            <p className="text-[#8BA3B0] text-sm">Nicht das Richtige dabei?</p>
            <p className="text-white text-sm">
              Wir entwickeln individuelle Lösungen.
            </p>
          </div>
          <Link
            href="/leistungen/executive-search"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#00AEEF] hover:text-white transition-colors duration-200">
            Alle Leistungen ansehen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
