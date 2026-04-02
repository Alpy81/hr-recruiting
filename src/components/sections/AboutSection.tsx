"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const VALUES = [
  {
    title: "Präzision",
    text: "Jede Besetzung ist das Ergebnis eines strukturierten, analytischen Prozesses.",
  },
  {
    title: "Vertraulichkeit",
    text: "Diskretion ist für uns keine Option — sie ist die Grundlage jeder Zusammenarbeit.",
  },
  {
    title: "Nachhaltigkeit",
    text: "Wir denken langfristig: für Kandidaten, Unternehmen und Beziehungen.",
  },
  {
    title: "Geschwindigkeit",
    text: "Ohne Kompromisse bei der Qualität — aber mit dem Tempo das der Markt verlangt.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="ueber-uns"
      className="relative bg-[#111318] py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── LEFT: Image ── */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative frame offset */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#00AEEF]/10 rounded-sm pointer-events-none" />

            {/* Main image */}
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ height: "560px" }}>
              <Image
                src="/consulting-team.jpg"
                alt="TalentForge HR Team"
                fill
                className="object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/60 via-transparent to-transparent pointer-events-none" />

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

            {/* Floating experience badge */}
            <div className="absolute -bottom-6 -right-6 glass rounded-sm px-6 py-4 border border-[#00AEEF]/15 shadow-2xl z-20">
              <p className="text-xs font-mono tracking-[0.25em] text-[#00AEEF] uppercase mb-1">
                Gegründet
              </p>
              <p className="font-display font-bold text-3xl text-white leading-none">
                2012
              </p>
              <p className="text-xs text-[#8BA3B0] mt-1">Frankfurt am Main</p>
            </div>
          </div>

          {/* ── RIGHT: Text ── */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="w-6 h-px bg-[#00AEEF]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
                Wer wir sind
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Mehr als
              <br />
              ein
              <br />
              <span className="text-gradient">Recruiter.</span>
            </h2>

            {/* Body text */}
            <div className="space-y-4 text-[#8BA3B0] text-base leading-relaxed">
              <p>
                TalentForge HR ist mehr als eine Personalvermittlung — wir sind
                strategische Partner für Unternehmen die wissen, dass die
                richtigen Menschen der entscheidende Wettbewerbsvorteil sind.
              </p>
              <p>
                Seit über einem Jahrzehnt vermitteln wir Führungskräfte und
                Spezialisten in Unternehmen aller Größen und Branchen. Unser
                Ansatz ist dabei immer derselbe: zuhören, verstehen, treffen.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="group flex flex-col gap-2 p-4 border border-[#1A1E26] rounded-sm hover:border-[#00AEEF]/25 hover:bg-[#00AEEF]/3 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                    <span className="font-display font-bold uppercase text-sm text-white tracking-wide">
                      {value.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#8BA3B0] leading-relaxed pl-6">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/ueber-uns"
              className="group inline-flex items-center gap-2 self-start text-sm font-medium text-[#00AEEF] hover:text-white transition-colors duration-200">
              Mehr über uns erfahren
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
