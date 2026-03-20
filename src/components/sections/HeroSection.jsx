import React from "react";
import { jetbrains, pixel, poppins } from "../../lib/font";
import Lanyard from "../animations/Lanyard/Lanyard";
import PixelImage from "../ui/PixelImage";
import TypeTextAnimation from "../animations/TypeAnimation/TypeTextAnimation";
import Socials from "../ui/Socials";
import Lightbar from "../ui/LightBar";
import Chip from "../ui/Chip";
import { SiGithub, SiInstagram } from "react-icons/si";

const HeroSection = () => {
    return (
        <section className="relative w-full lg:min-h-screen">
            <Lightbar />

            <div className="flex flex-col py-10 lg:py-14 space-y-10 md:space-y-16 items-center lg:h-screen lg:justify-between">

                <div className={`${pixel.className} flex flex-row justify-between items-center w-full`}>
                    <Chip text="Anang Setiaji"/>
                    <Chip text="Surakarta, Indonesia"/>
                </div>

                {/* Lanyard large display*/}
                <div className="z-20 hidden lg:block absolute inset-0 pointer-events-none w-screen h-full top-0 right-0 left-1/2 -translate-x-1/2">
                    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} offset={[0, 4.5, 0]}/>
                </div>

                {/* mobile display */}
                <div className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] block lg:hidden place-self-center">
                    <PixelImage />
                </div>

                <h1 className={`${jetbrains.className} hidden lg:block text-9xl text-center`}>Frontend <br /> Developer</h1>

                <div className="flex flex-col gap-8 items-center w-full">
                    <div className="z-10 flex lg:hidden flex-col p-2 md:p-4 w-full lg:max-w-[60%] justify-center md:justify-start bg-accent inset-shadow-black-hard border-2 border-accent">
                        <h1 className={`${pixel.className} text-2xl md:text-4xl font-semibold`}><TypeTextAnimation /></h1>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-stretch p-4 md:p-0 gap-6 md:gap-12 lg:gap-0 w-full rounded-sm bg-dark/60 backdrop-blur-sm shadow-accent-soft md:bg-transparent md:backdrop-blur-none md:shadow-none">
                        <p className={`${jetbrains.className} text-sm text-justify md:text-left md:text-lg md:p-4 lg:max-w-2/5 2xl:max-w-1/4 leading-relaxed text-light md:bg-dark/60 md:backdrop-blur-sm md:shadow-accent-soft`}>Transforming creative ideas into modern, responsive layouts through strategic design and functional simplicity.</p>
                        <div className="z-30 flex flex-row md:flex-col p-4 gap-6 w-full md:w-fit md:bg-dark/60 md:backdrop-blur-sm md:shadow-accent-soft">
                            <Socials href="https://www.instagram.com/ikzuu_?igsh=MXBsajI5a2dmYnBr" name="instagram" Icon={SiInstagram}/>
                            <Socials href="https://github.com/iKzuu" name="github" Icon={SiGithub}/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;