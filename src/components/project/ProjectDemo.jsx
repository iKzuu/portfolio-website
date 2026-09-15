"use client";

import { useRef } from "react";
import {
  Close,
  ExternalLink,
  Play,
} from "pixelarticons/react";

import { pixel } from "@/lib/font";

import MobileDemo from "./MobileDemo";
import BrowserDemo from "./BrowserDemo";

const ProjectDemo = ({
  demoUrl,
  demoType,
  projectName,
  githubUrl,
}) => {
  const dialogRef = useRef(null);

  if (!demoUrl) {
    return null;
  }

  const isMobileDemo = demoType === "mobile";

  const openDemo = () => {
    dialogRef.current?.showModal();
  };

  const closeDemo = () => {
    dialogRef.current?.close();
  };

  return (
    <>

      <button
        type="button"
        title="demo project"
        onClick={openDemo}
        className={`
          ${pixel.className}
          flex
          shrink-0
          items-center
          justify-center
          border-2
          border-black
          bg-dark
          p-1
          text-xs
          font-semibold
          text-light
          shadow-accent-sm-hard
          cursor-pointer
          transition-all
          duration-200

          hover:-translate-y-0.5

          xl:p-2
          xl:text-sm
        `}
      >
        <Play className="size-4 xl:size-5 2xl:size-8"/>
      </button>

      <dialog
        ref={dialogRef}
        className="
          fixed
          inset-0
          m-0
          h-full
          max-h-none
          w-full
          max-w-none
          bg-transparent
          p-0

          backdrop:bg-black/65
          backdrop:backdrop-blur-md
        "
        onCancel={(event) => {
          event.preventDefault();
          closeDemo();
        }}
      >
        {/* Fullscreen overlay */}
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            overflow-auto
            p-3

            sm:p-5
            md:p-8
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeDemo();
            }
          }}
        >
          {/* Demo Wrapper */}
          <div
            className={`
              flex
              max-h-[95dvh]
              max-w-full
              flex-col
              items-center
              gap-3

              ${
                isMobileDemo
                  ? "w-[min(92vw,390px)]"
                  : "w-[min(96vw,1200px)]"
              }
            `}
          >

            <div
              className="
                flex
                w-full
                items-end
                justify-between
                gap-3
              "
            >
              {/* Project Information */}
              <div className="min-w-0">
                <p
                  className={`
                    ${pixel.className}
                    text-[10px]
                    font-semibold
                    tracking-wider
                    text-accent

                    sm:text-xs
                  `}
                >
                  LIVE DEMO
                </p>

                <h2
                  className={`
                    ${pixel.className}
                    truncate
                    text-lg
                    font-bold
                    text-white

                    sm:text-xl
                    md:text-2xl
                  `}
                >
                  {projectName}
                </h2>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 items-center gap-2">
                {/* External Link */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${projectName} github repo`}
                  title="github repo link"
                  className="
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

                    hover:-translate-x-0.5
                    hover:-translate-y-0.5
                    hover:shadow-[5px_5px_0px_#000]

                    active:translate-x-0
                    active:translate-y-0
                    active:shadow-[1px_1px_0px_#000]
                  "
                >
                  <ExternalLink className="size-5" />
                </a>

                {/* Close */}
                <button
                  type="button"
                  onClick={closeDemo}
                  aria-label="Close demo"
                  title="Close demo"
                  className="
                    flex
                    size-10
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

            <div
              className="
                min-h-0
                max-w-full
                overflow-auto
              "
            >
              {demoType === "mobile" && (
                <MobileDemo
                  demoUrl={demoUrl}
                  projectName={projectName}
                />
              )}

              {demoType === "browser" && (
                <BrowserDemo
                  demoUrl={demoUrl}
                  projectName={projectName}
                />
              )}

              {!["mobile", "browser"].includes(
                demoType
              ) && (
                <p
                  className={`
                    ${pixel.className}
                    py-10
                    text-center
                    text-sm
                    text-white/50
                  `}
                >
                  Unsupported demo type.
                </p>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProjectDemo;