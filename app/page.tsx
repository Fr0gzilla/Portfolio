import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import BtsSioSection from "./sections/BtsSioSection";
import SkillsSection from "./sections/SkillsSection";
import ToolsSection from "./sections/ToolsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ParcoursSection from "./sections/ParcoursSection";
import ScolaireSection from "./sections/ScolaireSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BtsSioSection />
      <SkillsSection />
      <ToolsSection />
      <ProjectsSection />
      <ParcoursSection />
      <ScolaireSection />
      <ContactSection />
    </>
  );
}
