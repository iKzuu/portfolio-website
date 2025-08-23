import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import { pixel } from "@/app/ui/font";

const ScrollVelo = () => {
    return (
        <div>
            <div className="bg-linear-to-r from-[#78AEFF] to-[#84FFEB] h-[120px] lg:h-40 flex items-center justify-center relative overflow-hidden">
                <div className="bg-[#272727] py-6 transform rotate-3 lg:rotate-1 absolute inset-x-0 w-[115%] left-1/2 -translate-x-1/2">
                    <ScrollVelocity
                        texts={['Develop - Design -']}
                        velocity={100}
                        className={`${pixel.className} custom-scroll-text`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScrollVelo;