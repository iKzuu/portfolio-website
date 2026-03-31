import { pixel } from "@/lib/font";

const Button = ({ textbtn }) => {
  return (
    <button
      className={`${pixel.className}
      text-xl
      text-dark bg-white font-medium
      border-4 border-black
      px-6 py-3
      cursor-pointer
      
      transition-all duration-300

      -translate-x-1
      -translate-y-1
      shadow-[6px_6px_0px_#74aeff]

      active:translate-x-0
      active:translate-y-0
      active:shadow-[2px_2px_0px_#74aeff]

      lg:translate-x-0
      lg:translate-y-0
      lg:shadow-[4px_4px_0px_#74aeff]

      lg:hover:shadow-[8px_8px_0px_#74aeff]
      lg:hover:-translate-x-1
      lg:hover:-translate-y-1

      lg:active:translate-x-0
      lg:active:translate-y-0
      lg:active:shadow-[2px_2px_0px_#74aeff]

      `}
    >
      {textbtn}
    </button>
  );
};

export default Button;