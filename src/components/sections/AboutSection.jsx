import React from "react";
import { pixel} from "../../lib/font";
import RetroHeading from "../ui/RetroHeading";
import Button from "../ui/Button";
import StatusBar from "../ui/StatusBar";
import PixelImage from "../ui/PixelImage";
import PixelText from "../ui/PixelText";

const AboutSection = () => {
    return (
        <section className="flex flex-col py-8">
            <section className="relative z-10 p-5 flex flex-col xl:flex-row xl:justify-between items-center gap-6 bg-dark/60 backdrop-blur-sm shadow-accent-soft">
                <div className="z-20 absolute -top-3 right-0 rotate-6">
                    <RetroHeading text="Me?"/>
                </div>

                <div className="flex flex-col gap-5 md:gap-6 lg:gap-10 order-1 md:order-0">
                    <h1 className={`${pixel.className} font-semibold self-start text-4xl 2xl:text-6xl`}>
                        <PixelText>Who Am I?</PixelText>
                    </h1>
                    <p className={`${pixel.className} text-sm bg- md:text-base lg:text-xl 2xl:text-2xl md:max-w-[80ch] 2xl:max-w-[60ch]`}>Frontend Developer with experience in JavaScript, Next.js, and Flutter, focused on building responsive, modern, and user-friendly web and mobile applications.</p>

                    <div className="hidden xl:flex flex-col gap-3">
                        <StatusBar label="Music" value="85%" color="bg-accent"/>
                        <StatusBar label="Coding" value="60%" color="bg-accent"/>
                        <StatusBar label="Coffee" value="100%" color="bg-accent"/>
                    </div>

                    <div className="hidden xl:flex flex-row justify-between items-end gap-4">
                        <Button textbtn="Download CV"/>
                        <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-light/40">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Available for new projects
                        </div>
                    </div>
                </div>

                <figure className="z-10 relative w-72 md:w-80 xl:w-100 2xl:w-120 aspect-square bg-light border-4 border-accent shadow-accent-hard shrink-0 order-2 md:order-2">
                    <PixelImage />
                </figure>

                <div className="flex xl:hidden items-center gap-3 text-xs md:text-sm font-mono text-light/40 order-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for new projects
                </div>

                <div className="w-full flex xl:hidden flex-col md:justify-center gap-3 order-4">
                    <StatusBar label="Music" value="85%" color="bg-accent"/>
                    <StatusBar label="Coding" value="60%" color="bg-accent"/>
                    <StatusBar label="Coffee" value="100%" color="bg-accent"/>
                </div>


                <div className="w-full flex flex-col gap-4 xl:hidden order-4">
                    <Button textbtn="Download CV"/>
                </div>
            </section>
        </section>
    );
};

export default AboutSection;