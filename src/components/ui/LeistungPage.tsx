import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type LeistungData = {
  slug: string;
  icon: LucideIcon;
  number: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: { step: string; text: string }[];
  cta: string;
  prev?: { title: string; slug: string };
  next?: { title: string; slug: string };
};

export default function LeistungPage({ data }: { data: LeistungData }) {
  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-28 pb-20 overflow-hidden relative">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00AEEF]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Back link ── */}
        <Link
          href="/#leistungen"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#8BA3B0] hover:text-[#00AEEF] transition-colors duration-200 uppercase mb-12 group">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Alle Leistungen
        </Link>

        {/* ── Hero ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#00AEEF]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
                Leistung {data.number}
              </span>
            </div>
            <h1 className="font-display font-bold uppercase text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.92] tracking-tight mb-6">
              {data.title}
            </h1>
            <p className="text-[#00AEEF] text-base font-medium mb-4">
              {data.tagline}
            </p>
            <p className="text-[#8BA3B0] text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Icon display */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00AEEF]/10 rounded-full blur-3xl scale-150" />
              <div className="relative w-48 h-48 border border-[#00AEEF]/20 rounded-full flex items-center justify-center bg-[#111318]">
                <div className="w-32 h-32 border border-[#00AEEF]/10 rounded-full flex items-center justify-center">
                  <Icon className="w-16 h-16 text-[#00AEEF]/60" />
                </div>
              </div>
              {/* Orbit dot */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#00AEEF] shadow-[0_0_12px_rgba(0,174,239,0.8)]" />
              <div className="absolute bottom-8 left-2 w-2 h-2 rounded-full bg-[#00AEEF]/40" />
            </div>
          </div>
        </div>

        {/* ── Benefits ── */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px bg-[#00AEEF]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
              Ihre Vorteile
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.benefits.map((benefit, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 p-5 border border-[#1A1E26] rounded-sm bg-[#111318] hover:border-[#00AEEF]/25 hover:bg-[#00AEEF]/3 transition-all duration-300">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#8BA3B0] group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process ── */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px bg-[#00AEEF]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
              Unser Vorgehen
            </span>
          </div>
          <div className="space-y-px">
            {data.process.map((item, i) => (
              <div
                key={i}
                className="group flex gap-6 p-6 bg-[#111318] hover:bg-[#0F1318] border-b border-[#1A1E26] transition-colors duration-300 relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00AEEF] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <span className="font-mono text-xs text-[#00AEEF]/50 group-hover:text-[#00AEEF] transition-colors duration-300 pt-0.5 flex-shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-bold uppercase text-sm text-white tracking-tight mb-1">
                    {item.step}
                  </h3>
                  <p className="text-sm text-[#8BA3B0] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="relative rounded-sm border border-[#00AEEF]/15 bg-gradient-to-r from-[#111318] to-[#0A0A0A] p-8 lg:p-12 overflow-hidden mb-16">
          <div
            className="absolute top-0 right-0 w-64 h-full opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase mb-2">
                Jetzt starten
              </p>
              <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-tight">
                {data.cta}
              </h2>
            </div>
            <Link
              href="/termin"
              className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-4 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_32px_rgba(0,174,239,0.45)] transition-all duration-300 flex-shrink-0">
              <span className="relative z-10 flex items-center gap-2">
                Termin buchen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </Link>
          </div>
        </div>

        {/* ── Prev / Next Navigation ── */}
        <div className="flex items-center justify-between gap-4">
          {data.prev ? (
            <Link
              href={`/leistungen/${data.prev.slug}`}
              className="group flex items-center gap-3 text-sm text-[#8BA3B0] hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              <span className="hidden sm:block">{data.prev.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {data.next && (
            <Link
              href={`/leistungen/${data.next.slug}`}
              className="group flex items-center gap-3 text-sm text-[#8BA3B0] hover:text-white transition-colors duration-200">
              <span className="hidden sm:block">{data.next.title}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
