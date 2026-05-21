"use client";

import { pixel } from "@/lib/font";
import {
  Check,
  X,
} from "lucide-react";

const NotificationPopup = ({
  show,
  message,
  type,
}) => {
  if (!show) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        className={`
        flex items-center gap-3
        px-6 py-4
        border-4 border-black
        shadow-accent-hard
        animate-bounce
        transition-all duration-300
        ${
          type === "success"
            ? "bg-accent text-dark"
            : "bg-red-400 text-dark"
        }
      `}
      >
        <div>
          {type === "success" ? (
            <Check size={20} />
          ) : (
            <X size={20} />
          )}
        </div>

        <span
          className={`${pixel.className} text-sm md:text-base`}
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default NotificationPopup;
