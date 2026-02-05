import { pixel, poppins } from "../../lib/font";
import Lanyard from "../animations/Lanyard/Lanyard";
import Particles from "../animations/Particles/Particles";
import Tabs from "../ui/Tabs";

const AboutSection = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* background */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <Particles 
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* content */}
            <div className="z-10 grid grid-cols-1 sm:grid-cols-1 md:relative px-10 py-10 md:py-20 lg:pt-0 lg:pb-10 2xl:py-0">
                <div className="hidden lg:block m-0 p-0">
                    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                </div>
                <div className="w-auto lg:pl-10 lg:max-w-2xl lg:absolute lg:right-20 2xl:absolute 2xl:right-52">
                    <div className="space-y-5 lg:space-y-10 text-light">
                        <h1 className={`${pixel.className} text-center lg:text-start text-4xl lg:text-6xl font-extrabold`}>
                            About Me
                            <span className="text-custom-color text-6xl lg:text-9xl">.</span>
                        </h1>
                        <div className="bg-dark/40 backdrop-blur-xs p-6 rounded-lg shadow-around">
                            <p className={`${poppins.className} text-justify text-sm lg:text-2xl`}>
                                I’m passionate about building interfaces that are simple, modern, and easy to use. I believe good design isn’t about complexity, it’s about clarity and purpose. I enjoy turning ideas into clean, responsive layouts that users love.
                            </p>
                        </div>
                    </div>
                    <Tabs />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;