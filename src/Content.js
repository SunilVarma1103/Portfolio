// import images
import Hero_person from "./assets/images/Hero/person.png";
import Hero from "./assets/images/Hero/mainimg.png";
import Robo from "./assets/images/Hero/robo.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import angular from "./assets/images/Skills/angular.png";
import mongo from "./assets/images/Skills/mongo.png";
import javascript from "./assets/images/Skills/javascript.png";
import sql from "./assets/images/Skills/sql.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdOutlineEco } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#education",
      icon: MdOutlineEco,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "SUNIL",
    LastName: "VARMA",
    btnText: "Hire Me",
    image: Robo,
    hero_content: [
      {
        count: 1,
        text: "MERN Stack ",
      },
      {
        count: 2,
        text: "MEAN Stack",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Angular",
        para: "",
        logo: angular,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        para: "",
        logo: mongo,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Javascript",
        para: "",
        logo: javascript,
      },
      {
        name: "SQL",
        para: "",
        logo: sql,
      },
      {
        name: "Figma",
        para: "",
        logo: figma,
      },
      {
        name: "Python",
        para: "",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Experience",
    subtitle: "WHERE I WORKED",
    service_content: [
      {
        title: "Full Stack Developer Intern",
        para: "Worked on a complete survey results website including dashboard. Completed the phase 1 of the project 30% lesser time than expected. Used redux for the state management of the project.",
        tech: "HTML, CSS, JavaScript, React,Angular, Node, Redux",
        logo: services_logo1,
        place: "DeepMindz Private Ltd.",
        time: "(March 2023 - June 2023)",
      },
      {
        title: "Graduate Research Associate",
        para: "Working on the BLOCKCHAIN based Degree certificate verification system for my university. The project is officially funded by RGSTC(The scheme from Govt. of Maharashtra). The 12 months duration project on degree verification system and making certificate system digital is the key feature of the project.",
        tech: "Javascript, React, React contex API, Firebase, Express, Blockchain.",
        logo: services_logo2,
        place: "Dr. Babasaheb Ambedkar Technological University",
        time: "(August 2022 - August 2023)",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "PG Rental Saas Application",
        image: project1,
        detail:
          "I have build the complete Saas solution for the PG and hotel rentals. I have used the Nexus. ReactJS. MapBox, as my tech stack. Also, I have integrated the stripe payment system in this web based application.",
      },
      {
        title: "Expense Management System",
        image: project2,
        detail:
          "I have created a expense management system using ReactJS, Express, Node and MongoDB. The Key feature ot this project is the dashboard based analytical support from the app to improve the user experience.",
      },
      {
        title: "Ecommerce Application using Angular with ASP.NET core",
        image: project3,
        detail:
          "I have created an e-commerce website using Angular 14 and .NET; The main attraction of this build is the enhanced User Experience with the Angular 14 and Backend using ASP.NET and web API. ",
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm passionate computer science graduate. Working in full stack domain with JavaScript, React, Angular and NextJS expertise. I'm also good at python as python is my go to language. And I have worked on MEAN- MERN stack based projects also. I have also worked on figma, mongoDB, express and Node through out my work.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "varmasunil1103@gmail.com",
        icon: GrMail,
        link: "mailto:varmasunil1103@gmail.com",
      },
      {
        text: "+91 7507244242",
        icon: MdCall,
        link: "https://wa.me/7507244242",
      },
      {
        text: "LinkedIn ~ Sunil Varma",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/sunil-varma-852935257",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
