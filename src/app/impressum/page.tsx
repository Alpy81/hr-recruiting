import LegalPage from "@/components/ui/LegalPage";

export const metadata = { title: "Impressum | TalentForge HR" };

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      subtitle="Angaben gemäß § 5 TMG"
      lastUpdated="April 2026"
      sections={[
        {
          title: "Unternehmensangaben",
          content: `TalentForge HR GmbH
Musterstraße 42
60311 Frankfurt am Main
Deutschland`,
        },
        {
          title: "Kontakt",
          content: `Telefon: +49 (0) 69 000 000 00
E-Mail: info@talentforge-hr.de
Web: www.talentforge-hr.de`,
        },
        {
          title: "Handelsregister",
          content: `Registergericht: Amtsgericht Frankfurt am Main
Registernummer: HRB 123456
Umsatzsteuer-Identifikationsnummer: DE 123 456 789`,
        },
        {
          title: "Geschäftsführung",
          content: "Max Mustermann (Geschäftsführer)",
        },
        {
          title: "Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)",
          content: `Max Mustermann
Musterstraße 42
60311 Frankfurt am Main`,
        },
        {
          title: "Streitschlichtung",
          content: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
        },
        {
          title: "Haftung für Inhalte",
          content:
            "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
        },
        {
          title: "Urheberrecht",
          content:
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        },
      ]}
    />
  );
}
