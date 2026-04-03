import LegalPage from "@/components/ui/LegalPage";

export const metadata = { title: "Cookie-Richtlinie | TalentForge HR" };

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie-Richtlinie"
      subtitle="Informationen über den Einsatz von Cookies auf talentforge-hr.de"
      lastUpdated="April 2026"
      sections={[
        {
          title: "Was sind Cookies?",
          content:
            "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie ermöglichen es uns, Ihre Einstellungen zu speichern und die Nutzung unserer Website zu analysieren.",
        },
        {
          title: "Notwendige Cookies",
          content: [
            "Session-Cookies — für die grundlegende Funktionalität der Website",
            "Cookie-Einwilligungs-Cookie — speichert Ihre Cookie-Präferenzen",
            "Sicherheits-Cookies — schützen vor Cross-Site-Request-Forgery",
            "Diese Cookies können nicht deaktiviert werden, da sie für den Betrieb der Website unerlässlich sind.",
          ],
        },
        {
          title: "Analyse-Cookies",
          content: [
            "Google Analytics (optional) — anonymisierte Analyse des Nutzerverhaltens",
            "Hotjar (optional) — Analyse der Seiteninteraktion",
            "Diese Cookies werden nur mit Ihrer Einwilligung gesetzt.",
            "Zweck: Verbesserung unserer Website auf Basis anonymisierter Nutzungsdaten.",
          ],
        },
        {
          title: "Marketing-Cookies",
          content: [
            "LinkedIn Insight Tag (optional) — Erfolgsmessung von LinkedIn-Kampagnen",
            "Google Ads (optional) — Remarketing und Konversionsmessung",
            "Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.",
            "Zweck: Zielgerichtete Werbung und Messung der Werbeeffektivität.",
          ],
        },
        {
          title: "Speicherdauer",
          content: [
            "Session-Cookies — werden beim Schließen des Browsers gelöscht",
            "Persistente Cookies — werden für die angegebene Laufzeit gespeichert (max. 12 Monate)",
            "Ihre Cookie-Einwilligung wird für 12 Monate gespeichert",
          ],
        },
        {
          title: "Ihre Wahlmöglichkeiten",
          content:
            "Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner am unteren Bildschirmrand anpassen. Alternativ können Sie Cookies über die Einstellungen Ihres Browsers verwalten oder löschen. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.",
        },
        {
          title: "Drittanbieter",
          content:
            "Einige Cookies werden von Drittanbietern gesetzt. Diese Anbieter haben eigene Datenschutzrichtlinien, für die wir keine Verantwortung übernehmen. Informationen finden Sie in den jeweiligen Datenschutzerklärungen der Anbieter.",
        },
        {
          title: "Kontakt",
          content:
            "Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich bitte an: datenschutz@talentforge-hr.de",
        },
      ]}
    />
  );
}
