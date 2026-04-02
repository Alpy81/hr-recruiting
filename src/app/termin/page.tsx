"use client";

import { useEffect } from "react";
import { Calendar, Clock, Video, CheckCircle2 } from "lucide-react";

const PERKS = [
  { icon: Clock, text: "30 Minuten persönliches Gespräch" },
  { icon: Video, text: "Per Video-Call oder Telefon" },
  { icon: CheckCircle2, text: "Kostenlos & unverbindlich" },
  { icon: Calendar, text: "Sofortige Terminbestätigung" },
];

export default function TerminPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16 overflow-hidden relative">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#00AEEF]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
              Kostenloses Erstgespräch
            </span>
            <span className="w-6 h-px bg-[#00AEEF]" />
          </div>
          <h1 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight mb-4">
            Termin
            <br />
            <span className="text-gradient">vereinbaren</span>
          </h1>
          <p className="text-[#8BA3B0] text-base leading-relaxed max-w-[480px] mx-auto">
            Wählen Sie einen passenden Termin — wir besprechen Ihre
            Anforderungen persönlich und unverbindlich.
          </p>
        </div>

        {/* ── Perks ── */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {PERKS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 border border-[#1A1E26] rounded-sm bg-[#111318]">
              <Icon className="w-3.5 h-3.5 text-[#00AEEF] flex-shrink-0" />
              <span className="text-xs text-[#8BA3B0]">{text}</span>
            </div>
          ))}
        </div>

        {/* ── Calendly Embed ── */}
        <div className="relative rounded-sm overflow-hidden border border-[#1A1E26]">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 z-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-[#00AEEF]/50" />
            <div className="absolute top-0 left-0 h-full w-px bg-[#00AEEF]/50" />
          </div>
          <div className="absolute bottom-0 right-0 w-10 h-10 z-10 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-px bg-[#00AEEF]/50" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-[#00AEEF]/50" />
          </div>

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/aertas90/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=111318&text_color=ffffff&primary_color=00AEEF"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </div>
  );
}
