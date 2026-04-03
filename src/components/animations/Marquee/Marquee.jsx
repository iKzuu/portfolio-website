import { pixel } from "@/lib/font";
import { useMemo } from "react";

const items = ["Frontend", "Developer"];

const Marquee = () => {

    const loopItems = useMemo(() => {
        const repeatCount = Math.ceil(20 / items.length);
        return Array(repeatCount).fill(items).flat();
    }, []);

    return (
        <div className="relative flex overflow-hidden bg-dark border-y-2 border-neutral py-4">
            <div className="flex animate-marquee whitespace-nowrap">
                {loopItems.map((item, index) => (
                    <span key={index} className={`${pixel.className} text-2xl 2xl:text-4xl text-light mx-10`}>
                        {item}
                    </span>
                ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-dark to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-dark to-transparent"></div>
        </div>
    );
}

export default Marquee;