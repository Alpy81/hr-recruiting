"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Upload,
  X,
  FileText,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

type FormType = "arbeitgeber" | "kandidat";
type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export default function KontaktSection() {
  const [formType, setFormType] = useState<FormType>("arbeitgeber");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleFile = (file: File) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type))
      return alert("Bitte nur PDF oder Word-Dateien hochladen.");
    if (file.size > 10 * 1024 * 1024)
      return alert("Maximale Dateigröße: 10 MB");
    setCvFile(file);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("type", formType);
      fd.append("name", data.name);
      fd.append("email", data.email);
      fd.append("phone", data.phone ?? "");
      fd.append("company", data.company ?? "");
      fd.append("message", data.message);
      if (cvFile) fd.append("cv", cvFile);

      const res = await fetch("/api/kontakt", { method: "POST", body: fd });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        reset();
        setCvFile(null);
      } else
        alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } catch {
      alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00AEEF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00AEEF]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#00AEEF]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#00AEEF] uppercase">
              Kontakt
            </span>
            <span className="w-6 h-px bg-[#00AEEF]" />
          </div>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight mb-4">
            Sprechen wir
            <br />
            <span className="text-gradient">miteinander.</span>
          </h2>
          <p className="text-[#8BA3B0] text-base leading-relaxed max-w-[480px] mx-auto">
            Egal ob Sie ein Talent suchen oder die nächste Karrierechance
            anstreben — wir sind für Sie da.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
          {/* Form */}
          <div className="relative border border-[#1A1E26] rounded-sm bg-[#111318] p-8 lg:p-10">
            <div className="absolute top-0 left-0 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-px bg-[#00AEEF]/40" />
              <div className="absolute top-0 left-0 h-full w-px bg-[#00AEEF]/40" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-px bg-[#00AEEF]/40" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-[#00AEEF]/40" />
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-16 h-16 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#00AEEF]" />
                </div>
                <h3 className="font-display font-bold uppercase text-2xl text-white tracking-tight">
                  Nachricht erhalten!
                </h3>
                <p className="text-[#8BA3B0] text-sm leading-relaxed max-w-[340px]">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24
                  Stunden persönlich bei Ihnen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono tracking-[0.2em] text-[#00AEEF]/60 hover:text-[#00AEEF] transition-colors duration-200 uppercase mt-2">
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <>
                {/* Toggle */}
                <div className="flex gap-1 p-1 bg-[#0A0A0A] border border-[#1A1E26] rounded-sm mb-8">
                  {(["arbeitgeber", "kandidat"] as FormType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormType(type)}
                      className={`flex-1 py-2.5 text-xs font-mono tracking-[0.15em] uppercase rounded-sm transition-all duration-200 ${
                        formType === type
                          ? "bg-[#00AEEF] text-[#0A0A0A] font-bold"
                          : "text-[#8BA3B0] hover:text-white"
                      }`}>
                      {type === "arbeitgeber"
                        ? "Ich bin Arbeitgeber"
                        : "Ich bin Kandidat"}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0] uppercase">
                        Name *
                      </label>
                      <input
                        {...register("name", { required: true })}
                        placeholder="Max Mustermann"
                        className={`bg-[#0A0A0A] border ${
                          errors.name ? "border-red-500/50" : "border-[#1A1E26]"
                        } rounded-sm px-4 py-3 text-sm text-white placeholder-[#8BA3B0]/40 focus:outline-none focus:border-[#00AEEF]/50 transition-colors duration-200`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0] uppercase">
                        E-Mail *
                      </label>
                      <input
                        {...register("email", {
                          required: true,
                          pattern: /^\S+@\S+\.\S+$/,
                        })}
                        type="email"
                        placeholder="max@mustermann.de"
                        className={`bg-[#0A0A0A] border ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-[#1A1E26]"
                        } rounded-sm px-4 py-3 text-sm text-white placeholder-[#8BA3B0]/40 focus:outline-none focus:border-[#00AEEF]/50 transition-colors duration-200`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0] uppercase">
                        Telefon
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="+49 69 000 000 00"
                        className="bg-[#0A0A0A] border border-[#1A1E26] rounded-sm px-4 py-3 text-sm text-white placeholder-[#8BA3B0]/40 focus:outline-none focus:border-[#00AEEF]/50 transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0] uppercase">
                        {formType === "arbeitgeber"
                          ? "Unternehmen"
                          : "Aktuelle Position"}
                      </label>
                      <input
                        {...register("company")}
                        placeholder={
                          formType === "arbeitgeber"
                            ? "Mustermann GmbH"
                            : "Senior Manager"
                        }
                        className="bg-[#0A0A0A] border border-[#1A1E26] rounded-sm px-4 py-3 text-sm text-white placeholder-[#8BA3B0]/40 focus:outline-none focus:border-[#00AEEF]/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* CV Upload */}
                  {formType === "kandidat" && (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0] uppercase">
                        Lebenslauf (CV) hochladen
                      </label>
                      {cvFile ? (
                        <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#00AEEF]/8 border border-[#00AEEF]/25 rounded-sm">
                          <div className="flex items-center gap-3">
                            <FileText className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                            <div>
                              <p className="text-sm text-white font-medium truncate max-w-[240px]">
                                {cvFile.name}
                              </p>
                              <p className="text-xs text-[#8BA3B0]">
                                {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCvFile(null)}
                            className="p-1 text-[#8BA3B0] hover:text-white transition-colors duration-200">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setDragOver(true);
                          }}
                          onDragLeave={() => setDragOver(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setDragOver(false);
                            const f = e.dataTransfer.files[0];
                            if (f) handleFile(f);
                          }}
                          className={`flex flex-col items-center justify-center gap-3 px-6 py-8 border-2 border-dashed rounded-sm cursor-pointer transition-all duration-200 ${
                            dragOver
                              ? "border-[#00AEEF]/60 bg-[#00AEEF]/8"
                              : "border-[#1A1E26] hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/3"
                          }`}>
                          <Upload
                            className={`w-6 h-6 transition-colors duration-200 ${
                              dragOver ? "text-[#00AEEF]" : "text-[#8BA3B0]/50"
                            }`}
                          />
                          <div className="text-center">
                            <p className="text-sm text-[#8BA3B0]">
                              Datei hierher ziehen oder{" "}
                              <span className="text-[#00AEEF]">auswählen</span>
                            </p>
                            <p className="text-xs text-[#8BA3B0]/50 mt-1">
                              PDF oder Word · max. 10 MB
                            </p>
                          </div>
                        </div>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleFile(f);
                        }}
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0] uppercase">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows={5}
                      placeholder={
                        formType === "arbeitgeber"
                          ? "Beschreiben Sie die Position und Ihre Anforderungen..."
                          : "Beschreiben Sie Ihre Erfahrung und was Sie suchen..."
                      }
                      className={`bg-[#0A0A0A] border ${
                        errors.message
                          ? "border-red-500/50"
                          : "border-[#1A1E26]"
                      } rounded-sm px-4 py-3 text-sm text-white placeholder-[#8BA3B0]/40 focus:outline-none focus:border-[#00AEEF]/50 transition-colors duration-200 resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative overflow-hidden w-full flex items-center justify-center gap-2 px-7 py-4 bg-[#00AEEF] text-[#0A0A0A] text-sm font-bold rounded-sm hover:shadow-[0_0_32px_rgba(0,174,239,0.45)] disabled:opacity-70 transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Wird
                          gesendet...
                        </>
                      ) : (
                        <>
                          Nachricht senden{" "}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  </button>

                  <p className="text-xs text-[#8BA3B0]/50 text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a
                      href="/datenschutz"
                      className="text-[#00AEEF]/60 hover:text-[#00AEEF] transition-colors duration-200">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Mail,
                  label: "E-Mail",
                  value: CONTACT_INFO.email,
                  href: `mailto:${CONTACT_INFO.email}`,
                },
                {
                  icon: Phone,
                  label: "Telefon",
                  value: CONTACT_INFO.phone,
                  href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: MapPin,
                  label: "Standort",
                  value: CONTACT_INFO.address,
                  href: "#",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 p-5 border border-[#1A1E26] rounded-sm bg-[#111318] hover:border-[#00AEEF]/25 hover:bg-[#00AEEF]/3 transition-all duration-300">
                  <div className="w-10 h-10 flex-shrink-0 border border-[#1A1E26] group-hover:border-[#00AEEF]/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#00AEEF]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0]/60 uppercase mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-white group-hover:text-[#00AEEF] transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 border border-[#00AEEF]/10 rounded-sm bg-[#00AEEF]/3">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]" />
                </span>
                <span className="text-xs font-mono tracking-[0.2em] text-[#00AEEF] uppercase">
                  Antwortzeit
                </span>
              </div>
              <p className="text-white text-sm font-medium">
                Innerhalb von 24 Stunden
              </p>
              <p className="text-[#8BA3B0] text-xs mt-1">
                Wir antworten auf jede Anfrage persönlich — kein automatisiertes
                System.
              </p>
            </div>

            <div className="p-6 border border-[#1A1E26] rounded-sm bg-[#111318]">
              <p className="text-xs font-mono tracking-[0.2em] text-[#8BA3B0]/60 uppercase mb-4">
                Bürozeiten
              </p>
              <div className="space-y-2">
                {[
                  { day: "Montag – Freitag", time: "09:00 – 18:00 Uhr" },
                  { day: "Samstag", time: "Nach Vereinbarung" },
                  { day: "Sonntag", time: "Geschlossen" },
                ].map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between text-sm">
                    <span className="text-[#8BA3B0]">{day}</span>
                    <span className="text-white font-mono text-xs">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
