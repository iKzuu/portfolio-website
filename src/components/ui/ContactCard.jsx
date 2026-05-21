"use client";

import { pixel } from "@/lib/font";
import useContactForm from "@/hooks/useContactForm";
import { Mail } from "lucide-react";
import NotificationPopup from "./NotificationPopup";

const ContactCard = () => {
  const {
    formData,
    loading,
    notification,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden flex-1 flex flex-col w-full gap-5 p-5 bg-light border-4 border-black shadow-accent-lg-hard"
    >
      <NotificationPopup
        show={notification.show}
        message={
          notification.message
        }
        type={notification.type}
      />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full flex flex-col gap-2">
          <label
            className={`${pixel.className} text-dark text-sm md:text-base`}
          >
            name
          </label>

          <div className="bg-light relative w-full">
            <input
              name="name"
              type="text"
              placeholder="your name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              className={`${pixel.className} p-4 w-full text-dark bg-transparent outline-none focus:outline-none focus:ring-0`}
            />

            <div className="absolute inset-0 inset-shadow-black-hard pointer-events-none"></div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label
            className={`${pixel.className} text-dark text-sm md:text-base`}
          >
            email
          </label>

          <div className="bg-light relative w-full">
            <input
              name="email"
              type="email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              placeholder="your.email@domain.com"
              className={`${pixel.className} p-4 w-full text-dark bg-transparent outline-none focus:outline-none focus:ring-0`}
            />

            <div className="absolute inset-0 inset-shadow-black-hard pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className={`${pixel.className} text-dark text-sm md:text-base`}
        >
          message
        </label>

        <div className="bg-light relative w-full">
          <textarea
            name="message"
            placeholder="text your message here"
            value={
              formData.message
            }
            onChange={
              handleChange
            }
            rows={8}
            className={`${pixel.className} p-4 w-full resize-none text-dark bg-transparent outline-none focus:outline-none focus:ring-0`}
          />

          <div className="absolute inset-0 inset-shadow-black-hard pointer-events-none"></div>
        </div>
      </div>

      <button
        disabled={loading}
        className={`flex flex-row justify-center items-center gap-2 p-4 border-4 border-accent bg-dark hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 shadow-accent-hard`}
      >
        <span
          className={`${pixel.className} text-light text-xl font-bold`}
        >
          {loading
            ? "SENDING..."
            : "SEND"}
        </span>
        <Mail className="group-hover:rotate-12 transition-transform duration-200" />
      </button>
    </form>
  );
};

export default ContactCard;
