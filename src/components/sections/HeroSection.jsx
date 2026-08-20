import React from "react";
import { jetbrains, pixel } from "../../lib/font";
import Lanyard from "../animations/Lanyard/Lanyard";
import Socials from "../ui/Socials";
import Lightbar from "../ui/LightBar";
import Chip from "../ui/Chip";
import PixelText from "../ui/PixelText";
import { GithubSolid, InstagramSolid } from "pixelarticons/react";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen">
            <Lightbar />

            <div className="flex flex-col py-10 lg:py-14 space-y-10 md:space-y-16 items-center h-screen justify-between">

                <div className={`${pixel.className} flex flex-row justify-between items-center w-full`}>
                    <Chip><h3 className="text-md md:text-xl">Anang Setiaji</h3></Chip>
                    <Chip><h3 className="text-md md:text-xl">Surakarta, Indonesia</h3></Chip>
                </div>

                {/* Lanyard large display*/}
                <div className="z-20 hidden md:block absolute inset-0 pointer-events-none w-screen h-full top-0 right-0 left-1/2 -translate-x-1/2">
                    <Lanyard position={[0, 0, 20]} offset={[0, 4.5, 0]}/>
                </div>

                {/* lanyard mobile phone display */}
                <div className="block md:hidden absolute inset-0 pointer-events-none w-screen h-full top-0 right-0 left-1/2 -translate-x-1/2">
                    <Lanyard position={[0, 0, 20]} offset={[0, 5.3, 0]}/>
                </div>

                <h1 className={`${pixel.className} text-6xl md:text-8xl xl:text-9xl font-bold text-center`}>
                    <PixelText clasName="text-accent">FRONTEND</PixelText>
                    <PixelText clasName="text-accent">DEVELOPER</PixelText>
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-stretch p-4 md:p-0 gap-6 md:gap-12 lg:gap-0 w-full rounded-sm bg-dark/60 backdrop-blur-sm shadow-accent-soft sm:bg-transparent sm:backdrop-blur-none sm:shadow-none">
                    <p className={`${pixel.className} text-sm sm:text-base md:text-lg sm:p-4 md:w-[50ch] lg:w-[45ch] xl:w-[40ch] leading-relaxed text-light sm:bg-dark/60 sm:backdrop-blur-sm sm:shadow-accent-soft`}>Transforming creative ideas into modern, responsive layouts through strategic design and functional simplicity.</p>
                    <div className="z-30 flex flex-row sm:flex-col sm:p-4 gap-6 w-full md:w-fit sm:bg-dark/60 sm:backdrop-blur-sm sm:shadow-accent-soft">
                        <Socials href="https://www.instagram.com/ikzuu_?igsh=MXBsajI5a2dmYnBr" name="instagram" Icon={InstagramSolid}/>
                        <Socials href="https://github.com/iKzuu" name="github" Icon={GithubSolid}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;