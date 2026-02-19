import React from "react";
import { pixel, poppins } from "../../lib/font";
import Image from "next/image";
import LinkButton from "../ui/LinkButton";
import Lanyard from "../animations/Lanyard/Lanyard";
import PixelImage from "../ui/PixelImage";
import TypeTextAnimation from "../animations/TypeAnimation/TypeTextAnimation";

const HeroSection = () => {
    return (
        <section className="lg:relative lg:min-h-screen lg:overflow-hidden">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between md:flex-row md:justify-between">

                <div className="flex flex-col space-y-6 text-left text-light md:text-left lg:text-left lg:absolute lg:bottom-40 lg:left-44 2xl:left-56 2xl:bottom-44">
                    <h1 className={`${pixel.className} mb-4 text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-extrabold`}>Hello, I'm <TypeTextAnimation /></h1>
                    <h3 className={`${poppins.className} text-md lg:text-xl 2xl:text-2xl mb-6`}>Frontend Developer & <br className="hidden sm:block lg:hidden"/> Graphic Designer</h3>
                    <div className="hidden sm:block md:block lg:block w-fit">
                        <LinkButton />
                    </div>
                    <p className="text-justify hidden sm:block sm:text-xs sm:w-[56%] md:block md:w-[64%] md:text-xs lg:text-md lg:w-[32%] 2xl:text-lg">Creating clean, modern interfaces focused on clarity and purpose, transforming ideas into simple, responsive, and <strong>user-friendly</strong> layouts.</p>
                </div>

                {/* Lanyard large display*/}
                <div className="hidden md:hidden lg:block absolute w-full inset-0 pointer-events-none top-0 right-0 left-0">
                    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} offset={[3, 4, 0]}/>
                </div>

                {/* mobile display */}
                <div className="flex flex-col space-y-6 lg:hidden mt-4 lg:mt-0">
                    <div className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] place-self-center">
                        <PixelImage />
                    </div>
                    <p className="w-full text-justify text-xs block sm:hidden md:hidden">Creating clean, modern interfaces focused on clarity and purpose, transforming ideas into simple, responsive, and <strong>user-friendly</strong> layouts.</p>
                    <div className="block sm:hidden md:hidden place-self-start lg:hidden">
                        <LinkButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;