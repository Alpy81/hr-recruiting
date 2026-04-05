"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LEISTUNGEN = [
  { label: "Executive Search", href: "/leistungen/executive-search" },
  { label: "Direct Search", href: "/leistungen/direct-search" },
  { label: "HR Consulting", href: "/leistungen/hr-consulting" },
  { label: "Employer Branding", href: "/leistungen/employer-branding" },
  { label: "Candidate Management", href: "/leistungen/candidate-management" },
  { label: "Interim Management", href: "/leistungen/interim-management" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileLeistungOpen, setMobileLeistungOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#00AEEF]/10 py-3"
            : "bg-transparent py-5"
        )}>
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* ── Logo ── */}
          <Link href="/" className="relative z-10 flex-shrink-0 group">
            <Image
              src="/logo.png"
              alt="TalentForge HR"
              width={200}
              height={48}
              className="h-9 sm:h-10 w-auto transition-all duration-300 group-hover:opacity-80"
              priority
              loading="eager"
            />
          </Link>

          {/* ── Desktop Nav — visible from 1024px ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) =>
              link.label === "Leistungen" ? (
                <li key={link.href} className="relative group/dropdown">
                  <button className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm text-[#8BA3B0] hover:text-white group-hover/dropdown:text-[#00AEEF]">
                    <span className="absolute inset-0 rounded-sm bg-[#00AEEF]/15 border border-[#00AEEF]/30 opacity-0 group-hover/dropdown:opacity-100 transition-opacity duration-200" />
                    <span className="relative">Leistungen</span>
                    <ChevronDown className="relative w-3.5 h-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180 group-hover/dropdown:text-[#00AEEF]" />
                  </button>
                  <div className="absolute top-full left-0 w-60 h-3 bg-transparent" />
                  <div className="absolute top-[calc(100%+4px)] left-0 w-60 z-50 opacity-0 -translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200">
                    <div className="bg-[#111318] border border-[#1A1E26] rounded-sm shadow-2xl shadow-black/60 overflow-hidden">
                      <div className="h-px w-full bg-gradient-to-r from-[#00AEEF]/50 to-transparent" />
                      {LEISTUNGEN.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-3 text-xs text-[#8BA3B0] hover:text-white hover:bg-[#00AEEF]/8 transition-all duration-200 group/item border-b border-[#1A1E26]/50 last:border-0">
                          <span className="w-0 group-hover/item:w-2 h-px bg-[#00AEEF] transition-all duration-200 flex-shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm",
                      isActive(link.href)
                        ? "text-[#00AEEF]"
                        : "text-[#8BA3B0] hover:text-white"
                    )}>
                    <span
                      className={cn(
                        "absolute inset-0 rounded-sm bg-[#00AEEF]/15 border border-[#00AEEF]/30 transition-opacity duration-200",
                        activeIndex === i ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span className="relative">{link.label}</span>
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/termin"
              className={cn(
                "group relative overflow-hidden px-5 py-2.5 text-sm font-semibold text-[#0A0A0A]",
                "bg-[#00AEEF] rounded-sm transition-all duration-300",
                "hover:shadow-[0_0_24px_rgba(0,174,239,0.45)]"
              )}>
              <span className="relative z-10 flex items-center gap-1.5">
                Termin buchen
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </Link>
          </div>

          {/* ── Mobile Burger — hidden from 1024px ── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            className={cn(
              "lg:hidden relative z-50 p-2 rounded-sm transition-colors duration-200",
              menuOpen ? "text-[#00AEEF]" : "text-[#8BA3B0] hover:text-white"
            )}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Cyan top line */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/60 to-transparent transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />
      </header>

      {/* ── Mobile Drawer — hidden from 1024px ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}>
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm" />
        <div
          ref={menuRef}
          className={cn(
            "absolute top-0 right-0 h-full w-[min(320px,85vw)]",
            "bg-[#111318] border-l border-[#00AEEF]/10 flex flex-col",
            "transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}>
          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto px-4 pt-20 pb-6">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, i) =>
                link.label === "Leistungen" ? (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileLeistungOpen((v) => !v)}
                      className="flex items-center justify-between w-full px-4 py-3.5 rounded-sm text-base font-medium tracking-wide text-[#8BA3B0] hover:text-white hover:bg-[#1A1E26] transition-all duration-200 border border-transparent">
                      Leistungen
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileLeistungOpen ? "rotate-180 text-[#00AEEF]" : ""
                        )}
                      />
                    </button>
                    {mobileLeistungOpen && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {LEISTUNGEN.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm text-[#8BA3B0] hover:text-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-200 group">
                              <ChevronRight className="w-3 h-3 text-[#00AEEF]/40 group-hover:text-[#00AEEF]" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-sm text-base font-medium tracking-wide transition-all duration-200 border border-transparent",
                        isActive(link.href)
                          ? "text-[#00AEEF] bg-[#00AEEF]/8 border-[#00AEEF]/20"
                          : "text-[#8BA3B0] hover:text-white hover:bg-[#1A1E26]"
                      )}
                      style={{ animationDelay: `${i * 60}ms` }}>
                      {link.label}
                      <ChevronRight
                        className={cn(
                          "w-4 h-4",
                          isActive(link.href)
                            ? "text-[#00AEEF]"
                            : "text-[#1A1E26]"
                        )}
                      />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Drawer CTA */}
          <div className="px-6 py-6 border-t border-[#1A1E26] space-y-3">
            <Link
              href="/termin"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_24px_rgba(0,174,239,0.4)] transition-all duration-300">
              Termin buchen <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#jobs"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 border border-[#00AEEF]/30 text-[#00AEEF] text-sm font-medium rounded-sm hover:bg-[#00AEEF]/8 transition-all duration-200">
              Alle Jobs ansehen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
