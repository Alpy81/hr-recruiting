import LeistungPage from "@/components/ui/LeistungPage";
import { Brain } from "lucide-react";

export const metadata = { title: "HR Consulting" };

export default function Page() {
  return (
    <LeistungPage
      data={{
        slug: "hr-consulting",
        icon: Brain,
        number: "03",
        title: "HR Consulting",
        tagline: "Strategische HR-Beratung für nachhaltiges Wachstum.",
        description:
          "Von der Organisationsentwicklung bis zur Optimierung Ihrer Recruiting-Strategie — wir beraten Unternehmen ganzheitlich in allen HR-relevanten Fragen und entwickeln maßgeschneiderte Lösungen.",
        benefits: [
          "Ganzheitliche Analyse Ihrer HR-Prozesse",
          "Entwicklung individueller Recruiting-Strategien",
          "Optimierung von Onboarding und Mitarbeiterbindung",
          "Aufbau von Employer Branding Konzepten",
          "Unterstützung bei Organisationsveränderungen",
          "Messbare Ergebnisse durch klare KPIs",
        ],
        process: [
          {
            step: "Ist-Analyse",
            text: "Bestandsaufnahme Ihrer aktuellen HR-Strukturen und Prozesse.",
          },
          {
            step: "Zieldefinition",
            text: "Gemeinsame Erarbeitung von Zielen und gewünschten Ergebnissen.",
          },
          {
            step: "Strategieentwicklung",
            text: "Entwicklung maßgeschneiderter HR-Strategien und Maßnahmenpläne.",
          },
          {
            step: "Implementierung",
            text: "Begleitung bei der Umsetzung — pragmatisch und lösungsorientiert.",
          },
          {
            step: "Erfolgsmessung",
            text: "Regelmäßiges Monitoring und Anpassung der Maßnahmen.",
          },
        ],
        cta: "Lassen Sie uns Ihre HR-Strategie gemeinsam entwickeln.",
        prev: { title: "Direct Search", slug: "direct-search" },
        next: { title: "Employer Branding", slug: "employer-branding" },
      }}
    />
  );
}
