"use client";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { DarkModeToggle, Mode } from "@anatoliygatt/dark-mode-toggle";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import Link from "next/link";

interface TailwindConfig {
  theme: {
    colors: {
      primary: {
        light: string;
        dark: string;
      };
      secondary: {
        light: {
          DEFAULT: string;
          off: string;
        };
        dark: {
          DEFAULT: string;
          off: string;
        };
      };
      linkedIn: {
        DEFAULT: string;
        off: string;
      };
    };
  };
}

const fullConfig = resolveConfig(tailwindConfig) as TailwindConfig;
const colors = fullConfig.theme.colors;

export default function Nav({
  theme,
  setTheme,
  lng,
}: {
  theme: Mode;
  setTheme: (theme: Mode) => void;
  lng: string;
}) {
  const themeVariants = {
    dark: "dark-shadow",
    light: "light-shadow",
  };

  const themeVariantsBorder = {
    dark: "border-primary-dark",
    light: "border-primary-light",
  };

  return (
    <nav className={`bg-transparent ${themeVariantsBorder[theme]} border-b-2`}>
      <div className="bg-transparent flex text-2xl shadow-lg font-semibold">
        <Link className={`m-4 ${themeVariants[theme]}`} href={`/${lng}`}>
          oliver dantzer
        </Link>
        <ul className="flex ml-auto items-center">
          <li className="m-4">
            <Link href={`/${lng}`}></Link>
          </li>
          <li className={`m-4 ${themeVariants[theme]}`}>
            <a href={`/${lng}/portfolio`}>portfolio</a>
          </li>
          <li className={`m-4 ${themeVariants[theme]}`}>
            <a href={`/${lng}/contact`}>contact</a>
          </li>
          <li className={`m-4 ${themeVariants[theme]}`}>
            <a href="https://www.linkedin.com/in/oliverdantzer/">
              <AiFillLinkedin
                style={{
                  color:
                    theme == "dark"
                      ? colors.primary.dark
                      : colors.linkedIn.DEFAULT,
                  fontSize: "30px",
                }}
              />
            </a>
          </li>
          <li className={`m-4 mb-5 ${themeVariants[theme]}`}>
            <a href="https://github.com/oliverdantzer">
              <AiFillGithub
                style={{
                  color:
                    theme == "dark"
                      ? colors.primary.dark
                      : colors.primary.light,
                  fontSize: "30px",
                }}
              />
            </a>
          </li>
          <li className={`m-4 ${themeVariants[theme]}`}>
            <Link href="/">
              EN
              {/* <MdOutlineLanguage
                style={{
                  color:
                    theme == "dark"
                      ? colors.primary.dark
                      : colors.primary.light,
                  fontSize: "30px",
                }}
              /> */}
            </Link>
          </li>
          <li className={`ml-4 mr-8 mt-2 ${themeVariants[theme]}`}>
            <DarkModeToggle
              mode={theme}
              dark=""
              light=""
              size="sm"
              inactiveTrackColor={colors.primary.dark}
              inactiveTrackColorOnHover="#f8fafc"
              inactiveTrackColorOnActive="#cbd5e1"
              activeTrackColor={colors.primary.light}
              activeTrackColorOnHover="#1e293b"
              activeTrackColorOnActive="#0f172a"
              inactiveThumbColor={colors.secondary.dark.off}
              activeThumbColor={colors.secondary.light.off}
              onChange={(mode) => {
                setTheme(mode);
              }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
