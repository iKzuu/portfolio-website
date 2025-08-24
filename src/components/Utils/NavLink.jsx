import Link from "next/link";
import { pixel } from "../../app/ui/font";

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className={`${pixel.className} block py-2 pl-3 pr-4 text-light text-xl md:text-2xl`}>
            {title}
        </Link>
    );
};

export default NavLink;