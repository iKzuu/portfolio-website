import { pixel } from "@/lib/font";

const Button = ({textbtn}) => {
    return (
        <button className={`${pixel.className} text-xl text-white font-bold px-6 py-3 w-fit rounded-lg mr-4 bg-gradient-to-r from-custom-color to-custom-color-2 bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out hover:bg-right cursor-pointer`}>
            {textbtn}
        </button>
    );
};

export default Button;