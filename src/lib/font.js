import {
  Pixelify_Sans,
  Poppins,
  JetBrains_Mono,
} from "next/font/google";

export const pixel =
  Pixelify_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
  });

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const jetbrains =
  JetBrains_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
  });
