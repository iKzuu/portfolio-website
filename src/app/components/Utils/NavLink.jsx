import Link from "next/link";
import { pixel } from "../../ui/font";

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className={`${pixel.className} block py-2 pl-3 pr-4 text-[#272727] sm:text-xl`}>
            {title}
        </Link>
    );
};

export default NavLink;