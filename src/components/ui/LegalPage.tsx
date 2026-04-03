import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Section = {
  title: string;
  content: string | string[];
};

type LegalPageProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
};

export default function LegalPage({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-28 pb-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#00AEEF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#8BA3B0] hover:text-[#00AEEF] transition-colors duration-200 uppercase mb-12 group">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Zur Startseite
        </Link>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#1A1E26]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#00AEEF]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
              Rechtliches
            </span>
          </div>
          <h1 className="font-display font-bold uppercase text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-[#8BA3B0] text-sm">{subtitle}</p>
          <p className="text-[#8BA3B0]/50 text-xs font-mono mt-2">
            Stand: {lastUpdated}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="group">
              <h2 className="font-display font-bold uppercase text-lg text-white tracking-tight mb-3 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00AEEF]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div className="pl-8 border-l border-[#1A1E26] group-hover:border-[#00AEEF]/20 transition-colors duration-300">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-[#8BA3B0] leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#00AEEF]/50 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[#8BA3B0] leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#1A1E26] flex flex-wrap gap-4">
          {[
            { label: "Impressum", href: "/impressum" },
            { label: "Datenschutz", href: "/datenschutz" },
            { label: "AGB", href: "/agb" },
            { label: "Cookie-Richtlinie", href: "/cookies" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-mono text-[#8BA3B0]/50 hover:text-[#00AEEF] transition-colors duration-200">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
