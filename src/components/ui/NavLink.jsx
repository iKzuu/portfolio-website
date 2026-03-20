"use client"
import Link from "next/link";
import { jetbrains } from "../../lib/font";

const NavLink = ({ href, title, Icon, size = 28, active }) => {
    
    const handleClick = (e) => {
        e.preventDefault();

        const id = href.replace("#", "");
        const element = document.getElementById(id);

        if(element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            window.history.pushState(null, "", href);
        }
    }

    return (
        <Link href={href} onClick={handleClick} className={`
        flex flex-row
        items-center justify-center
        p-2 gap-2
        w-full h-full
        ${active ? "bg-neutral text-accent" : "text-light hover:bg-neutral"}
        `}>
            <Icon size={size}/>
            <h4 className={`${jetbrains.className} hidden md:block text-lg md:text-xl lg:text-2xl`}>{title}</h4>
        </Link>
    );
};

export default NavLink;