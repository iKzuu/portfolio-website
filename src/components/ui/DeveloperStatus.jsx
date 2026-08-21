import { pixel } from "@/lib/font";

const developerInfo = [
  {
    label: "ROLE",
    value: "Front-End Developer",
  },
  {
    label: "FOCUS",
    value: "Web & Mobile Apps",
  },
  {
    label: "WEB STACK",
    value: "Next.js • Laravel",
  },
  {
    label: "MOBILE STACK",
    value: "Flutter • Dart",
  },
];

const DeveloperStatus = ({ className = "" }) => {
  return (
    <div
      className={`
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        ${className}
      `}
    >
      {developerInfo.map((item) => (
        <div
          key={item.label}
          className="
            group
            relative
            min-w-0
            overflow-hidden
            border-2
            border-light/20
            bg-dark/70
            p-3
            transition-all
            duration-200

            hover:-translate-y-1
            hover:border-accent
            hover:bg-dark
          "
        >
          {/* Accent line */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-1
              bg-accent
              transition-all
              duration-200

              group-hover:w-2
            "
          />

          <div className="pl-2">
            <p
              className={`
                ${pixel.className}
                text-[10px]
                font-semibold
                tracking-wider
                text-accent
                md:text-xs
              `}
            >
              {item.label}
            </p>

            <p
              className={`
                ${pixel.className}
                mt-1
                wrap-break-word
                text-sm
                font-semibold
                text-light

                md:text-base
                2xl:text-lg
              `}
            >
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeveloperStatus;
