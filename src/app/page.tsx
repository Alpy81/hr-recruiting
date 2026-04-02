import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import JobsSection from "@/components/sections/JobsSection";
import ArbeitgeberSection from "@/components/sections/ArbeitgeberSection";
import KandidatenSection from "@/components/sections/KandidatenSection";
import KontaktSection from "@/components/sections/KontaktSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <JobsSection />
      <ArbeitgeberSection />
      <KandidatenSection />
      <KontaktSection />
    </>
  );
}
