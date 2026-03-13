import { jetbrains} from "../../lib/font";
import ResumeCard from "../ui/ResumeCard";
import RetroHeading from "../ui/RetroHeading";
import data from "@/data/resume.json";

const AboutSection = () => {
    return (
        <section>
            <div className="flex flex-col py-8 gap-8">
                <div className="z-10 flex flex-col gap-4">
                    <RetroHeading text="About Me"/>

                    <p className={`${jetbrains.className} text-sm lg:text-lg text-justify p-6 rounded-sm bg-dark/60 backdrop-blur-xs shadow-accent-soft lg:max-w-[80%] 2xl:max-w-1/2`}>I’m passionate about building interfaces that are simple, modern, and easy to use. I believe good design isn’t about complexity, it’s about clarity and purpose. I enjoy turning ideas into clean, responsive layouts that users love.</p>
                </div>

                <div className="z-10 flex flex-col items-end gap-4">
                    <RetroHeading text="Work Experience"/>
                    <div className="flex flex-col gap-4 sm:w-full lg:max-w-[80%] 2xl:max-w-1/2">
                        {data.workExperience.map((exp) => (
                            <ResumeCard 
                                key={exp.id}
                                company={exp.company}
                                role={exp.role}
                                date={exp.date}
                                description={exp.desc}
                            />
                        ))}
                    </div>
                </div>

                <div className="z-10 flex flex-col gap-4">
                    <RetroHeading text="Education"/>
                    <div className="flex flex-col gap-4 sm:w-full lg:max-w-[80%] 2xl:max-w-1/2">
                        {data.education.map((edu) => (
                            <ResumeCard 
                                key={edu.id}
                                company={edu.company}
                                role={edu.role}
                                date={edu.date}
                                description={edu.desc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;