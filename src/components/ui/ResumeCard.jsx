import { jetbrains, poppins } from "@/lib/font";
import React from "react";


const ResumeCard = ({company, role, date, description, location}) => {

    const info = [company, location];

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <h1 className={`${poppins.className} text-xl font-semibold text-accent`}>{role}</h1>
                <span className={`${jetbrains.className} text-xs md:text-sm font-semibold px-2 py-1 w-fit text-black bg-light`}>
                    {date}
                </span>
            </div>
            <h4 className={`${jetbrains.className} text-xs md:text-sm text-semilight font-semibold wrap-break-words`}>{info.join(" • ")}</h4>
            <p className={`${jetbrains.className} text-xs lg:text-base font-normal`}>{description}</p>
        </div>
    );
}

export default ResumeCard;