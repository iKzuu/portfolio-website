import { pixel } from "@/lib/font";
import Link from "next/link";

const Socials = ({href, Icon, size = 28, name}) => {
    return (
        <Link href={href} target="_blank" className="flex flex-row gap-2 items-end">
            <div className="bg-light p-2 border-2 border-black rounded-sm shadow-accent-hard text-dark">
                <Icon size={size}/>
            </div>
            <h4 className={`${pixel.className} font-semibold text-base md:text-xl`}>{name}</h4>
        </Link>
    );
}

export default Socials;