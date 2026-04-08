import HeroSection from "@/components/sections/HeroSection";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import OurServices from "@/components/sections/OurServices";
import ProjectExperienceSection from "@/components/sections/ProjectExperienceSection";
import ScenarioSection from "@/components/sections/ScenarioSection";
import CustomerValue from "@/components/sections/CustomerValue";
import ContactSection from "@/components/sections/ContactSection";
import PageFooter from "@/components/sections/PageFooter";

export default function RelianexLandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <HeroSection />
      <CoreCapabilities />
      <OurServices />
      <ProjectExperienceSection />
      <ScenarioSection />
      <CustomerValue />
      <ContactSection />
      <PageFooter />
    </main>
  );
}
