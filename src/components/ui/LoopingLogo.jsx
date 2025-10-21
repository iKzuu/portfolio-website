import LogoLoop from '../animations/LogoLoop/LogoLoop';
import { SiJavascript, SiPython, SiCplusplus, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const techLogos = [
    { node: <SiJavascript />, title: "Javascript", href: "https://www.typescriptlang.org" },
    { node: <SiCplusplus />, title: "C++", href: "https://tailwindcss.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const LoopingLogo = () => {
  return (
    <>
        <div className="hidden md:block relative h-fit overflow-hidden shadow-around">
            <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={68}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut={false}
                fadeOutColor="#ffffff"
                ariaLabel="Technology"
            />
        </div>
        <div className="block md:hidden relative h-fit overflow-hidden shadow-around">
            <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={46}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut={false}
                fadeOutColor="#ffffff"
                ariaLabel="Technology"
            />
        </div>
    </>
  );
}

export default LoopingLogo;