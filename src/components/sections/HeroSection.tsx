"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowDown, Users, Briefcase, Award } from "lucide-react";

const STATS = [
  { value: "500+", label: "Vermittlungen", icon: Users },
  { value: "12+", label: "Jahre Erfahrung", icon: Award },
  { value: "98%", label: "Erfolgsquote", icon: Briefcase },
];

const WORDS = ["Karrieren.", "Zukunft.", "Erfolge.", "Teams."];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── rotating word ── */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* ── Background: dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Background: cyan glow blobs ── */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#00AEEF]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Background: diagonal line accent ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-[38%] w-px h-full opacity-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #00AEEF 30%, #00AEEF 70%, transparent)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 xl:grid-cols-[55%_45%] gap-8 xl:gap-12 items-center">
          {/* ── LEFT: Text + CTA ── */}
          <div
            className="flex flex-col"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 mb-6 self-start"
              style={{
                transitionDelay: "0.1s",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.1s",
              }}>
              <span className="w-6 h-px bg-[#00AEEF]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
                Executive & Professional Search
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold uppercase leading-[0.92] tracking-tight mb-6">
              <span
                className="block text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-white"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
                }}>
                Wir bauen
              </span>
              <span
                className="block text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
                }}>
                außergewöhnliche
              </span>
              {/* Rotating word */}
              <span
                className="block text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-gradient"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                }}>
                {WORDS[wordIndex]}
              </span>
            </h1>

            {/* Subline */}
            <p
              className="text-[#8BA3B0] text-base sm:text-lg leading-relaxed max-w-[480px] mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.45s",
              }}>
              TalentForge HR verbindet Spitzenkräfte mit führenden Unternehmen —
              präzise, vertraulich und nachhaltig. Ihr Wachstum ist unser
              Auftrag.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col xs:flex-row gap-3 mb-12"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.55s",
              }}>
              <Link
                href="/kontakt"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_32px_rgba(0,174,239,0.5)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Talent finden
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#00AEEF]/30 text-[#00AEEF] text-sm font-medium rounded-sm hover:bg-[#00AEEF]/8 hover:border-[#00AEEF]/50 transition-all duration-200">
                Jobs entdecken
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[#1A1E26]"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.65s",
              }}>
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#00AEEF]" />
                    <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                      {value}
                    </span>
                  </div>
                  <span className="text-xs text-[#8BA3B0] tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image placeholder ── */}
          <div
            className="relative hidden lg:block"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}>
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-sm bg-[#00AEEF]/5 blur-2xl" />

            {/* Image box */}
            <div
              className="relative rounded-sm border border-[#00AEEF]/15 overflow-hidden bg-[#111318]"
              style={{ height: "min(650px, 40vh)" }}>
              {/* Hero Image */}
              <Image
                src="/contract_2.jpg"
                alt="TalentForge HR – Erfolgreiche Vermittlung"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Corner decoration top-left */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-px bg-[#00AEEF]/40" />
                <div className="absolute top-0 left-0 h-full w-px bg-[#00AEEF]/40" />
              </div>
              {/* Corner decoration bottom-right */}
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#00AEEF]/40" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#00AEEF]/40" />
              </div>

              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/4 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating tag top-right — outside image, cyan colored */}
            <div className="absolute -top-8 -right-2 flex items-center gap-2 px-3 py-1.5">
              <span className="w-4 h-px bg-[#00AEEF]" />
              <p className="text-xs font-mono tracking-[0.2em] text-[#00AEEF] uppercase">
                We Build Careers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease 1s",
        }}>
        <span className="text-xs font-mono tracking-[0.25em] text-[#8BA3B0]/50 uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-[#00AEEF]/50 animate-bounce" />
      </div>
    </section>
  );
}
