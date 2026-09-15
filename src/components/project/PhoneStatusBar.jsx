"use client";

import { useEffect, useState } from "react";

const PhoneStatusBar = () => {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();

    const interval = setInterval(
      updateTime,
      30_000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        top-0
        z-40
        flex
        h-13
        items-center
        justify-between
        px-7
        text-[13px]
        font-bold
        text-black
      "
    >
      <span>
        {time}
      </span>

      <div className="flex items-center gap-2">
        {/* Signal */}
        <div className="flex h-3 items-end gap-0.5">
          <span className="h-1 w-0.75 bg-black" />
          <span className="h-1.5 w-0.75 bg-black" />
          <span className="h-2 w-0.75 bg-black" />
          <span className="h-2.5 w-0.75 bg-black" />
        </div>

        {/* Wifi */}
        <span className="text-[14px]">
          ◉
        </span>

        {/* Battery */}
        <div className="relative h-2.75 w-5.5 rounded-[3px] border border-black">
          <div className="m-px h-1.75 w-3.75 rounded-[1px] bg-black" />

          <span
            className="
              absolute
              -right-0.75
              top-0.75
              h-1.25
              w-0.5
              rounded-r
              bg-black
            "
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneStatusBar;