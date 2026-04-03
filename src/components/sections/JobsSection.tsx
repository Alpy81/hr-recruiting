"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ArrowRight,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Chief Financial Officer (CFO)",
    company: "Internationaler Finanzdienstleister",
    location: "Frankfurt am Main",
    type: "Executive Search",
    level: "C-Level",
    salary: "70.00 - 80.000€",
    posted: "Neu",
    hot: true,
    tags: ["Finance", "Leadership", "M&A"],
  },
  {
    id: 2,
    title: "VP of Engineering",
    company: "Tech Scale-Up",
    location: "München / Remote",
    type: "Direct Search",
    level: "Senior",
    salary: "80.000 – 90.000 €",
    posted: "Neu",
    hot: true,
    tags: ["Engineering", "Cloud", "Agile"],
  },
  {
    id: 3,
    title: "Head of Human Resources",
    company: "Mittelständisches Industrieunternehmen",
    location: "Stuttgart",
    type: "Direct Search",
    level: "Senior",
    salary: "60.000 – 70.000 €",
    posted: "3 Tage",
    hot: false,
    tags: ["HR", "Transformation", "Recruiting"],
  },
  {
    id: 4,
    title: "Director of Sales DACH",
    company: "Internationales SaaS-Unternehmen",
    location: "Berlin / Hybrid",
    type: "Executive Search",
    level: "Director",
    salary: "80.000 – 90.000 €",
    posted: "5 Tage",
    hot: false,
    tags: ["Sales", "SaaS", "DACH"],
  },
  {
    id: 5,
    title: "Chief Marketing Officer (CMO)",
    company: "E-Commerce Unternehmen",
    location: "Hamburg",
    type: "Executive Search",
    level: "C-Level",
    salary: "83.000 - 95.000 €",
    posted: "1 Woche",
    hot: false,
    tags: ["Marketing", "D2C", "Brand"],
  },
  {
    id: 6,
    title: "Senior Consultant Strategy",
    company: "Top-Tier Beratungshaus",
    location: "Düsseldorf / Hybrid",
    type: "Direct Search",
    level: "Senior",
    salary: "65.000 - 85.000 €",
    posted: "1 Woche",
    hot: false,
    tags: ["Strategy", "Consulting", "M&A"],
  },
];

const LEVEL_COLORS: Record<string, string> = {
  "C-Level": "text-[#00AEEF] border-[#00AEEF]/30 bg-[#00AEEF]/8",
  "Director": "text-[#33C3F0] border-[#33C3F0]/30 bg-[#33C3F0]/8",
  "Senior": "text-[#8BA3B0] border-[#8BA3B0]/20 bg-[#8BA3B0]/5",
};

export default function JobsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="jobs"
      className="relative bg-[#111318] py-24 lg:py-32 overflow-hidden">
      {/* Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#00AEEF]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
                Aktuelle Positionen
              </span>
            </div>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Offene
              <br />
              <span className="text-gradient">Positionen</span>
            </h2>
          </div>

          {/* Live indicator */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <div className="flex items-center gap-2 px-4 py-2 border border-[#00AEEF]/20 rounded-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]" />
              </span>
              <span className="text-xs font-mono tracking-[0.2em] text-[#00AEEF] uppercase">
                {JOBS.length} Live Positionen
              </span>
            </div>
          </div>
        </div>

        {/* ── Job List ── */}
        <div className="space-y-px">
          {JOBS.map((job, index) => (
            <div
              key={job.id}
              onMouseEnter={() => setHoveredId(job.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-[#0A0A0A] hover:bg-[#0F1318] border-b border-[#1A1E26] transition-all duration-300 cursor-pointer">
              {/* Left cyan bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00AEEF] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="px-6 py-5 lg:px-8 lg:py-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                  {/* Index number */}
                  <span className="hidden lg:block font-mono text-xs text-[#1A1E26] group-hover:text-[#00AEEF]/30 transition-colors duration-300 w-6 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      {job.hot && (
                        <span className="text-[10px] font-mono tracking-[0.2em] px-2 py-0.5 bg-[#00AEEF] text-[#0A0A0A] font-bold uppercase rounded-sm">
                          Neu
                        </span>
                      )}
                      <h3 className="font-display font-bold uppercase text-lg lg:text-xl text-white tracking-tight group-hover:text-[#00AEEF] transition-colors duration-300">
                        {job.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#8BA3B0]">{job.company}</p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 lg:gap-6">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#8BA3B0]">
                      <MapPin className="w-3.5 h-3.5 text-[#00AEEF]/60 flex-shrink-0" />
                      {job.location}
                    </div>

                    {/* Type */}
                    <div className="flex items-center gap-1.5 text-xs text-[#8BA3B0]">
                      <Briefcase className="w-3.5 h-3.5 text-[#00AEEF]/60 flex-shrink-0" />
                      {job.type}
                    </div>

                    {/* Posted */}
                    <div className="flex items-center gap-1.5 text-xs text-[#8BA3B0]">
                      <Clock className="w-3.5 h-3.5 text-[#00AEEF]/60 flex-shrink-0" />
                      {job.posted}
                    </div>

                    {/* Level badge */}
                    <span
                      className={`text-xs font-mono px-2.5 py-1 border rounded-sm ${
                        LEVEL_COLORS[job.level]
                      }`}>
                      {job.level}
                    </span>

                    {/* Salary */}
                    <span className="hidden xl:block text-xs font-mono text-[#8BA3B0] whitespace-nowrap">
                      {job.salary}
                    </span>

                    {/* Arrow */}
                    <ChevronRight className="w-4 h-4 text-[#1A1E26] group-hover:text-[#00AEEF] transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </div>
                </div>

                {/* Tags — visible on hover */}
                <div
                  className="flex gap-2 mt-3 overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: hoveredId === job.id ? "40px" : "0px",
                    opacity: hoveredId === job.id ? 1 : 0,
                  }}>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 border border-[#1A1E26] text-[#8BA3B0]/60 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1A1E26]">
          <div className="flex flex-col gap-1.5">
            <p className="text-[#8BA3B0] text-sm">Nicht das Richtige dabei?</p>
            <p className="text-white text-sm">
              Wir entwickeln individuelle Lösungen.
            </p>
          </div>
          <Link
            href="/#kontakt"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#00AEEF] hover:text-white transition-colors duration-200 whitespace-nowrap">
            Initiativ bewerben
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
