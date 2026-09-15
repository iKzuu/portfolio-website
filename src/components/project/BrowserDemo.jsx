const BrowserDemo = ({
  demoUrl,
  projectName,
}) => {
  return (
    <div
      className="
        mockup-browser
        w-full
        border-4
        border-black
        bg-light
        text-dark
      "
    >
      <div className="mockup-browser-toolbar">
        <div
          className="
            input
            border-2
            border-black
            bg-white
            font-mono
            text-xs
          "
        >
          {demoUrl}
        </div>
      </div>

      <div className="border-t-4 border-black">
        <iframe
          src={demoUrl}
          title={`${projectName} browser demo`}
          className="
            h-125
            w-full
            border-0
            bg-white

            xl:h-150
          "
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};

export default BrowserDemo;