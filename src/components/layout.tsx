"use client";
import Navbar from "./navbar";
import Stars from "./stars";
import { ModeProvider, useMode } from "./mode-context";
import BackgroundMouseEffect from "./bg-mouse-effects";
import BackgroundMouseGlow from "./bg-mouse-glow";
import { GiPolarStar } from "react-icons/gi";

export default function Layout(params: { children: React.ReactNode }) {
  return (
    <ModeProvider>
      <LayoutContent>{params.children}</LayoutContent>
    </ModeProvider>
  );
}

export function LayoutContent(params: { children: React.ReactNode }) {
  const themeVariantsBackground = {
    dark: "bg-gradient-to-br from-indigo-950 from-40% via-violet-900 via-85% to-fuchsia-800",
    light:
      "bg-gradient-to-br from-fuchsia-50 from-40% via-fuchsia-200 via-80% to-fuchsia-50",
  };
  const { mode } = useMode();
  return (
    <div className={mode}>
      <div
        className={`relative min-h-screen text-primary-dark dark:text-primary-light`}
      >
        <Navbar className="absolute top-0 left-0 z-20 w-full" />
        <div className="relative z-10 pt-[70px]">{params.children}</div>
        <div className="fixed inset-0 z-0">
          <div className={`absolute inset-0 ${themeVariantsBackground.dark}`} />
          <div
            className={`absolute top-0 left-0 h-full w-full opacity-80 dark:opacity-0 ${themeVariantsBackground.light}`}
          />
          <Stars />
          <BackgroundMouseGlow killTime={1000} />
          <BackgroundMouseEffect
            minDistance={50}
            killTime={1000}
            rotation
            offset={10}
          >
            <GiPolarStar className="text-white star-trail" />
          </BackgroundMouseEffect>
        </div>
      </div>
    </div>
  );
}
