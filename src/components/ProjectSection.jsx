import { pixel } from "@/app/ui/font";

const ProjectSection = () => {
    return (
        <section>
            <div className="flex flex-row justify-between">
                <div className="flex-1">
                    <h1 className={`${pixel.className} text-center lg:text-start text-4xl lg:text-6xl font-extrabold`}>
                        My Projects
                        <span className="text-custom-color text-6xl lg:text-9xl">.</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;