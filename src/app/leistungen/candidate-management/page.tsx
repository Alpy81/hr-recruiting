import LeistungPage from "@/components/ui/LeistungPage";
import { UserCheck } from "lucide-react";

export const metadata = { title: "Candidate Management" };

export default function Page() {
  return (
    <LeistungPage
      data={{
        slug: "candidate-management",
        icon: UserCheck,
        number: "05",
        title: "Candidate Management",
        tagline: "Ganzheitliche Betreuung vom ersten Kontakt bis zum Vertrag.",
        description:
          "Wir begleiten Kandidaten professionell und transparent durch den gesamten Bewerbungsprozess — vom ersten Gespräch bis zur erfolgreichen Einstellung und darüber hinaus.",
        benefits: [
          "Transparente Kommunikation in jeder Phase",
          "Persönliche Vorbereitung auf Vorstellungsgespräche",
          "Ehrliches Feedback nach jedem Gespräch",
          "Verhandlungsunterstützung bei Vertragskonditionen",
          "Begleitung während der Probezeit",
          "Langfristige Karriereberatung auf Wunsch",
        ],
        process: [
          {
            step: "Kennenlernen",
            text: "Persönliches Gespräch zur Erfassung Ihrer Stärken, Ziele und Wünsche.",
          },
          {
            step: "Profilaufbereitung",
            text: "Optimierung Ihrer Bewerbungsunterlagen und Online-Profile.",
          },
          {
            step: "Matching",
            text: "Sorgfältige Auswahl passender Positionen aus unserem Portfolio.",
          },
          {
            step: "Vorbereitung",
            text: "Gezielte Vorbereitung auf Interviews und Assessment Center.",
          },
          {
            step: "Begleitung",
            text: "Aktive Unterstützung während des gesamten Bewerbungsprozesses.",
          },
          {
            step: "Onboarding Support",
            text: "Nachbetreuung in den ersten Wochen Ihrer neuen Stelle.",
          },
        ],
        cta: "Lassen Sie uns gemeinsam Ihren nächsten Karriereschritt planen.",
        prev: { title: "Employer Branding", slug: "employer-branding" },
        next: { title: "Interim Management", slug: "interim-management" },
      }}
    />
  );
}
