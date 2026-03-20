import React from "react";
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

                    <p className={`${jetbrains.className} text-sm lg:text-lg text-justify p-6 rounded-sm bg-dark/60 backdrop-blur-xs shadow-accent-soft lg:max-w-[80%] 2xl:max-w-1/2`}>Frontend Developer with experience in JavaScript, Next.js, and Flutter, focused on building responsive, modern, and user-friendly web and mobile applications.</p>
                </div>

                <div className="z-10 flex flex-col items-end gap-4">
                    <RetroHeading text="Work Experience"/>
                    <div className="flex flex-col p-2 md:p-4 gap-4 w-full lg:max-w-[80%] 2xl:max-w-1/2 backdrop-blur-sm shadow-accent-soft">
                        {data.workExperience.map((exp, index) => (
                            <React.Fragment key={exp.id}>
                                <ResumeCard 
                                    company={exp.company}
                                    role={exp.role}
                                    date={exp.date}
                                    description={exp.desc}
                                    arrangement={exp.arrangement}
                                    type={exp.type}
                                    location={exp.location}
                                />

                                {index !== data.workExperience.length - 1 && (
                                    <div className="border-t-2 border-neutral"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="z-10 flex flex-col gap-4">
                    <RetroHeading text="Education"/>
                    <div className="flex flex-col p-2 md:p-4 gap-4 w-full lg:max-w-[80%] 2xl:max-w-1/2 backdrop-blur-sm shadow-accent-soft">
                        {data.education.map((edu) => (
                            <ResumeCard 
                                key={edu.id}
                                company={edu.company}
                                role={edu.role}
                                date={edu.date}
                                description={edu.desc}
                                location={edu.location}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;