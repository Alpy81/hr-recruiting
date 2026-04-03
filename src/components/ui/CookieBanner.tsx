"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Cookie,
  Shield,
  BarChart2,
  Megaphone,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "talentforge-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  const save = (selectedPrefs: CookiePrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedPrefs));
    setVisible(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    save({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => save(prefs);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-[520px] bg-[#111318] border border-[#1A1E26] rounded-sm shadow-2xl shadow-black/60 overflow-hidden">
        {/* Top cyan line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00AEEF]/60 to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#00AEEF]/25 rounded-sm flex items-center justify-center bg-[#00AEEF]/8">
              <Cookie className="w-4 h-4 text-[#00AEEF]" />
            </div>
            <div>
              <h2 className="font-display font-bold uppercase text-lg text-white tracking-tight">
                Cookie-Einstellungen
              </h2>
              <p className="text-xs text-[#8BA3B0] mt-0.5">
                Ihre Privatsphäre ist uns wichtig
              </p>
            </div>
          </div>
          <button
            onClick={rejectAll}
            className="p-1.5 text-[#8BA3B0] hover:text-white transition-colors duration-200"
            aria-label="Schließen">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-4">
          <p className="text-sm text-[#8BA3B0] leading-relaxed mb-5">
            Wir verwenden Cookies um unsere Website zu verbessern und Ihnen
            relevante Inhalte anzuzeigen. Sie können Ihre Einstellungen
            jederzeit anpassen.{" "}
            <Link href="/cookies" className="text-[#00AEEF] hover:underline">
              Mehr erfahren
            </Link>
          </p>

          {/* Categories */}
          <div className="space-y-2">
            {/* Necessary */}
            <div className="flex items-center justify-between p-4 border border-[#1A1E26] rounded-sm bg-[#0A0A0A]">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Notwendig</p>
                  <p className="text-xs text-[#8BA3B0] mt-0.5">
                    Immer aktiv — für Grundfunktionen
                  </p>
                </div>
              </div>
              {/* Always on toggle */}
              <div className="w-10 h-5 bg-[#00AEEF] rounded-full relative flex-shrink-0 opacity-60 cursor-not-allowed">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-4 border border-[#1A1E26] rounded-sm bg-[#0A0A0A] hover:border-[#00AEEF]/20 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <BarChart2 className="w-4 h-4 text-[#8BA3B0] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Analyse</p>
                  <p className="text-xs text-[#8BA3B0] mt-0.5">
                    Anonymisierte Nutzungsstatistiken
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  setPrefs((p) => ({ ...p, analytics: !p.analytics }))
                }
                className={cn(
                  "w-10 h-5 rounded-full relative flex-shrink-0 transition-colors duration-200",
                  prefs.analytics ? "bg-[#00AEEF]" : "bg-[#1A1E26]"
                )}>
                <div
                  className={cn(
                    "absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-200",
                    prefs.analytics ? "right-0.5" : "left-0.5"
                  )}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between p-4 border border-[#1A1E26] rounded-sm bg-[#0A0A0A] hover:border-[#00AEEF]/20 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <Megaphone className="w-4 h-4 text-[#8BA3B0] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Marketing</p>
                  <p className="text-xs text-[#8BA3B0] mt-0.5">
                    Personalisierte Werbung
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  setPrefs((p) => ({ ...p, marketing: !p.marketing }))
                }
                className={cn(
                  "w-10 h-5 rounded-full relative flex-shrink-0 transition-colors duration-200",
                  prefs.marketing ? "bg-[#00AEEF]" : "bg-[#1A1E26]"
                )}>
                <div
                  className={cn(
                    "absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-200",
                    prefs.marketing ? "right-0.5" : "left-0.5"
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex flex-col sm:flex-row gap-2">
          <button
            onClick={acceptAll}
            className="group relative overflow-hidden flex-1 py-3 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_24px_rgba(0,174,239,0.4)] transition-all duration-300">
            <span className="relative z-10">Alle akzeptieren</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>
          <button
            onClick={saveCustom}
            className="flex-1 py-3 border border-[#00AEEF]/30 text-[#00AEEF] text-sm font-medium rounded-sm hover:bg-[#00AEEF]/8 transition-all duration-200">
            Auswahl speichern
          </button>
          <button
            onClick={rejectAll}
            className="flex-1 py-3 border border-[#1A1E26] text-[#8BA3B0] text-sm font-medium rounded-sm hover:text-white hover:border-[#8BA3B0]/30 transition-all duration-200">
            Ablehnen
          </button>
        </div>

        {/* Bottom border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />
      </div>
    </div>
  );
}
