import { SiJavascript, SiNextdotjs, SiPhp, SiLaravel, SiFlutter, SiDart, SiGit, SiGithub, SiMysql, SiPostgresql, SiSupabase, SiTailwindcss } from "react-icons/si";

import { pixel } from "@/lib/font";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "PHP",
    icon: SiPhp,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
  },
  {
    name: "Flutter",
    icon: SiFlutter,
  },
  {
    name: "Dart",
    icon: SiDart,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
  },
];

const TechStack = () => {
  return (
    <div className="flex flex-col gap-3">
      <p
        className={`
          ${pixel.className}
          text-xs
          font-semibold
          tracking-wider
          text-accent
          md:text-sm
        `}
      >
        ALL TECH I WORK WITH
      </p>

      <div className="flex flex-wrap gap-3">
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <div
              key={technology.name}
              className="
                group
                flex
                items-center
                gap-2
                border-2
                border-light/20
                bg-dark/70
                px-3
                py-2
                transition-all
                duration-200

                hover:-translate-y-1
                hover:border-accent
                hover:bg-dark
              "
            >
              <Icon
                className="
                  size-5
                  text-light
                  transition-colors
                  duration-200
                  group-hover:text-accent

                  md:size-6
                "
              />

              <span
                className={`
                  ${pixel.className}
                  text-xs
                  font-semibold
                  text-light

                  md:text-sm
                `}
              >
                {technology.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
