import LeistungPage from "@/components/ui/LeistungPage";
import { Users } from "lucide-react";

export const metadata = { title: "Direct Search" };

export default function Page() {
  return (
    <LeistungPage
      data={{
        slug: "direct-search",
        icon: Users,
        number: "02",
        title: "Direct Search",
        tagline: "Gezielte Direktansprache qualifizierter Fachkräfte.",
        description:
          "Über unser starkes Netzwerk sprechen wir qualifizierte Fachkräfte direkt an — für Positionen die nicht öffentlich ausgeschrieben werden. Effizient, zielgenau und ohne Streuverlust.",
        benefits: [
          "Direkter Zugang zu qualifizierten Fachkräften",
          "Keine öffentliche Ausschreibung notwendig",
          "Schnellere Besetzungszeit als klassisches Recruiting",
          "Geringerer administrativer Aufwand für Ihr HR-Team",
          "Hohe Trefferquote durch präzise Vorauswahl",
          "Ideal für spezialisierte oder seltene Profile",
        ],
        process: [
          {
            step: "Positionsanalyse",
            text: "Genaue Definition des Suchprofils und der Zielunternehmen.",
          },
          {
            step: "Zielgruppenrecherche",
            text: "Identifikation relevanter Kandidaten über Netzwerk und Datenbankrecherche.",
          },
          {
            step: "Direktansprache",
            text: "Persönliche und diskrete Kontaktaufnahme — online und telefonisch.",
          },
          {
            step: "Erstgespräch",
            text: "Qualifizierung der Kandidaten anhand Ihrer Anforderungen.",
          },
          {
            step: "Shortlist",
            text: "Präsentation der geeignetsten Kandidaten mit Profil und Einschätzung.",
          },
          {
            step: "Koordination",
            text: "Organisation der Vorstellungsgespräche und Begleitung bis zur Entscheidung.",
          },
        ],
        cta: "Direkt zum richtigen Kandidaten — ohne Umwege.",
        prev: { title: "Executive Search", slug: "executive-search" },
        next: { title: "HR Consulting", slug: "hr-consulting" },
      }}
    />
  );
}
