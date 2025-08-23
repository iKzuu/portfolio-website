import { pixel, poppins } from "../app/ui/font";
import Lanyard from "./Lanyard/Lanyard";
import Tabs from "./Utils/Tabs";

const AboutSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-1 relative">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                <div className="w-auto md:pl-10 md:max-w-2xl absolute right-60">
                    <div className="space-y-5 lg:space-y-10">
                        <h1 className={`${pixel.className} text-[#272727] text-center md:text-start text-4xl lg:text-6xl font-extrabold`}>
                            About Me
                            <span className="text-[#78AEFF] text-6xl md:text-9xl">.</span>
                        </h1>
                        <p className={`${poppins.className} text-[#272727] text-justify text-sm lg:text-2xl`}>
                            I’m Anang Setiaji, a junior frontend developer and graphic designer who loves coding with JavaScript, Python, and C++. I build responsive websites with Next.js and Tailwind CSS, and create visual designs using Adobe Illustrator and CorelDRAW.
                        </p>
                    </div>
                    <Tabs />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;