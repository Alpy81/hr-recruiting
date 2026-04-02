import LeistungPage from "@/components/ui/LeistungPage";
import { Megaphone } from "lucide-react";

export const metadata = { title: "Employer Branding" };

export default function Page() {
  return (
    <LeistungPage
      data={{
        slug: "employer-branding",
        icon: Megaphone,
        number: "04",
        title: "Employer Branding",
        tagline: "Werden Sie der Arbeitgeber, den Top-Talente wählen.",
        description:
          "Wir positionieren Ihr Unternehmen als attraktiven Arbeitgeber — authentisch, zielgruppengerecht und wirkungsvoll. Für mehr Sichtbarkeit, bessere Kandidaten und langfristige Mitarbeiterbindung.",
        benefits: [
          "Stärkere Arbeitgebermarke im Wettbewerb",
          "Höhere Qualität eingehender Bewerbungen",
          "Geringere Time-to-Hire durch Bekanntheit",
          "Bessere Mitarbeiterbindung und Loyalität",
          "Authentische Positionierung nach innen und außen",
          "Messbare Steigerung der Arbeitgeberattraktivität",
        ],
        process: [
          {
            step: "Markenanalyse",
            text: "Analyse Ihrer aktuellen Arbeitgeberpositionierung und Wahrnehmung.",
          },
          {
            step: "EVP-Entwicklung",
            text: "Erarbeitung Ihres einzigartigen Employee Value Proposition.",
          },
          {
            step: "Kommunikationsstrategie",
            text: "Entwicklung einer zielgruppengerechten Kommunikationsstrategie.",
          },
          {
            step: "Content & Kampagnen",
            text: "Erstellung von Inhalten und Kampagnen für relevante Kanäle.",
          },
          {
            step: "Monitoring",
            text: "Messung der Wirksamkeit und kontinuierliche Optimierung.",
          },
        ],
        cta: "Starten Sie jetzt mit Ihrem Employer Branding.",
        prev: { title: "HR Consulting", slug: "hr-consulting" },
        next: { title: "Candidate Management", slug: "candidate-management" },
      }}
    />
  );
}
