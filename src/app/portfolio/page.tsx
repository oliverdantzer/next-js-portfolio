"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects } from "@/portfolio-projects";
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
          {portfolioProjects.map((project, index) => {
            return (
              <div
                key={index}
                className={`w-[280px] xs:w-[320px] sm:w-[400px] font-semibold flex flex-col border-2 rounded m-8 backdrop-filter backdrop-blur-xsm border-primary-dark dark:border-primary-light text-shadow-light dark:text-shadow-dark`}
              >
                <div className="m-2">
                  <div className="flex flex-row font-bold">
                    <h1 className={`m-2`}>{project.name}</h1>
                    <h1 className="m-2 ml-auto whitespace-nowrap">
                      {project.date}
                    </h1>
                  </div>
                  <Link
                    className={`m-4 flex flew-row border-2 rounded link-shadow-light dark:link-shadow-dark border-primary-dark dark:border-primary-light`}
                    href={project.github || project.link || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`w-[200px] xs:w-[300px] h-[150px] relative overflow-hidden`}
                    >
                      {index == 0 ? (
                        <Image
                          className="object-cover w-full h-full"
                          src={project.image}
                          sizes="100vw"
                          alt={`Screenshot of ${project.name}`}
                          priority
                        />
                      ) : (
                        <Image
                          className="object-cover w-full h-full"
                          src={project.image}
                          sizes="100vw"
                          alt={`Screenshot of ${project.name}`}
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
                        {project.github ? (
                          <div className="m-4">
                            <SiGithub />
                          </div>
                        ) : null}
                        <div className="m-4">
                          <BsArrowRightCircle />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <IconContext.Provider
                    value={{
                      className: "mt-1",
                    }}
                  >
                    <div
                      className={`flex flex-wrap justify-center border-b-2 mb-2 pb-2 border-primary-dark dark:border-primary-light`}
                    >
                      {project.technologies.map((technology) => (
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
                  <p className="m-2 text-center">{project.description}</p>
                  <a className="flex flex-row" href={project.github}></a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
