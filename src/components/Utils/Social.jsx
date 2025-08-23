import Link from "next/link";
import Image from "next/image";

const Social = ({ href, iconSrc, alt, size = 45 }) => {
    return (
        <Link
            href={href}
            className="w-fit transition-transform duration-300 ease-in-out hover:scale-110"
        >
            <Image
                src={iconSrc}
                alt={alt}
                width={size}
                height={size}
            />
        </Link>
    );
};

const ContainerSocial = ({ links, gap = "gap-1"}) => {
    return (
        <div className={`flex flex-row ${gap}`}>
            {links.map((link, index) => (
                <Social 
                    key={index}
                    href={link.href}
                    iconSrc={link.iconSrc}
                    alt={link.alt}
                    size={link.size}
                />
            ))}
        </div>
    );
};

export { Social, ContainerSocial};