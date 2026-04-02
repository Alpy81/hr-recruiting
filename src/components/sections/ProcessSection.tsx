"use client";

import { useEffect, useRef, useState } from "react";
import { Search, MessageSquare, Users, CheckCircle } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Erstgespräch & Analyse",
    description:
      "Wir lernen Ihr Unternehmen, Ihre Kultur und Ihre genauen Anforderungen kennen. Nur wer die Aufgabe wirklich versteht, kann die richtige Person dafür finden.",
    duration: "1–2 Tage",
  },
  {
    number: "02",
    icon: Search,
    title: "Recherche & Identifikation",
    description:
      "Unser Team startet die gezielte Suche — über unser Netzwerk, Direktansprache und bewährte Suchstrategien. Diskret, präzise und ohne Streuverlust.",
    duration: "1–2 Wochen",
  },
  {
    number: "03",
    icon: Users,
    title: "Auswahl & Präsentation",
    description:
      "Wir präsentieren Ihnen eine handverlesene Auswahl qualifizierter Kandidaten — mit detaillierten Profilen und unserer persönlichen Einschätzung.",
    duration: "1 Woche",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Platzierung & Nachbetreuung",
    description:
      "Nach der erfolgreichen Vermittlung begleiten wir den Onboarding-Prozess und stehen als Ansprechpartner bereit — für Kandidaten und Unternehmen.",
    duration: "Fortlaufend",
  },
];

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index]);
            }, index * 150);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="relative bg-[#0D1117] py-24 lg:py-32 overflow-hidden">
      {/* Top / bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00AEEF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#00AEEF]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
              Unser Prozess
            </span>
            <span className="w-6 h-px bg-[#00AEEF]" />
          </div>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
            Wie wir
            <br />
            <span className="text-gradient">arbeiten</span>
          </h2>
          <p className="text-[#8BA3B0] text-base leading-relaxed max-w-[480px] mx-auto mt-6">
            Unser strukturierter Prozess garantiert Qualität — von der ersten
            Analyse bis zur erfolgreichen Besetzung.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-[#00AEEF]/20 via-[#00AEEF]/40 to-[#00AEEF]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                  }}>
                  {/* Icon circle */}
                  <div className="relative mb-6 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-[#00AEEF]/40 bg-[#0A0A0A] flex items-center justify-center relative z-10">
                      <Icon className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-[#00AEEF]/15 scale-150" />
                  </div>

                  {/* Number */}
                  <span className="font-mono text-xs tracking-[0.3em] text-[#00AEEF]/50 mb-2">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-bold uppercase text-lg text-white tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8BA3B0] text-sm leading-relaxed mb-4 flex-1">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#00AEEF]/20 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                    <span className="text-xs font-mono text-[#00AEEF]/70 tracking-wide">
                      {step.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom quote ── */}
        <div className="mt-20 pt-10 border-t border-[#1A1E26] text-center">
          <p className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-tight">
            „Präzision ist kein Zufall —
            <span className="text-gradient"> sie ist unser Prozess."</span>
          </p>
        </div>
      </div>
    </section>
  );
}
