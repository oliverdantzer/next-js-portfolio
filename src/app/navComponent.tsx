"use client";
import { AiFillLinkedin, AiFillGithub, AiFillHome } from "react-icons/ai";
import { IoMdListBox } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { DarkModeToggle, Mode } from "@anatoliygatt/dark-mode-toggle";
import Link from "next/link";
import { Colors } from "../tailwindConfigWorkaround";
import { themeService } from "../themeService";

export default function Nav({
  theme,
  setTheme,
  colors,
}: {
  theme: Mode;
  setTheme: (theme: Mode) => void;
  colors: Colors;
}) {
  const themeVariantsShadow = {
    dark: "link-shadow-dark",
    light: "link-shadow-light",
  };

  const themeVariantsBackground = {
    dark: "bg-secondary-dark",
    light: "bg-secondary-light",
  };

  const themeVariantsBorder = {
    dark: "border-primary-dark",
    light: "border-primary-light",
  };

  return (
    <nav
      className={`relative z-50 bgblur ${themeVariantsBackground[theme]} bg-opacity-25 ${themeVariantsBorder[theme]} border-b-2`}
    >
      <div className="bg-transparent flex text-2xl shadow-lg font-semibold">
        <ul className="flex ml-auto items-center">
          <li className={`m-4 ${themeVariantsShadow[theme]}`}>
            <Link className={`flex flew-row`} href={`/`}>
              <div className="whitespace-nowrap nav-text-option mr-4">
                oliver dantzer
              </div>
              <div className="ml-4">
                <AiFillHome
                  style={{
                    color:
                      theme == "dark"
                        ? colors.primary.dark
                        : colors.primary.light,
                    fontSize: "30px",
                  }}
                />
              </div>
            </Link>
          </li>
          <li className={`m-4 ${themeVariantsShadow[theme]}`}>
            <Link className={``} href={`/portfolio`}>
              <IoMdListBox
                style={{
                  color:
                    theme == "dark"
                      ? colors.primary.dark
                      : colors.primary.light,
                  fontSize: "30px",
                }}
              />
            </Link>
          </li>
          <li className={`m-4 ${themeVariantsShadow[theme]}`}>
            <a href="mailto:oliver.dantzer@queensu.ca">
              <MdEmail
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
          <li className={`m-4 ${themeVariantsShadow[theme]}`}>
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
          <li className={`m-4 mb-5 ${themeVariantsShadow[theme]}`}>
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
          <li className={`ml-4 mr-8 mt-2 ${themeVariantsShadow[theme]}`}>
            <DarkModeToggle
              mode={theme}
              dark=""
              light=""
              size="sm"
              inactiveTrackColor={colors.primary.dark}
              inactiveTrackColorOnHover={colors.secondary.light.off}
              inactiveTrackColorOnActive="#cbd5e1"
              activeTrackColor={colors.primary.light}
              activeTrackColorOnHover={colors.primary.light}
              activeTrackColorOnActive="#0f172a"
              inactiveThumbColor={colors.secondary.dark.off}
              activeThumbColor={colors.secondary.light.off}
              onChange={(mode) => {
                setTheme(mode);
                themeService.setTheme(mode);
              }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
