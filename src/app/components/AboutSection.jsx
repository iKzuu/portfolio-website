import { pixel, poppins } from "../ui/font";
import Lanyard from "./Lanyard/Lanyard";
import Tabs from "./Utils/Tabs";

const AboutSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="hidden lg:block">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                </div>
                <div className="w-auto md:pl-10 md:max-w-2xl">
                    <div className="space-y-5 lg:space-y-10">
                        <h1 className={`${pixel.className} text-[#272727] text-center md:text-start text-4xl lg:text-6xl font-extrabold`}>
                            About Me
                            <span className="text-[#78AEFF] text-6xl md:text-9xl">.</span>
                        </h1>
                        <p className={`${poppins.className} text-[#272727] text-justify text-md lg:text-2xl`}>I’m passionate about building interfaces that are simple, modern, and easy to use. I believe good design isn’t about complexity, it’s about clarity and purpose. I enjoy turning ideas into clean, responsive layouts that users love.</p>
                    </div>
                    <Tabs />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;