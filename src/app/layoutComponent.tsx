"use client";
import Nav from "./navComponent";
import Stars from "./starsComponent";
import { Fragment } from "react";
import { Mode } from "@anatoliygatt/dark-mode-toggle";
import { Limelight } from "next/font/google";
import { Colors } from "../tailwindConfigWorkaround";

export default function Layout({
  theme,
  setTheme,
  colors,
}: {
  theme: Mode;
  setTheme: (theme: Mode) => void;
  colors: Colors;
}) {
  const themeVariantsBackground = {
    dark: "bg-gradient-to-br from-indigo-950 from-40% via-violet-900 via-95%  to-fuchsia-900",
    light:
      "bg-gradient-to-br from-fuchsia-50 from-40% via-fuchsia-200 via-80% to-fuchsia-50",
  };

  return (
    <div className={`fixed inset-0`}>
      <div className={`absolute inset-0 ${themeVariantsBackground[theme]}`}>
        {theme === "dark" && <Stars />}
      </div>
      <div className="relative">
        <Nav colors={colors} theme={theme} setTheme={setTheme} />
        <div
          className={`w-screen h-0.5 opacity-50 ${
            theme == "dark" ? "bg-secondary-dark-off" : "bg-secondary-light-off"
          }`}
        ></div>
      </div>
    </div>
  );
}
