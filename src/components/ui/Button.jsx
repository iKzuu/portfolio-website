import { pixel } from "@/lib/font";

const Button = ({ textbtn }) => {
  return (
    <button
      className={`${pixel.className}
      text-xl
      text-[#272727] bg-white font-[500]
      px-6 py-3
      rounded-lg cursor-pointer
      
      transition-all duration-300

      -translate-x-1
      -translate-y-1
      shadow-[6px_6px_0px_#3c3c3c]

      active:translate-x-0
      active:translate-y-0
      active:shadow-[2px_2px_0px_#3c3c3c]

      lg:translate-x-0
      lg:translate-y-0
      lg:shadow-[4px_4px_0px_#3c3c3c]

      lg:hover:shadow-[8px_8px_0px_#3c3c3c]
      lg:hover:-translate-x-1
      lg:hover:-translate-y-1
      lg:hover:-rotate-6

      lg:active:translate-x-0
      lg:active:translate-y-0
      lg:active:shadow-[2px_2px_0px_#3c3c3c]

      `}
    >
      {textbtn}
    </button>
  );
};

export default Button;

// bg-gradient-to-r from-custom-color to-custom-color-2 rounded-lg
