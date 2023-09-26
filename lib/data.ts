import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed Intern",
    location: "Pokhara-10, Bagale Tole",
    description:
      "I completed my 3 months of intern. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 March",
  },
  {
    title: "Front-End Developer",
    location: "Pokhara-8, Jalpa Road",
    description: "I worked as a front-end developer for 6 months.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Nep Tech Pal",
    description:
      "Official website of the IT company Nep Tech Pal. I worked as a frontend developer on this project.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion", "Figma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Footstep Education ",
    description:
      "Educaiton Consultancy in Pokhara. I was the front-end developer. It has features like data from Contentful.",
    tags: ["React", "Next.js", "Tailwind", "Contentful", "Formspree"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Peace Ecommerce",
    description:
      "A test project with basic features of an E-commerce website like categories, add to cart, checkout, etc.",
    tags: ["React", "Redux", "Material UI", "Strapi", "Stripe"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
