import { pixel } from "@/lib/font";
import RetroHeading from "../ui/RetroHeading";
import ContactCard from "../ui/ContactCard";
import PixelText from "../ui/PixelText";

const ContactSection = () => {
  return (
    <section className="relative flex flex-col xl:flex-row xl:justify-between items-center gap-4 xl:gap-6 my-12 p-6 xl:p-12 bg-dark/60 backdrop-blur-sm shadow-accent-soft">
      <div className="z-20 absolute -top-8 left-0 -rotate-6">
        <RetroHeading text="Contact" />
      </div>

      <div className="flex-1 flex flex-col w-full">
        <h1
          className={`${pixel.className} font-semibold self-start text-4xl 2xl:text-6xl`}
        >
          Ready to start a new quest?
        </h1>
        <h1
          className={`${pixel.className} font-semibold self-start text-4xl 2xl:text-6xl`}
        >
            <PixelText>Let’s talk!</PixelText>
        </h1>
      </div>

      <ContactCard />

    </section>
  );
};

export default ContactSection;
