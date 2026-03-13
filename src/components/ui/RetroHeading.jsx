import { pixel } from "@/lib/font";

const RetroHeading = ({text}) => {
    return (
        <div className="px-4 py-2 md:px-8 md:py-4 w-fit border-2 border-black bg-white shadow-accent-hard">
            <h1 className={`${pixel.className} text-xl lg:text-2xl text-black font-semibold`}>{text}</h1>
        </div>
    );
}

export default RetroHeading;