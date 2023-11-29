"use client";
import { useState, useEffect } from "react";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineCode } from "react-icons/md";
import { BsArrowRightCircle, BsCheckCircle, BsCodeSlash } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  const theme = "dark";

  const rightArrow = (
    <BsArrowRightCircle
      style={{
        fontSize: "40px",
      }}
      className=""
    />
  );

  const school = (
    <MdOutlineSchool
      style={{
        fontSize: "50px",
      }}
      className=""
    />
  );

  const code = (
    <MdOutlineCode
      style={{
        fontSize: "50px",
      }}
      className=""
    />
  );

  const [resumeIcon, setResumeIcon] = useState(rightArrow);

  const themeVariantsStroke = {
    dark: "stroke-red-500",
    light: "stroke-accent-light",
  };

  return (
    <main className={`relative`}>
      <div className={`fade-in`}>
        <ul className="flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden max-h-[calc(100vh-68px)] p-8">
          <li className={`text-shadow-light dark:text-shadow-dark pt-8 text-center`}>
            <h1
              className={`m-6 text-[5vw] font-bold heading`}
            >
              Hi! I&apos;m Oliver Dantzer.
            </h1>
          </li>
          <li className={`text-shadow-light dark:text-shadow-dark`}>
            <h1 className={`text-2xl flex items-center`}>
              <div className="mr-4">{school}</div>
              <div>
                {" "}
                3<sup>rd</sup>
                {"\u00A0"}year Computing @ Queen&apos;s University
              </div>
            </h1>
          </li>
          <li className={`text-shadow-light dark:text-shadow-dark`}>
            <h1 className={`m-2 text-2xl flex items-center`}>
              <div className="mr-4">{code}</div>Software Developer
            </h1>
          </li>
          <li className={`flex flex-wrap text-4xl font-bold`}>
            <Link
              className={`resume-button m-4 p-4 link-shadow-light dark:link-shadow-dark`}
              href="resume-oliver-dantzer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              my resume{" "}
              <span className="resume-button-icon-anim1">
                <BsArrowRightCircle className="inline-block resume-button-icon-anim2" />
              </span>
            </Link>
            <Link
              className={`m-4 p-4 portfolio-button link-shadow-light dark:link-shadow-dark`}
              href="/portfolio"
            >
              my portfolio{" "}
              <BsArrowRightCircle className="inline-block portfolio-button-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
