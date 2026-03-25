import { jetbrains, poppins } from "@/lib/font";
import React from "react";


const ResumeCard = ({company, role, date, description, arrangement, type, location}) => {

    const tags = [arrangement, type];
    const info = [company, location];

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <h1 className={`${poppins.className} text-xl lg:text-2xl font-semibold text-accent`}>{role}</h1>
                <div className="flex flex-row items-center gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className={`${jetbrains.className} text-xs px-2 py-1 text-black ${tag ? "bg-light" : ""}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <h4 className={`${jetbrains.className} text-xs md:text-sm text-semilight lg:text-lg font-semibold wrap-break-words`}>{info.join(" • ")}</h4>
            <h4 className={`${jetbrains.className} text-xs lg:text-lg font-semibold`}>{date}</h4>
            <p className={`${poppins.className} text-xs lg:text-base font-normal`}>{description}</p>
        </div>
    );
}

export default ResumeCard;