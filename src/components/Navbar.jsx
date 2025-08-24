"use client"
import Image from "next/image";
import Link from "next/link";
import { NavMenu, navLinks } from "./Utils/NavMenu";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/60 backdrop-blur-sm shadow-md shadow-custom-color/10">
            <div className={`flex flex-wrap items-center justify-between mx-auto py-5 px-10`}>
                <Link href={'/'} className="bg-white rounded-4xl">
                    <Image
                        src="/images/ikzuu.png"
                        alt="ikzuu"
                        width={55}
                        height={55}
                    />
                </Link>
                <NavMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;