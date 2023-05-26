"use client";
import { useState } from "react";
import { Mode } from "@anatoliygatt/dark-mode-toggle";
import Layout from "./layoutComponent";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const [theme, setTheme] = useState<Mode>("dark");

  const themeVariants = {
    dark: "bg-secondary-dark text-primary-dark",
    light: "bg-secondary-light text-primary-light",
  };

  return (
    <main className={`${themeVariants[theme]}`}>
      <Layout
        lng={lng}
        themeVariants={themeVariants}
        theme={theme}
        setTheme={setTheme}
      />
      <div className="bg-secondary-light text-inherit"></div>
    </main>
  );
}
