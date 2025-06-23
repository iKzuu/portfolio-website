import React from "react";
import { pixel, poppins } from "../ui/font";
import Image from "next/image";
import LinkButton from "./Utils/LinkButton";
import PixelImage from "./Utils/PixelImage";
import TypeTextAnimation from "./TypeAnimation/TypeTextAnimation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className={`${pixel.className} text-[#272727] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold`}>Hello, I'm <br /> <TypeTextAnimation /></h1>
                    <p className={`${poppins.className} text-[#272727] text-lg lg:text-2xl mb-6`}>Junior Front-End Developer <br /> & Graphic Designer.</p>
                    <div className="hidden lg:block">
                        <LinkButton />
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-xl bg-[#D9D9D9] w-[300px] h-[300px] relative border-4 border-[#78AEFF] block lg:hidden">
                        <Image
                            src="/images/ikzuu.png"
                            alt="ikzuu"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <PixelImage />
                    </div>
                    <div className="mt-5 block md:hidden">
                        <LinkButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;