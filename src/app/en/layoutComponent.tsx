"use client";
import Nav from "./navComponent";
import Stars from "./starsComponent";
import { Mode } from "@anatoliygatt/dark-mode-toggle";

export default function Layout({
  theme,
  setTheme,
  themeVariants,
  lng,
}: {
  theme: Mode;
  setTheme: (theme: Mode) => void;
  themeVariants: { dark: string; light: string };
  lng: string;
}) {
  return (
    <div className="w-full h-full">
      <Nav lng={lng} theme={theme} setTheme={setTheme} />
      <div
        className={`w-screen h-0.5 opacity-50 ${
          theme == "dark" ? "bg-secondary-dark-off" : "bg-secondary-light-off"
        }`}
      ></div>

      {theme === "dark" && <Stars variant={themeVariants.dark} />}
    </div>
  );
}
