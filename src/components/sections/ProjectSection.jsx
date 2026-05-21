import { pixel } from "@/lib/font";
import PixelText from "../ui/PixelText";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

const ProjectSection = () => {
    return (
        <section className="flex flex-col py-6 md:py-8 xl:py-10 gap-4 md:gap-8 xl:gap-10">
            <h1 className={`${pixel.className} text-4xl md:text-6xl xl:text-8xl font-bold self-start`}><PixelText>MY PROJECTS</PixelText></h1>
            <div className="flex flex-col sm:flex-row gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        href={project.href}
                        tech={project.tech}
                    />
                ))}
            </div>
            <Link href="https://github.com/iKzuu" className="group flex flex-row gap-2 p-4 mt-4 md:mt-0 items-center bg-light w-fit">
                <span className={`${pixel.className} text-dark text-lg md:text-xl lg:text-2xl font-semibold`}>See All Projects</span>
                <ArrowBigRight color="#74aeff" className="group-hover:animate-arrow-move"/>
            </Link>
        </section>
    );
};

export default ProjectSection;