import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import ScrollVelo from "../components/Utils/ScrollVelo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f6f6f6]">
      <Navbar />
      {/* Hero */}
      <div className="mt-28 md:my-44 px-12 py-4">
        <HeroSection />
      </div>
      <ScrollVelo />
      {/* About */}
      <div className="px-10 md:px-0 md:py-0">
        <AboutSection />
      </div>
      <div>
        {/* <ProjectSection /> */}
      </div>
    </main>
  );
}