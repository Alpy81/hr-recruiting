import LeistungPage from "@/components/ui/LeistungPage";
import { Briefcase } from "lucide-react";

export const metadata = { title: "Interim Management" };

export default function Page() {
  return (
    <LeistungPage
      data={{
        slug: "interim-management",
        icon: Briefcase,
        number: "06",
        title: "Interim Management",
        tagline: "Erfahrene Führungskräfte auf Zeit — sofort einsatzbereit.",
        description:
          "Wenn schnelles Handeln entscheidend ist: Wir besetzen Schlüsselpositionen kurzfristig mit erfahrenen Interim Managern — für Überbrückungen, Restrukturierungen oder besondere Projektsituationen.",
        benefits: [
          "Sofortige Verfügbarkeit erfahrener Führungskräfte",
          "Flexibel — von wenigen Wochen bis zu mehreren Monaten",
          "Kein langfristiges Beschäftigungsverhältnis notwendig",
          "Externe Perspektive ohne interne politische Bindungen",
          "Ideal für Restrukturierung und Change-Situationen",
          "Wissenstransfer an interne Teams inklusive",
        ],
        process: [
          {
            step: "Bedarfsanalyse",
            text: "Schnelle Erfassung des Handlungsbedarfs und der Anforderungen.",
          },
          {
            step: "Kandidatenauswahl",
            text: "Sofortige Aktivierung unseres Pools an verfügbaren Interim Managern.",
          },
          {
            step: "Matching & Briefing",
            text: "Präzises Briefing des ausgewählten Interim Managers.",
          },
          {
            step: "Schnellstart",
            text: "Onboarding innerhalb kürzester Zeit — oft innerhalb einer Woche.",
          },
          {
            step: "Laufendes Monitoring",
            text: "Regelmäßiger Austausch und Qualitätssicherung während des Einsatzes.",
          },
          {
            step: "Übergabe",
            text: "Strukturierter Wissenstransfer und geordnete Übergabe am Einsatzende.",
          },
        ],
        cta: "Sofort handeln — die richtige Führungskraft ist bereit.",
        prev: { title: "Candidate Management", slug: "candidate-management" },
      }}
    />
  );
}
