"use client"
import { useEffect, useState } from "react";
import NavLink from "../ui/NavLink";
import { Briefcase, CircleInfo, Home, Mail } from 'pixelarticons/react'

const sections = [
    "hero",
    "projects",
    "about",
    "contact"
];

const Navbar = () => {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const observers = [];

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                    }
                },
                {threshold: 0.6}
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, []);

    return (
        <nav className="flex flex-row items-center w-auto h-20 rounded-sm overflow-hidden bg-dark shadow-black-soft">
            <NavLink href="#hero" title="Home" Icon={Home} active={active === "hero"}/>
            <NavLink href="#about" title="About" Icon={CircleInfo} active={active === "about"}/>
            <NavLink href="#projects" title="Projects" Icon={Briefcase} active={active === "projects"}/>
            <NavLink href="#contact" title="Contact" Icon={Mail} active={active === "contact"}/>
        </nav>
    );
};

export default Navbar;