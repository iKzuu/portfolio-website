import { ContainerSocial } from "./Social";
import Button from "./Button";

const LinkButton = () => {

    const socialMediaData = [
        {
            href: "https://github.com/iKzuu",
            iconSrc: "images/icon/github-mark.svg",
            alt: "github-icon",
        },
        {
            href: "https://github.com/iKzuu",
            iconSrc: "images/icon/instagram.svg",
            alt: "instagram-icon",
        },
        {
            href: "https://github.com/iKzuu",
            iconSrc: "images/icon/linkedin.svg",
            alt: "linkedin-icon",
        }
    ];

    return (
        <div className="flex flex-col justify gap-5">
            <ContainerSocial links={socialMediaData} />
            <Button textbtn={"Resume"} />
        </div>
    );
};

export default LinkButton;