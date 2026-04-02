import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TalentForge HR — We Build Careers",
    template: "%s | TalentForge HR",
  },
  description:
    "TalentForge HR verbindet außergewöhnliche Talente mit führenden Unternehmen. Professionelles Recruiting & Executive Search.",
  keywords: [
    "Recruiting",
    "HR",
    "Personalvermittlung",
    "Executive Search",
    "Jobs",
    "Karriere",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "TalentForge HR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A0A0A] text-white font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
