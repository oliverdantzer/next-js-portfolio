"use client";
import { AiFillLinkedin, AiFillGithub, AiFillHome } from "react-icons/ai";
import { IoMdListBox } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "@/components/link";
import ModeToggle from "@/components/mode-toggle";

export default function Navbar(props: { className: string }) {
  return (
    <nav
      className={`bgblur border-b-2 border-primary-dark dark:border-primary-light h-[70px] ${props.className}`}
    >
      <div className="flex text-2xl font-semibold shadow-lg">
        <div className="flex justify-center w-full gap-2 py-2 mx-8 text-3xl md:justify-end">
          <Link className={`flex flew-row gap-8`} href={`/`}>
            <div className="hidden md:block whitespace-nowrap">
              oliver dantzer
            </div>
            <div className="">
              <AiFillHome
              />
            </div>
          </Link>
          <Link className={``} href={`/portfolio`}>
            <IoMdListBox />
          </Link>
          <Link href="mailto:oliver.dantzer@queensu.ca">
            <MdEmail />
          </Link>
          <Link href="https://www.linkedin.com/in/oliverdantzer/">
            <AiFillLinkedin className="text-linkedin dark:text-primary-light" />
          </Link>
          <Link href="https://github.com/oliverdantzer">
            <AiFillGithub />
          </Link>
          <div
            className={`ml-4 mt-2 link-shadow-light dark:link-shadow-dark hidden xs:block`}
          >
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
