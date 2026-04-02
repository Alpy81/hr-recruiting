"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  UserCheck,
  Lock,
  Handshake,
  BarChart3,
} from "lucide-react";

const PROMISES = [
  {
    icon: UserCheck,
    title: "Persönliche Betreuung",
    description:
      "Sie sind keine Bewerbungsnummer. Wir nehmen uns Zeit, Sie wirklich kennenzulernen — Ihre Stärken, Ziele und Wünsche.",
  },
  {
    icon: Lock,
    title: "100% Vertraulich",
    description:
      "Ihr Profil wird niemals ohne Ihre ausdrückliche Zustimmung weitergegeben. Diskretion ist für uns selbstverständlich.",
  },
  {
    icon: Handshake,
    title: "Auf Augenhöhe",
    description:
      "Wir vertreten Ihre Interessen — nicht nur die des Unternehmens. Faire Konditionen und ehrliches Feedback inklusive.",
  },
  {
    icon: BarChart3,
    title: "Karriere mit Perspektive",
    description:
      "Wir vermitteln keine Jobs — wir bauen Karrieren. Jede Empfehlung orientiert sich an Ihrer langfristigen Entwicklung.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Profil einreichen",
    text: "Senden Sie uns Ihren Lebenslauf — vertraulich und unverbindlich.",
  },
  {
    number: "02",
    title: "Persönliches Gespräch",
    text: "Wir lernen Sie kennen und verstehen Ihre Karriereziele.",
  },
  {
    number: "03",
    title: "Passende Positionen",
    text: "Wir öffnen Türen zu Positionen die nicht öffentlich ausgeschrieben sind.",
  },
  {
    number: "04",
    title: "Erfolgreicher Start",
    text: "Wir begleiten Sie bis zur Vertragsunterschrift und darüber hinaus.",
  },
];

export default function KandidatenSection() {
  return (
    <section
      id="kandidaten"
      className="relative bg-[#111318] py-24 lg:py-32 overflow-hidden">
      {/* Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#00AEEF]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
                Für Kandidaten
              </span>
            </div>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Ihre Karriere.
              <br />
              <span className="text-gradient">Unser Einsatz.</span>
            </h2>
          </div>
          <p className="text-[#8BA3B0] text-base leading-relaxed max-w-[400px] lg:text-right">
            Wir begleiten Fach- und Führungskräfte auf dem Weg zu ihrer nächsten
            großen Karrierechance — diskret und persönlich.
          </p>
        </div>

        {/* ── Split Layout: Image + Steps ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* LEFT: Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#00AEEF]/8 rounded-sm pointer-events-none" />
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ height: "520px" }}>
              <Image
                src="/team_meeting.jpg"
                alt="TalentForge HR – Kandidatenbetreuung"
                fill
                className="object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111318]/70 via-transparent to-transparent pointer-events-none" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 z-10">
                <div className="absolute top-0 left-0 w-full h-px bg-[#00AEEF]/60" />
                <div className="absolute top-0 left-0 h-full w-px bg-[#00AEEF]/60" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12 z-10">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#00AEEF]/60" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#00AEEF]/60" />
              </div>
            </div>
          </div>

          {/* RIGHT: Steps */}
          <div className="flex flex-col gap-0">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex gap-5 pb-8 last:pb-0">
                {/* Vertical connector line */}
                {index < STEPS.length - 1 && (
                  <div className="absolute left-[18px] top-10 bottom-0 w-px bg-gradient-to-b from-[#00AEEF]/30 to-transparent" />
                )}

                {/* Number circle */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full border border-[#00AEEF]/40 bg-[#0A0A0A] flex items-center justify-center relative z-10 group-hover:border-[#00AEEF] group-hover:bg-[#00AEEF]/10 transition-all duration-300">
                  <span className="text-xs font-mono text-[#00AEEF]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="font-display font-bold uppercase text-base text-white tracking-tight group-hover:text-[#00AEEF] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8BA3B0] leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-[#1A1E26]">
              <Link
                href="/#kontakt"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-4 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_32px_rgba(0,174,239,0.45)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Karrieregespräch vereinbaren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Promises Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1E26]/40">
          {PROMISES.map((promise) => {
            const Icon = promise.icon;
            return (
              <div
                key={promise.title}
                className="group bg-[#111318] hover:bg-[#0F1318] p-8 flex flex-col gap-4 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-[#00AEEF] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="w-10 h-10 border border-[#1A1E26] group-hover:border-[#00AEEF]/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-4 h-4 text-[#8BA3B0] group-hover:text-[#00AEEF] transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold uppercase text-sm text-white tracking-tight">
                  {promise.title}
                </h3>
                <p className="text-sm text-[#8BA3B0] leading-relaxed">
                  {promise.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
