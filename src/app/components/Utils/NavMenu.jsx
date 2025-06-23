import NavLink from "./NavLink";

const navLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Projects",
        href: "#project"
    }
];

const NavMenu = () => {
    return (
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 font-bold mt-0">
            {
                navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
            }
        </ul>
    );
};

export default NavMenu;