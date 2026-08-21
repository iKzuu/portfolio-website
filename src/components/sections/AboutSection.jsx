import React from "react";
import { pixel } from "../../lib/font";
import RetroHeading from "../ui/RetroHeading";
import StatusBar from "../ui/StatusBar";
import PixelImage from "../ui/PixelImage";
import PixelText from "../ui/PixelText";
import CvPreview from "../cv/CvPreview";
import DeveloperStatus from "../ui/DeveloperStatus";
import TechStack from "../ui/TechStack";

const AboutSection = () => {
  return (
    <section className="flex flex-col py-8">
      <section className="relative z-10 p-5 grid grid-cols-1 items-center gap-6 bg-dark/60 backdrop-blur-sm shadow-accent-soft xl:grid-cols-[minmax(0,1fr)_auto] xl:items-stretch xl:gap-x-8 xl:gap-y-6">
        <div className="absolute -top-3 right-0 z-20 rotate-6">
          <RetroHeading text="Me?" />
        </div>

        <div className="min-w-0 xl:col-start-1 xl:row-start-1">
          <div className="flex flex-col gap-5">
            <h1 className={`${pixel.className} font-semibold self-start text-4xl 2xl:text-6xl`}>
              <PixelText>Who Am I?</PixelText>
            </h1>
            <p className={`${pixel.className} text-sm md:text-base lg:text-xl 2xl:text-2xl md:max-w-[80ch] 2xl:max-w-[60ch]`}>
              Frontend Developer with experience in JavaScript, Next.js, and Flutter, focused on building responsive, modern, and user-friendly web and mobile applications.
            </p>
          </div>
        </div>

        <figure className="relative z-10 w-72 aspect-square bg-light justify-self-center border-4 border-accent shadow-accent-hard md:w-80 xl:col-start-2 xl:row-start-1 xl:row-span-3 xl:w-100 xl:self-center 2xl:w-120">
          <PixelImage />
        </figure>

        <div className="w-full min-w-0 xl:col-start-1 xl:row-start-2">
            <DeveloperStatus />
        </div>

        <div className="w-full min-w-0 xl:col-start-1 xl:row-start-3">
            <TechStack />
        </div>

      </section>
    </section>
  );
};

export default AboutSection;
