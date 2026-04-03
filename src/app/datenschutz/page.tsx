import LegalPage from "@/components/ui/LegalPage";

export const metadata = { title: "Datenschutzerklärung | TalentForge HR" };

export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutz"
      subtitle="Datenschutzerklärung gemäß DSGVO"
      lastUpdated="April 2026"
      sections={[
        {
          title: "Verantwortlicher",
          content: `TalentForge HR GmbH
Musterstraße 42, 60311 Frankfurt am Main
E-Mail: datenschutz@talentforge-hr.de
Telefon: +49 (0) 69 000 000 00`,
        },
        {
          title: "Erhebung und Verarbeitung personenbezogener Daten",
          content:
            "Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen erforderlich ist oder Sie uns Ihre Einwilligung erteilt haben. Dies umfasst insbesondere Name, E-Mail-Adresse, Telefonnummer sowie Bewerbungsunterlagen die Sie uns über unser Kontaktformular übermitteln.",
        },
        {
          title: "Zwecke der Datenverarbeitung",
          content: [
            "Bearbeitung Ihrer Anfragen und Bewerbungen",
            "Vermittlung zwischen Kandidaten und Unternehmen",
            "Kommunikation und Terminvereinbarungen",
            "Verbesserung unserer Webseite und Dienstleistungen",
            "Erfüllung gesetzlicher Verpflichtungen",
          ],
        },
        {
          title: "Rechtsgrundlagen",
          content: [
            "Art. 6 Abs. 1 lit. a DSGVO — Einwilligung",
            "Art. 6 Abs. 1 lit. b DSGVO — Vertragserfüllung",
            "Art. 6 Abs. 1 lit. c DSGVO — Rechtliche Verpflichtung",
            "Art. 6 Abs. 1 lit. f DSGVO — Berechtigte Interessen",
          ],
        },
        {
          title: "Speicherdauer",
          content:
            "Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Bewerbungsunterlagen werden nach Abschluss des Vermittlungsprozesses gelöscht, sofern keine Einwilligung zur längeren Speicherung vorliegt.",
        },
        {
          title: "Weitergabe an Dritte",
          content:
            "Ihre Daten werden nur mit Ihrer ausdrücklichen Einwilligung an potenzielle Arbeitgeber weitergegeben. Eine Weitergabe an Dritte zu Werbezwecken findet nicht statt. Wir setzen technische Dienstleister ein (z.B. E-Mail-Versand via Resend), die Daten ausschließlich gemäß unseren Weisungen verarbeiten.",
        },
        {
          title: "Cookies",
          content:
            "Unsere Website verwendet Cookies. Nähere Informationen finden Sie in unserer Cookie-Richtlinie. Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner anpassen.",
        },
        {
          title: "Ihre Rechte",
          content: [
            "Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)",
            "Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
            "Recht auf Löschung (Art. 17 DSGVO)",
            "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
            "Widerspruchsrecht (Art. 21 DSGVO)",
            "Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)",
          ],
        },
        {
          title: "Beschwerderecht",
          content:
            "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde für Hessen ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden.",
        },
        {
          title: "Kontakt Datenschutz",
          content:
            "Bei Fragen zum Datenschutz wenden Sie sich bitte an: datenschutz@talentforge-hr.de",
        },
      ]}
    />
  );
}
