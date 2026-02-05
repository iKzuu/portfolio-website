"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { navLinks, NavMenu } from "./NavMenu";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-4 left-4 right-4 z-50 bg-dark/60 backdrop-blur-sm shadow-[0_0_20px_0px] shadow-custom-color/10 rounded-2xl">
            <div className={`flex flex-wrap items-center justify-between mx-auto py-5 px-6`}>
                <Link href={'/'} className="bg-white rounded-md shadow-around">
                    <Image
                        src="/images/ikzuu.png"
                        alt="ikzuu"
                        width={56}
                        height={56}
                        className="w-[36px] md:w-[56px] h-auto"
                    />
                </Link>
                <NavMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;