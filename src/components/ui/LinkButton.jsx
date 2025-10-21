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
        <div className="flex flex-row items-center md:items-baseline md:flex-col gap-5">
            <ContainerSocial links={socialMediaData} />
            <Button textbtn={"Resume"} />
        </div>
    );
};

export default LinkButton;