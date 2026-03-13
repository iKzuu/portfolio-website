import { pixel } from "@/lib/font";

const ProjectSection = () => {
    return (
        <section>
            <div className="flex flex-col gap-10 justify-between">
                <div className="flex-1">
                    <h1 className={`${pixel.className} text-center lg:text-start text-4xl lg:text-6xl font-extrabold`}>
                        My Projects
                        <span className="text-accent text-6xl lg:text-9xl">.</span>
                    </h1>
                </div>
                <div className={`${pixel.className} flex flex-col items-center justify-center`}>
                    <h1>Mana yh..</h1>
                    <h1>Di tunggu yh lagi dibuat projectnya xddd</h1>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;