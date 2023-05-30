"use client";
import { useState, useEffect } from "react";
import { Mode } from "@anatoliygatt/dark-mode-toggle";
import Layout from "./layoutComponent";
import { MdOutlineSchool } from "react-icons/md";
import tailwindConfig from "../../tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import { Colors, TailwindConfig } from "../tailwindConfigWorkaround";
import { MdOutlineCode } from "react-icons/md";
import { BsArrowRightCircle, BsCheckCircle, BsCodeSlash } from "react-icons/bs";
import Link from "next/link";
import { themeService } from "../themeService";

const fullConfig = resolveConfig(tailwindConfig) as TailwindConfig;

const colors: Colors = fullConfig.theme.colors;

export default function Home() {
  const [theme, setTheme] = useState<Mode>(themeService.getTheme());

  const rightArrow = (
    <BsArrowRightCircle
      style={{
        color: theme == "dark" ? colors.accent.dark : colors.accent.light,
        fontSize: "40px",
      }}
      className=""
    />
  );

  const school = (
    <MdOutlineSchool
      style={{
        color: theme == "dark" ? colors.accent.dark : colors.accent.light,
        fontSize: "50px",
      }}
      className=""
    />
  );

  const code = (
    <MdOutlineCode
      style={{
        color: theme == "dark" ? colors.accent.dark : colors.accent.light,
        fontSize: "50px",
      }}
      className=""
    />
  );

  const [resumeIcon, setResumeIcon] = useState(rightArrow);

  const themeVariantsColor = {
    dark: "text-primary-dark",
    light: "text-primary-light",
  };

  const themeVariantsStroke = {
    dark: "stroke-red-500",
    light: "stroke-accent-light",
  };

  const themeVariantsBgColor = {
    dark: "bg-secondary-dark",
    light: "bg-secondary-light",
  };

  const themeVariantsShadowTxt = {
    dark: "txt-shadow-dark",
    light: "txt-shadow-light",
  };

  const themeVariantsShadowLink = {
    dark: "link-shadow-dark",
    light: "link-shadow-light",
  };

  return (
    <main className={`relative ${themeVariantsColor[theme]}`}>
      <Layout colors={colors} theme={theme} setTheme={setTheme} />
      <div className={`mt-[68px] fade-in`}>
        <ul className="flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden max-h-[calc(100vh-68px)]">
          <li className={`${themeVariantsShadowTxt[theme]} pt-8 text-center`}>
            <h1
              className={`m-6 text-[4vw] font-bold heading ${themeVariantsStroke[theme]}`}
            >
              Hi! I&apos;m Oliver Dantzer.
            </h1>
          </li>
          <li className={`${themeVariantsShadowTxt[theme]}`}>
            <h1 className={`text-2xl flex items-center`}>
              <div className="mr-4">{school}</div>
              <div>
                {" "}
                3<sup>rd</sup>
                {"\u00A0"}year Computing @ Queen&apos;s University
              </div>
            </h1>
          </li>
          <li className={`${themeVariantsShadowTxt[theme]}`}>
            <h1 className={`m-2 text-2xl flex items-center`}>
              <div className="mr-4">{code}</div> Full Stack Software Developer
            </h1>
          </li>
          <li className={`flex flex-row text-4xl font-bold`}>
            <a
              className={`resume-button m-4 p-4 flex flex-row ${themeVariantsShadowLink[theme]}`}
              href="resume_oliver.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              my resume{" "}
              <div className="ml-4 mt-0.5">
                <div className="resume-button-icon-anim1">
                  <div className="resume-button-icon-anim2">{rightArrow}</div>
                </div>
              </div>
            </a>
            <Link
              className={`m-4 p-4 portfolio-button flex flex-row ${themeVariantsShadowLink[theme]}`}
              href="/portfolio"
            >
              my portfolio{" "}
              <div className="ml-4 mt-0.5">
                <div className="portfolio-button-icon">{rightArrow}</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
