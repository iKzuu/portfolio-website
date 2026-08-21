"use client";

import { createPortal } from "react-dom";
import { pixel } from "@/lib/font";
import { CV_FILE } from "@/constants/cv";

import CvDocument from "./CvDocument";
import { Close, Download, FileText } from "pixelarticons/react";

const CvModal = ({ isOpen, mounted, onClose }) => {
  if (!mounted || !isOpen) {
    return null;
  }

  const modal = (
    <div
      className="
        fixed
        inset-0
        z-99999
        flex
        items-center
        justify-center
        bg-black/80
        p-4
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-label="CV Preview"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          flex
          max-h-[92vh]
          w-full
          max-w-5xl
          flex-col
          border-4
          border-black
          bg-dark
          shadow-[10px_10px_0px_#74aeff]
        "
      >
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b-4 border-black bg-light p-3 text-dark md:p-4">
          <div className="flex items-center gap-3">
            <FileText />

            <h2 className={`${pixel.className} text-lg font-bold md:text-2xl`}>CV PREVIEW</h2>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            {/* Download */}
            <a
              href={CV_FILE}
              download="Anang-Setiaji-CV-EN.pdf"
              aria-label="Download CV"
              title="Download CV"
              className={`
                ${pixel.className}
                flex
                size-10
                items-center
                justify-center
                border-2
                border-black
                bg-accent
                text-dark
                shadow-[3px_3px_0px_#000]
                transition-all
                duration-200

                sm:h-auto
                sm:w-auto
                sm:gap-2
                sm:px-4
                sm:py-2

                hover:-translate-x-0.5
                hover:-translate-y-0.5
                hover:shadow-[5px_5px_0px_#000]

                active:translate-x-0
                active:translate-y-0
                active:shadow-[1px_1px_0px_#000]
            `}
            >
              <Download className="size-5 shrink-0" />

              <span className="hidden whitespace-nowrap sm:inline">Download</span>
            </a>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              title="Close"
              className="
                flex
                size-10
                shrink-0
                items-center
                justify-center
                border-2
                border-black
                bg-red-500
                text-white
                shadow-[3px_3px_0px_#000]
                transition-all
                duration-200

                hover:-translate-x-0.5
                hover:-translate-y-0.5
                hover:shadow-[5px_5px_0px_#000]

                active:translate-x-0
                active:translate-y-0
                active:shadow-[1px_1px_0px_#000]
            "
            >
              <Close className="size-5" />
            </button>
          </div>
        </div>

        {/* CV */}
        <div className="min-h-0 flex-1 overflow-y-auto bg-dark p-3 md:p-6">
          <CvDocument />
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default CvModal;
