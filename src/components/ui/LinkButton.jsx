import { ContainerSocial } from "./Social";
import Button from "./Button";

const LinkButton = () => {

    const socialMediaData = [
        {
            href: "https://github.com/iKzuu",
            iconSrc: "images/icon/github-mark-white.svg",
            alt: "github-icon",
        },
        {
            href: "https://www.instagram.com/ikzuu_?igsh=MXBsajI5a2dmYnBr",
            iconSrc: "images/icon/instagram-white.svg",
            alt: "instagram-icon",
        },
        {
            href: "https://github.com/iKzuu",
            iconSrc: "images/icon/linkedin-white.svg",
            alt: "linkedin-icon",
        }
    ];

    return (
        <div className="relative z-20 flex flex-col justify-center items-center md:items-baseline gap-5 lg:bg-dark/40 lg:backdrop-blur-xs lg:rounded-sm lg:p-4">
            <ContainerSocial links={socialMediaData} gap="gap-4"/>
            <Button textbtn={"Download CV"} />
        </div>
    );
};

export default LinkButton;