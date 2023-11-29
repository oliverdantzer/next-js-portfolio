import { StaticImageData } from "next/image";
import nextPortfolio from "/public/next_portfolio.png";
import reactPortfolio from "/public/react_portfolio.png";
import musicGen from "/public/music_gen.jpg";
import brainyBlobs from "/public/brainy_blobs.png";
import convexDecomp from "/public/convex_decomp.png";
import yanivPredicate from "/public/yaniv_predicate.png";
import revolutionPhysio from "/public/revolution-physio.png";

type PortfolioProject = {
  name: string;
  date: string;
  github?: string;
  link?: string;
  technologies: string[];
  description: string;
  image: StaticImageData;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Revolution.Physio Website",
    link: "https://revolution.physio",
    date: "Nov 2023",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "Sanity.io",
    ],
    description:
      "Website for physiotherapy/orthopaedics clinic. Sanity.io CMS accessible via secure route in frontend.",
    image: revolutionPhysio,
  },
  {
    name: "Next.js Portfolio",
    date: "May 2023",
    github: "https://github.com/oliverdantzer/next-js-portfolio",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Node.js",
    ],
    description: "This website, built with Next.js and Tailwind CSS.",
    image: nextPortfolio,
  },
  {
    name: "Music Generation",
    date: "Mar 2023",
    github: "https://github.com/oliverdantzer/music-generation",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "matplotlib"],
    description: "Generate music using machine learning.",
    image: musicGen,
  },
  {
    name: "Brainy Blobs",
    date: "Feb 2023",
    github: "https://github.com/ATNoName/Brainy_Blobs",
    technologies: ["Python", "NumPy", "pygame", "dcp"],
    description:
      "Simulate strategy game using machine learning and distributive programming with DCP.",
    image: brainyBlobs,
  },
  {
    name: "Convex Polygon Decomposition",
    date: "Jan 2023",
    github: "https://github.com/oliverdantzer/simple-convex-decomposition",
    technologies: ["Python", "NumPy", "pygame"],
    description: "Decompose a polygon into convex polygons.",
    image: convexDecomp,
  },
  {
    name: "Yaniv Predicate Logic Modelling",
    date: "Dec 2022",
    github: "https://github.com/oliverdantzer/CISC204_project",
    technologies: ["Python", "bauhaus"],
    description:
      "Model the card game Yaniv in predicate logic and solve for satisfiability.",
    image: yanivPredicate,
  },
  {
    name: "React.js Portfolio",
    date: "Apr 2023",
    github: "https://github.com/oliverdantzer/oliverdantzer.github.io",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js"],
    description: "My previous portfolio website built with React.",
    image: reactPortfolio,
  },
];
