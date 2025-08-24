"use client"
import TabButton from "./TabButton";
import { pixel, poppins } from "@/app/ui/font";
import { useState, useTransition } from "react";
import Image from "next/image";

const data_tab = [
    {
        title: "Programming",
        id: "programming",
        content: (
            <ul className={`${poppins.className} list-disc list-inside pl-2 text-light md:text-lg space-y-2`}>
                <li className="marker:text-yellow-300">Javascript</li>
                <li className="marker:text-custom-color">Python</li>
                <li className="marker:text-blue-600">C++</li>
                <li className="marker:text-custom-color-2">Tailwind CSS</li>
                <li className="marker:text-green-400">Node.js</li>
            </ul>
        ),
    },
    {
        title: "Design",
        id: "design",
        content: (
            <ul className={`${poppins.className} list-disc list-inside pl-2 text-light md:text-lg space-y-2`}>
                <li className="marker:text-[#e08200]">Adobe Illustrator</li>
                <li className="marker:text-[#2d9def]">Adobe Photoshop</li>
                <li className="marker:text-[#2cbf2d]">CorelDraw</li>
                <li className="marker:text-[#E4004B]">Figma</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className={`${poppins.className} list-disc list-inside pl-2 text-light text-sm md:text-lg space-y-2`}>
                <li className="marker:text-[#882982] text-justify">
                    <span>STMIK AMIKOM Surakarta</span>
                    <span className="block text-xs md:text-sm text-semi-light text-wrap">Bachelor's Degree in Informatics (2024 - Present)</span>
                    <Image 
                        src="https://www.amikomsolo.ac.id/wp-content/uploads/2020/01/logo-amikom-surakarta-1-300x300.png"
                        alt="amikom"
                        width={300}
                        height={300}
                        className="mt-2 mb-4 w-[100px] md:w-[200px] h-auto"
                    />
                </li>
            </ul>
        ),
    }
];

const Tabs = () => {

    const [tab, setTab] = useState("programming");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <div className="flex flex-col mt-8 p-6 bg-dark/60 backdrop-blur-sm shadow-md shadow-custom-color/10 rounded-lg md:min-h-[400px]">
            <div className={`${pixel.className} flex flex-row justify-start gap-2 text-lg md:text-2xl`}>
                <TabButton
                    selectTab={() => handleTabChange("programming")}
                    active={tab === "programming"}
                >
                    {" "}
                    Programming{" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabChange("design")}
                    active={tab === "design"}
                >
                    {" "}
                    Design{" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                >
                    {" "}
                    Education{" "}
                </TabButton>
            </div>
            <div className="mt-8">
                {data_tab.find((t) => t.id === tab).content}
            </div>
        </div>
    );
};

export default Tabs;