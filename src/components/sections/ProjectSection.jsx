import { pixel } from "@/lib/font";
import PixelText from "../ui/PixelText";
import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";
import { getProjects } from "@/services/projectService";
import { getProjectsImageUrl } from "@/lib/storage";
import { ChevronRight } from "pixelarticons/react";

const ProjectSection = async () => {
  const projects = await getProjects({ limit: 2 });

  return (
    <section className="flex flex-col py-6 md:py-8 xl:py-10 gap-4 md:gap-8 xl:gap-10">
      <h1 className={`${pixel.className} text-4xl md:text-6xl xl:text-8xl font-bold self-start`}>
        <PixelText>MY PROJECTS</PixelText>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} image={getProjectsImageUrl(project.image_key)} name={project.name} description={project.description} href={project.github_url} tech={project.tech} />
        ))}
      </div>
      <Link
        href="/projects"
        className="group relative mt-4 flex w-fit items-stretch border-4 border-black bg-light text-dark shadow-[6px_6px_0px_#74aeff] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#74aeff] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#74aeff]"
      >
        <div className="flex flex-col justify-center px-5 py-3 md:px-6">
          <span className={`${pixel.className} text-xs font-semibold text-accent`}>EXPLORE</span>
          <span className={`${pixel.className} text-lg font-bold md:text-xl lg:text-2xl`}>See All Projects</span>
        </div>

        <div className="flex items-center border-l-4 border-black bg-accent px-4">
          <ChevronRight className="text-light size-7 transition-transform duration-200 group-hover:animate-arrow-move" />
        </div>
        {/* <ArrowBigRight color="#74aeff" className="group-hover:animate-arrow-move" /> */}
      </Link>
    </section>
  );
};

export default ProjectSection;
