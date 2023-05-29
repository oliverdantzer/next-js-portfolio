"use client";
import React, { useState } from "react";
import { Mode } from "@anatoliygatt/dark-mode-toggle";
import Layout from "../layoutComponent";
import tailwindConfig from "../../../tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import { Colors, TailwindConfig } from "../../tailwindConfigWorkaround";
import Image from "next/legacy/image";
import portfolioProjectsJson from "../../portfolio_projects.json";
import { BsArrowRightCircle, BsDash } from "react-icons/bs";
import {
  SiPandas,
  SiNumpy,
  SiPython,
  SiScikitlearn,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { ReactElement } from "react";
import { IconContext } from "react-icons/lib";
import { themeService } from "../../themeService";

const fullConfig = resolveConfig(tailwindConfig) as TailwindConfig;

const colors: Colors = fullConfig.theme.colors;

interface PortfolioProjects {
  [key: string]: {
    name: string;
    date: string;
    github: string;
    technologies: string[];
    description: string;
    image: string;
  };
}

const technologyIcons: { [key: string]: ReactElement } = {
  Python: <SiPython />,
  NumPy: <SiNumpy />,
  Pandas: <SiPandas />,
  "scikit-learn": <SiScikitlearn />,
  JavaScript: <SiJavascript />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  CSS3: <SiCss3 />,
  HTML5: <SiHtml5 />,
  "Node.js": <SiNodedotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
};

export default function Home() {
  const [theme, setTheme] = useState<Mode>(themeService.getTheme());

  const portfolioProjects: PortfolioProjects = portfolioProjectsJson;

  const themeVariantsMain = {
    dark: "bg-secondary-dark text-primary-dark",
    light: "bg-secondary-light text-primary-light",
  };

  const themeVariantsBorder = {
    dark: "border-primary-dark",
    light: "border-primary-light",
  };

  const themeVariantsShadowTxt = {
    dark: "txt-shadow-dark",
    light: "txt-shadow-light",
  };

  const themeVariantsShadowLink = {
    dark: "link-shadow-dark",
    light: "link-shadow-light",
  };

  const themeVariantsBg = {
    dark: "bg-secondary-dark",
    light: "bg-secondary-light",
  };

  function getTechnologyIcon(technology: string): ReactElement {
    let icon = <BsDash />;
    if (technologyIcons.hasOwnProperty(technology)) {
      icon = technologyIcons[technology];
    }
    return icon;
  }

  return (
    <main className={`relative ${themeVariantsMain[theme]}`}>
      <Layout colors={colors} theme={theme} setTheme={setTheme} />
      <div className="mt-[68px]">
        <div
          className={`fade-in flex flex-wrap justify-center mt-8 overflow-y-auto max-h-[calc(100vh-68px)]`}
        >
          {Object.keys(portfolioProjects).map((project) => {
            const item = portfolioProjects[project];
            return (
              <div
                className={`w-[400px] font-semibold flex flex-col border-2 rounded m-4 backdrop-filter backdrop-blur-xsm ${themeVariantsBorder[theme]} ${themeVariantsShadowTxt[theme]}`}
              >
                <div className="m-2">
                  <div className="flex flex-row font-bold">
                    <h1 className={`m-2`}>{item.name}</h1>
                    <h1 className="ml-auto m-2 whitespace-nowrap">
                      {item.date}
                    </h1>
                  </div>
                  <a
                    className={`m-4 flex flew-row border-2 rounded bg-secondary-dark ${themeVariantsShadowLink[theme]} ${themeVariantsBorder[theme]}`}
                    href={item.github}
                  >
                    <div
                      className={`w-[300px] h-[150px] relative overflow-hidden flex items-center justify-center`}
                    >
                      <img
                        className="w-auto h-[120%] max-h-none max-w-none miniblur"
                        src={"/" + item.image}
                        alt="Image description"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <IconContext.Provider
                        value={{
                          color: colors.primary.dark,
                          className: "mt-1",
                          size: "25px",
                        }}
                      >
                        <div className="m-4">
                          <SiGithub />
                        </div>
                        <div className="m-4">
                          <BsArrowRightCircle />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </a>
                  <IconContext.Provider
                    value={{
                      color:
                        theme == "dark"
                          ? colors.primary.dark
                          : colors.primary.light,
                      className: "mt-1",
                    }}
                  >
                    <div
                      className={`flex flex-wrap justify-center border-b-2 mb-2 pb-2 ${themeVariantsBorder[theme]}`}
                    >
                      {item.technologies.map((technology) => (
                        <div
                          key={technology}
                          className={`mx-2 my-1 flex flex-row`}
                        >
                          {getTechnologyIcon(technology)}{" "}
                          <p className="ml-1">{technology}</p>
                        </div>
                      ))}
                    </div>
                  </IconContext.Provider>
                  <p className="text-center m-2">{item.description}</p>
                  <a className="flex flex-row" href={item.github}></a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
