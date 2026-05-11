import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/layout/Navbar";
import ProjectSection from "@/components/sections/ProjectSection";
import AboutSection from "@/components/sections/AboutSection";
import Marquee from "@/components/animations/Marquee/Marquee";

export default function Home() {

  const sectionPadding = "px-4 md:px-24 lg:px-40 2xl:px-64";

  return (
    <main className="flex min-h-screen flex-col bg-dark">
      {/* Hero */}
      <div id="hero" className={`${sectionPadding} z-10`}>
        <HeroSection />
      </div>
      <div className={`${sectionPadding} sticky z-50 top-0`}>
        <Navbar />
      </div>
      <div id="about" className={`${sectionPadding} z-10`}>
        <AboutSection />
      </div>
      <Marquee />
      <div id="projects" className={`${sectionPadding} z-10`}>
        <ProjectSection />
      </div>
    </main>
  );
}