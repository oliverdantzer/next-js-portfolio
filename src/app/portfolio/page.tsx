"use client";
import React, { useState } from "react";
import Image from "next/image";
import portfolioProjectsJson from "@/portfolio_projects.json";
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
  const portfolioProjects: PortfolioProjects = portfolioProjectsJson;

  function getTechnologyIcon(technology: string): ReactElement {
    let icon = <BsDash />;
    if (technologyIcons.hasOwnProperty(technology)) {
      icon = technologyIcons[technology];
    }
    return icon;
  }
  const theme = "dark";

  return (
    <main className={`relative`}>
      <div className="">
        <div
          className={`fade-in flex flex-wrap justify-center pt-8 overflow-y-auto max-h-[calc(100vh-68px)]`}
        >
          {Object.keys(portfolioProjects).map((project, index) => {
            const item = portfolioProjects[project];
            return (
              <div
                key={index}
                className={`w-[280px] xs:w-[320px] sm:w-[400px] font-semibold flex flex-col border-2 rounded m-8 backdrop-filter backdrop-blur-xsm border-primary-dark dark:border-primary-light text-shadow-light dark:text-shadow-dark`}
              >
                <div className="m-2">
                  <div className="flex flex-row font-bold">
                    <h1 className={`m-2`}>{item.name}</h1>
                    <h1 className="m-2 ml-auto whitespace-nowrap">
                      {item.date}
                    </h1>
                  </div>
                  <a
                    className={`m-4 flex flew-row border-2 rounded link-shadow-light dark:link-shadow-dark border-primary-dark dark:border-primary-light`}
                    href={item.github}
                  >
                    <div
                      className={`w-[200px] xs:w-[300px] h-[150px] relative overflow-hidden`}
                    >
                      {index == 0 ? (
                        <Image
                          className="object-cover w-full h-full"
                          src={"/" + item.image}
                          alt="Image description"
                          fill
                          priority
                        />
                      ) : (
                        <Image
                          className="object-cover w-full h-full"
                          src={"/" + item.image}
                          alt="Image description"
                          fill
                          priority
                        />
                      )}
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <IconContext.Provider
                        value={{
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
                      className: "mt-1",
                    }}
                  >
                    <div
                      className={`flex flex-wrap justify-center border-b-2 mb-2 pb-2 border-primary-dark dark:border-primary-light`}
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
                  <p className="m-2 text-center">{item.description}</p>
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
