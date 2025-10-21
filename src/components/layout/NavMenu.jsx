"use client";
import NavLink from "../ui/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

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

const NavMenu = ({navbarOpen, setNavbarOpen}) => {
    return (
        <>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border border-semi-light rounded-md text-semi-light">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border border-semi-light rounded-md text-semi-light">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 font-bold mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export { NavMenu, navLinks };