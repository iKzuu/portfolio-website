import { pixel } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, LinkSharp } from "pixelarticons/react";

const ProjectCard = ({ image, name, description, href, tech }) => {
  return (
    <div className="relative min-w-0 flex flex-col p-2 xl:p-4 gap-2 xl:gap-4 bg-light border-4 border-black shadow-accent-lg-hard">
      <div className="flex flex-row items-center justify-end gap-2">
        <div className="bg-green-500 w-4 h-4 xl:w-6 xl:h-6 rounded-xl"></div>
        <div className="bg-yellow-500 w-4 h-4 xl:w-6 xl:h-6 rounded-xl"></div>
        <div className="bg-red-500 w-4 h-4 xl:w-6 xl:h-6 rounded-xl"></div>
      </div>

      <figure className="relative w-full aspect-video overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        <div className="absolute inset-0 inset-shadow-black-hard pointer-events-none"></div>
      </figure>

      <div className="relative flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h1 className={`${pixel.className} min-w-0 wrap-break-word text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-dark`}>{name}</h1>
          <Link href={href} target="_blank" className="shrink-0 flex items-center p-1 xl:p-2 w-fit bg-accent border-2 border-black shadow-black-sm-hard">
            <ExternalLink color="black" className="w-4 h-4 md:w-4 md:h-4 xl:w-5 xl:h-5 2xl:w-8 2xl:h-8" />
          </Link>
        </div>

        <p className={`${pixel.className} text-sm md:text-base xl:text-2xl text-neutral`}>{description}</p>

        <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-auto pt-4">
          {tech.map((item, index) => (
            <span key={index} className="bg-neutral w-fit p-2 text-xs lg:text-base font-semibold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
