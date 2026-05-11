import { pixel } from "@/lib/font";
import PixelText from "../ui/PixelText";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

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
        </section>
    );
};

export default ProjectSection;