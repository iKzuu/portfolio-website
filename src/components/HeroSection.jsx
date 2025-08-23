import React from "react";
import { pixel, poppins } from "../app/ui/font";
import Image from "next/image";
import LinkButton from "./Utils/LinkButton";
import PixelImage from "./Utils/PixelImage";
import TypeTextAnimation from "./TypeAnimation/TypeTextAnimation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                <div className="col-span-6 place-self-center text-center sm:text-left">
                    <h1 className={`${pixel.className} text-[#272727] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold`}>Hello, I'm <br /> <TypeTextAnimation /></h1>
                    <h3 className={`${poppins.className} text-[#272727] text-xl lg:text-2xl mb-6`}>Junior Frontend Developer <br /> & Graphic Designer.</h3>
                    {/* <p className={`${poppins.className} text-[#272727] hidden md:block text-lg max-w-xl text-justify`}>I’m passionate about building interfaces that are simple, modern, and easy to use. I believe good design isn’t about complexity, it’s about clarity and purpose. I enjoy turning ideas into clean, responsive layouts that users love.</p> */}
                    <div className="hidden lg:block mt-14">
                        <LinkButton />
                    </div>
                </div>
                <div className="col-span-6 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-xl bg-[#f6f6f6] w-[300px] h-[300px] relative border-4 border-[#78AEFF] block lg:hidden">
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
                    <div className="block md:hidden mt-6">
                        <p className={`${poppins.className} text-[#272727] md:block text-sm max-w-xl text-justify`}>I’m passionate about building interfaces that are simple, modern, and easy to use. I believe good design isn’t about complexity, it’s about clarity and purpose. I enjoy turning ideas into clean, responsive layouts that users love.</p>
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