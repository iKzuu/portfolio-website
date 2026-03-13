import { jetbrains, pixel, poppins } from "@/lib/font"

const ResumeCard = ({company, role, date, description}) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 rounded-sm justify-center md:items-start lg:items-center backdrop-blur-sm shadow-accent-soft">
            <h1 className={`${pixel.className} text-lg lg:text-2xl font-semibold`}>{company}</h1>
            <div className="bg-neutral w-full h-[2px] md:w-[2px] md:h-auto md:self-stretch"></div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <h1 className={`${jetbrains.className} text-sm lg:text-lg font-semibold`}>{role}</h1>
                    <h4 className={`${jetbrains.className} text-xs lg:text-sm font-medium`}>{date}</h4>
                </div>

                <p className={`${jetbrains.className} text-xs lg:text-base text-justify font-normal`}>{description}</p>
            </div>
        </div>
    );
}

export default ResumeCard;