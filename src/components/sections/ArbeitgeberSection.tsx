"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Target,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Target,
    title: "Präzises Matching",
    description:
      "Kein Bewerbungsrauschen — wir präsentieren nur Kandidaten die wirklich passen. Fachlich, kulturell und persönlich.",
  },
  {
    icon: Shield,
    title: "Volle Diskretion",
    description:
      "Sensible Besetzungen erfordern Vertraulichkeit. Wir handeln diskret — gegenüber Kandidaten und dem Markt.",
  },
  {
    icon: Zap,
    title: "Schnelle Besetzung",
    description:
      "Durch unser aktives Netzwerk verkürzen wir Time-to-Hire signifikant — ohne Abstriche bei der Qualität.",
  },
  {
    icon: TrendingUp,
    title: "Nachhaltige Ergebnisse",
    description:
      "Unsere Vermittlungen halten. Wir begleiten den Onboarding-Prozess und stehen langfristig als Partner bereit.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "TalentForge HR hat uns innerhalb von drei Wochen einen CFO präsentiert, der perfekt zu unserer Wachstumsstrategie passt.",
    author: "Marcus Weber",
    role: "CEO, FinTech GmbH",
    rating: 5,
  },
  {
    quote:
      "Die Qualität der Kandidaten war außergewöhnlich. Kein einziger Fehlgriff — das ist in unserer Branche selten.",
    author: "Sandra Hoffmann",
    role: "CHRO, Industriegruppe AG",
    rating: 5,
  },
  {
    quote:
      "Professionell, diskret und treffsicher. Wir arbeiten seit Jahren ausschließlich mit TalentForge HR.",
    author: "Thomas Richter",
    role: "Managing Director, PE Fund",
    rating: 5,
  },
];

const INDUSTRIES = [
  "Finanzdienstleistung",
  "Technology",
  "Industrie & Produktion",
  "Healthcare",
  "E-Commerce",
  "Consulting",
  "Real Estate",
  "Private Equity",
];

export default function ArbeitgeberSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section
      id="arbeitgeber"
      className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#00AEEF]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
                Für Unternehmen
              </span>
            </div>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Ihr Partner für
              <br />
              <span className="text-gradient">Top-Talente</span>
            </h2>
          </div>
          <p className="text-[#8BA3B0] text-base leading-relaxed max-w-[400px] lg:text-right">
            Von DAX-Konzernen bis zum ambitionierten Mittelstand — wir finden
            die Führungskräfte die Ihr Unternehmen voranbringen.
          </p>
        </div>

        {/* ── Benefits Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1E26]/40 mb-20">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group bg-[#0A0A0A] hover:bg-[#111318] p-8 flex flex-col gap-4 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-[#00AEEF] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="w-10 h-10 border border-[#1A1E26] group-hover:border-[#00AEEF]/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-4 h-4 text-[#8BA3B0] group-hover:text-[#00AEEF] transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold uppercase text-base text-white tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#8BA3B0] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Testimonials + Industries ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Testimonials */}
          <div>
            <p className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase mb-8">
              Was unsere Kunden sagen
            </p>

            {/* Active testimonial */}
            <div className="relative border border-[#1A1E26] rounded-sm p-8 bg-[#111318] min-h-[200px]">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 font-display text-7xl text-[#00AEEF]/8 leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({
                  length: TESTIMONIALS[activeTestimonial].rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#00AEEF] text-[#00AEEF]"
                  />
                ))}
              </div>

              <p className="text-white text-base leading-relaxed mb-6 relative z-10">
                „{TESTIMONIALS[activeTestimonial].quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#00AEEF]">
                    {TESTIMONIALS[activeTestimonial].author[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {TESTIMONIALS[activeTestimonial].author}
                  </p>
                  <p className="text-xs text-[#8BA3B0]">
                    {TESTIMONIALS[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-mono text-[#8BA3B0]/50 tracking-widest">
                {activeTestimonial + 1} / {TESTIMONIALS.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveTestimonial(
                      (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                    )
                  }
                  className="w-9 h-9 flex items-center justify-center border border-[#1A1E26] hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/8 text-[#8BA3B0] hover:text-[#00AEEF] rounded-sm transition-all duration-200">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length)
                  }
                  className="w-9 h-9 flex items-center justify-center border border-[#1A1E26] hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/8 text-[#8BA3B0] hover:text-[#00AEEF] rounded-sm transition-all duration-200">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <p className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase mb-8">
              Unsere Branchen
            </p>
            <div className="grid grid-cols-2 gap-2">
              {INDUSTRIES.map((industry, i) => (
                <div
                  key={industry}
                  className="group flex items-center gap-3 p-4 border border-[#1A1E26] rounded-sm hover:border-[#00AEEF]/25 hover:bg-[#00AEEF]/3 transition-all duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF]/50 group-hover:text-[#00AEEF] transition-colors duration-300 flex-shrink-0" />
                  <span className="text-sm text-[#8BA3B0] group-hover:text-white transition-colors duration-300">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="relative rounded-sm border border-[#00AEEF]/15 bg-gradient-to-r from-[#111318] via-[#0F1318] to-[#111318] p-8 lg:p-12 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-80 h-full opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase mb-2">
                Jetzt starten
              </p>
              <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Bereit die richtige
                <br />
                Führungskraft zu finden?
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/termin"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_30px_rgba(0,174,239,0.45)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Gespräch vereinbaren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
              <Link
                href="/#leistungen"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#00AEEF]/30 text-[#00AEEF] text-sm font-medium rounded-sm hover:bg-[#00AEEF]/8 transition-all duration-200">
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
