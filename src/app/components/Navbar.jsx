import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenu from "./Utils/NavMenu";

const Navbar = () => {
    return(
        <nav>
            <div className={`flex flex-wrap items-center justify-between mx-auto p-8`}>
                <Link href={'/'} className="bg-white rounded-xl">
                    <Image 
                        src="/images/ikzuu.png"
                        alt="ikzuu"
                        width={55}
                        height={55}
                    />
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <NavMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;