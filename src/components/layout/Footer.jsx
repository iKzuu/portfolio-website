import Link from "next/link";
import { pixel } from "@/lib/font";
import PixelText from "../ui/PixelText";
import { ArrowBarUp, Github, Instagram } from "pixelarticons/react";
import CvPreview from "../cv/CvPreview";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-16 border-t-4 border-black bg-light text-dark">
      <div className="px-4 py-8 md:px-24 lg:px-40 2xl:px-64">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col">
            <h2 className={`${pixel.className} self-start text-2xl font-bold md:text-3xl text-accent`}>
                <PixelText>
                    ANANG SETIAJI
                </PixelText>
            </h2>

            <p className={`${pixel.className} text-sm text-neutral md:text-base`}>Building things for the web, one project at a time.</p>
          </div>

          <nav className={`${pixel.className} flex flex-wrap gap-4 text-base font-semibold`}>
            <Link href="/#hero" className="hover:text-accent transition-colors">
              Home
            </Link>

            <Link href="/#about" className="hover:text-accent transition-colors">
              About
            </Link>

            <Link href="/projects" className="hover:text-accent transition-colors">
              Projects
            </Link>

            <Link href="/#contact" className="hover:text-accent transition-colors">
              Contact
            </Link>

            <CvPreview variant="footer"/>
          </nav>

          <div className="flex items-center gap-3">
            <Link 
            href="https://github.com/iKzuu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="border-2 border-black bg-dark p-3 text-light shadow-accent-sm-hard transition-transform hover:-translate-y-1">
                <Github />
            </Link>

            <Link 
            href="https://www.instagram.com/ikzuu_?igsh=MXBsajI5a2dmYnBr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="border-2 border-black bg-dark p-3 text-light shadow-accent-sm-hard transition-transform hover:-translate-y-1">
                <Instagram />
            </Link>

            <Link 
            href="/#hero"
            aria-label="Back to top"
            className="border-2 border-black bg-dark p-3 text-light shadow-accent-sm-hard transition-transform hover:-translate-y-1">
                <ArrowBarUp />
            </Link>
          </div>

        </div>
        <div className="mt-8 border-t-2 border-black pt-4">
            <p className={`${pixel.className} text-sm text-neutral`}>
                © {currentYear} Anang Setiaji. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
