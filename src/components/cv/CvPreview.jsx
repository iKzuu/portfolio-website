"use client";

import { useEffect, useState } from "react";

import { pixel } from "@/lib/font";

import CvModal from "./CvModal";

const CvPreview = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow =
      "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`
          ${pixel.className}
          w-fit
          border-4
          border-black
          bg-light
          px-6
          py-3
          text-lg
          font-semibold
          text-dark
          shadow-[6px_6px_0px_#74aeff]
          transition-all

          hover:-translate-x-1
          hover:-translate-y-1
          hover:shadow-[9px_9px_0px_#74aeff]
        `}
      >
        Download CV
      </button>

      <CvModal
        mounted={mounted}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default CvPreview;