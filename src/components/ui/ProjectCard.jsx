import { pixel } from "@/lib/font";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ image, name, description, href, tech }) => {
  return (
    <div className="relative flex-1 flex flex-col p-2 xl:p-4 gap-2 xl:gap-4 bg-light border-4 border-black shadow-accent-lg-hard">

      <div className="flex flex-row items-center justify-end gap-2">
        <div className="bg-green-500 w-4 h-4 xl:w-6 xl:h-6 rounded-xl"></div>
        <div className="bg-yellow-500 w-4 h-4 xl:w-6 xl:h-6 rounded-xl"></div>
        <div className="bg-red-500 w-4 h-4 xl:w-6 xl:h-6 rounded-xl"></div>
      </div>

      <figure className="relative w-full aspect-video overflow-hidden">
        <Image src="/images/me-kazuma.png" alt="image" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        <div className="absolute inset-0 inset-shadow-black-hard pointer-events-none"></div>
      </figure>

      <div className="relative flex flex-col">

        <h1 className={`${pixel.className} text-2xl md:text-4xl xl:text-6xl font-semibold text-dark`}>name</h1>

        <p className={`${pixel.className} text-sm md:text-base xl:text-2xl text-neutral max-w-[30ch]`}>An android application for viewing information about anime or manga that uses the API from Jikan API.</p>

        <Link href="" className="absolute top-0 right-0 flex items-center p-2 w-fit bg-accent border-2 border-black shadow-black-sm-hard">
          <LinkIcon color="black" className="w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8"/>
        </Link>

        <div className="flex flex-row items-center gap-2">
          {/* mapping tech stack yg digunakan untuk membuat project */}
          <span className="bg-neutral w-fit p-1 text-xs font-semibold">Dart</span>
          <span className="bg-neutral w-fit p-1 text-xs font-semibold">Flutter</span>
          <span className="bg-neutral w-fit p-1 text-xs font-semibold">Python</span>
        </div>
        
      </div>

    </div>
  );
};

export default ProjectCard;
