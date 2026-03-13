import { pixel } from "@/lib/font";

const items = ["Design", "Develop", "Design", "Develop", "Design", "Develop"];

const Marquee = () => {

    const sets = [1,2,3,4];

    return (
        <div className="relative flex overflow-hidden bg-dark border-y-2 border-neutral py-4 -rotate-2">
            <div className="flex animate-marquee whitespace-nowrap">
                {sets.map((set) => (
                    <div key={set} className="flex">
                        {items.map((item, index) => (
                            <span key={`${set}-${index}`} className={`${pixel.className} text-2xl text-light mx-10`}>
                                {item}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark to-transparent"></div>
        </div>
    );
}

export default Marquee;