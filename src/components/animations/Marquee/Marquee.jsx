import { pixel } from "@/lib/font";

const items = ["Design", "Develop"];

const Marquee = () => {

    const repeatCount = Math.ceil(20 / items.length);
    const loopItems = Array(repeatCount).fill(items).flat();

    return (
        <div className="relative flex overflow-hidden bg-dark border-y-2 border-neutral py-4 -rotate-2">
            <div className="flex animate-marquee whitespace-nowrap">
                {loopItems.map((item, index) => (
                    <span key={index} className={`${pixel.className} text-2xl text-light mx-10`}>
                        {item}
                    </span>
                ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark to-transparent"></div>
        </div>
    );
}

export default Marquee;