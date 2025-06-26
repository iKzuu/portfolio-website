"use client"
import TabButton from "./TabButton";
import { pixel, poppins } from "@/app/ui/font";
import { useState, useTransition } from "react";

const data_tab = [
    {
        title: "Programming",
        id: "programming",
        content: (
            <ul className={`${poppins.className} list-disc list-inside pl-2 text-[#272727] md:text-lg space-y-2`}>
                <li>Javascript</li>
                <li>Python</li>
                <li>C++</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
            </ul>
        ),
    },
    {
        title: "Design",
        id: "design",
        content: (
            <ul className={`${poppins.className} list-disc list-inside pl-2 text-[#272727] md:text-lg space-y-2`}>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>CorelDraw</li>
                <li>Figma</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className={`${poppins.className} list-disc list-inside pl-2 text-[#272727] md:text-lg space-y-2`}>
                <li>STMIK AMIKOM Surakarta</li>
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
        <div className="flex flex-col">
            <div className={`${pixel.className} flex flex-row justify-start gap-2 mt-8 text-lg md:text-2xl`}>
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