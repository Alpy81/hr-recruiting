import LegalPage from "@/components/ui/LegalPage";

export const metadata = { title: "AGB | TalentForge HR" };

export default function AgbPage() {
  return (
    <LegalPage
      title="AGB"
      subtitle="Allgemeine Geschäftsbedingungen der TalentForge HR GmbH"
      lastUpdated="April 2026"
      sections={[
        {
          title: "Geltungsbereich",
          content:
            'Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der TalentForge HR GmbH, Musterstraße 42, 60311 Frankfurt am Main (nachfolgend „TalentForge HR") und ihren Auftraggebern sowie Kandidaten.',
        },
        {
          title: "Leistungsgegenstand",
          content: [
            "Personalvermittlung und Executive Search für Unternehmen",
            "Karriereberatung und Vermittlung für Kandidaten",
            "HR Consulting und strategische Personalberatung",
            "Employer Branding und Personalmarketing",
            "Interim Management Besetzungen",
          ],
        },
        {
          title: "Vertragsschluss",
          content:
            "Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.",
        },
        {
          title: "Vergütung",
          content:
            "Die Vergütung für Vermittlungsleistungen wird individuell im Auftragsvertrag festgelegt. Sie ist in der Regel erfolgsbasiert und wird bei erfolgreicher Besetzung einer Stelle fällig. Die genauen Konditionen werden im Einzelvertrag geregelt.",
        },
        {
          title: "Vertraulichkeit",
          content:
            "TalentForge HR verpflichtet sich zur strikten Vertraulichkeit bezüglich aller ihr anvertrauten Informationen über Auftraggeber, Kandidaten und Positionen. Diese Verpflichtung gilt auch nach Beendigung des Vertragsverhältnisses.",
        },
        {
          title: "Pflichten des Auftraggebers",
          content: [
            "Bereitstellung vollständiger und wahrheitsgemäßer Angaben zur zu besetzenden Stelle",
            "Zeitnahe Rückmeldung zu präsentierten Kandidaten",
            "Direkte Kontaktaufnahme mit Kandidaten nur über TalentForge HR",
            "Meldung einer erfolgreichen Einstellung innerhalb von 7 Tagen",
          ],
        },
        {
          title: "Haftungsbeschränkung",
          content:
            "TalentForge HR haftet nur für Schäden die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. Die Haftung für leichte Fahrlässigkeit ist, soweit gesetzlich zulässig, ausgeschlossen. TalentForge HR übernimmt keine Garantie für die Eignung vermittelter Kandidaten.",
        },
        {
          title: "Laufzeit und Kündigung",
          content:
            "Rahmenverträge laufen auf unbestimmte Zeit und können von beiden Parteien mit einer Frist von 4 Wochen zum Monatsende gekündigt werden. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
        },
        {
          title: "Anwendbares Recht und Gerichtsstand",
          content:
            "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten ist Frankfurt am Main, sofern der Auftraggeber Kaufmann ist.",
        },
        {
          title: "Salvatorische Klausel",
          content:
            "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck am nächsten kommt.",
        },
      ]}
    />
  );
}
