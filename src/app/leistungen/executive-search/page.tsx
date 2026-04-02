import LeistungPage from "@/components/ui/LeistungPage";
import { Search } from "lucide-react";

export const metadata = { title: "Executive Search" };

export default function Page() {
  return (
    <LeistungPage
      data={{
        slug: "executive-search",
        icon: Search,
        number: "01",
        title: "Executive Search",
        tagline: "Die richtigen Führungspersönlichkeiten für Ihr Unternehmen.",
        description:
          "Wir identifizieren und gewinnen C-Level Führungskräfte und Senior Manager — diskret, präzise und nachhaltig. Unser Executive Search Prozess basiert auf tiefem Marktverständnis, einem starken Netzwerk und einem strukturierten Auswahlverfahren.",
        benefits: [
          "Zugang zu passiven Kandidaten die nicht aktiv suchen",
          "Diskretion gegenüber Markt und Wettbewerb",
          "Tiefgehende Kandidatenanalyse und Referenzprüfung",
          "Spezialisiert auf C-Level, VP und Director-Positionen",
          "Persönliche Begleitung durch den gesamten Prozess",
          "Nachbetreuung nach erfolgreicher Besetzung",
        ],
        process: [
          {
            step: "Anforderungsanalyse",
            text: "Wir definieren gemeinsam das Anforderungsprofil — fachlich, persönlich und kulturell.",
          },
          {
            step: "Markt- & Netzwerkrecherche",
            text: "Gezielte Suche im Markt über unser Netzwerk und etablierte Suchstrategien.",
          },
          {
            step: "Direktansprache",
            text: "Persönliche und vertrauliche Kontaktaufnahme mit potenziellen Kandidaten.",
          },
          {
            step: "Eignungsdiagnostik",
            text: "Strukturierte Interviews, Kompetenzanalysen und Referenzprüfungen.",
          },
          {
            step: "Präsentation",
            text: "Vorlage einer handverlesenen Shortlist mit detaillierten Kandidatenprofilen.",
          },
          {
            step: "Platzierung & Onboarding",
            text: "Begleitung bis zum Vertragsabschluss und während der Einarbeitungsphase.",
          },
        ],
        cta: "Bereit die ideale Führungskraft zu finden?",
        next: { title: "Direct Search", slug: "direct-search" },
      }}
    />
  );
}
