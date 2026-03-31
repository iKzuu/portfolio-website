"use client";
import { pixel } from "@/lib/font";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const StatusBar = ({label, value, color}) => {
    const barRef = useRef(null);
    const textRef = useRef(null);

    const numericValue = parseInt(value);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                barRef.current,
                {width: "0%"},
                {
                    width: value,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: barRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );

            const counter = { val: 0 };
            gsap.to(counter, {
                val: numericValue,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: barRef.current,
                    start: "top 90%",
                },
                onUpdate: () => {
                    if (textRef.current) {
                        textRef.current.innerText = `${Math.ceil(counter.val)}%`;
                    }
                },
            });
        });
        return () => ctx.revert();
    }, [value, numericValue]);

    return (
        <div className={`${pixel.className} flex items-center gap-8`}>
            <span className="text-xs md:text-sm text-light w-10 uppercase tracking-widest">{label}</span>
            <div className="flex-1 h-4 bg-neutral-800 border-2 border-light/10 p-0.5 overflow-hidden">
                <div ref={barRef} className={`h-full ${color} shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]`} style={{width: value}}></div>
            </div>
            <span ref={textRef} className="text-xs text-light/50 w-8 text-right">0%</span>
        </div>
    );
}

export default StatusBar;