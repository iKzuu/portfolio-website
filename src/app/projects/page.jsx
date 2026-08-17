import Footer from "@/components/layout/Footer";
import PixelText from "@/components/ui/PixelText";
import ProjectCard from "@/components/ui/ProjectCard";
import { pixel } from "@/lib/font";
import { getProjectsImageUrl } from "@/lib/storage";
import { getProjects } from "@/services/projectService";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects ? Anang Setiaji",
  description: "A Collection of projects developed by Anang Setiaji.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <main className="relative z-10 min-h-screen px-4 py-10 md:px-24 lg:px-40 2xl:px-64">
        <Link href="/#projects" className="group mb-10 flex w-fit items-center gap-2 bg-light p-3 text-dark border-2 border-black shadow-accent-hard">
          <ArrowLeft />

          <span className={`${pixel.className} text-lg font-semibold`}>Back</span>
        </Link>

        <div className="mb-10 flex flex-col gap-3">
          <h1 className={`${pixel.className} self-start font-bold text-4xl md:text-6xl xl:text-8xl`}>
            <PixelText>ALL PROJECTS</PixelText>
          </h1>

          <p className={`${pixel.className} max-w2l text-lg text-semilight md:text-xl`}>A collection of projects I have built while learning, experimenting, and solving real-world problems.</p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cccols-1 gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} image={getProjectsImageUrl(project.image_key)} name={project.name} description={project.description} href={project.github_url} tech={project.tech} />
            ))}
          </div>
        ) : (
          <div className="border-4 border-black bg-light p-8 text-center shadow-accent-lg-hard">
            <p className={`${pixel.className} text-xl text-dark`}>No projects available yet.</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
