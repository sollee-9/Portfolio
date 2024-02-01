// project images
import airbnb2 from "../images/projects/airbnb2.png";
import airbnb from "../images/projects/airbnb.png";
import connexa from "../images/projects/connexa.png";
import portfolio from "../images/projects/portfolio.png";
import notion from "../images/projects/notion.png";

// skills
import javascript from "../images/skills/javascript.png";
import node from "../images/skills/node.png";
import react from "../images/skills/reactjs.png";
import python from "../images/skills/python.png";
import cpp from "../images/skills/c++.png";
import c from "../images/skills/c.png";
import java from "../images/skills/java.png";
import next from "../images/skills/next.png";
import express from "../images/skills/express.png";
import aws from "../images/skills/aws.png";
import git from "../images/skills/git.png";
import figma from "../images/skills/figma.png";
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import tailwind from "../images/skills/tailwind.png";
import ts from "../images/skills/ts.png";

export const projects = [
   {
      title: "Notion - Collaborative Workspace",
      shortName: "notion",
      img: notion,
      skills: [{ title: "Figma", img: figma }],
      role: "Product Manager, UX Researcher & Product Designer",
      description: `This project aims to resolve the perceived scalability challenges faced by Notion users and introduces enhancements to foster a collaborative environment tailored to growing teams 
      
      Key features include centralized comments, flexible drawing board for brainstorming & ideation, easy-to-use visualization tool that integrates seamlessly with their database systems 
      `,
      url: "/projects/notion",
      buttonOption: "Learn more",
   },
   {
      title: "Airbnb Compare & Suggest",
      shortName: "airbnb",
      img: airbnb2,
      role: "Product Manager, Software Engineer & Product Designer",

      skills: [
         { title: "JavaScript", img: javascript },
         { title: "Next.js", img: next },
         { title: "React.js", img: react },
         { title: "Tailwind", img: tailwind },
         { title: "Figma", img: figma },
         { title: "Git", img: git },
      ],
      description: `With Compare & Suggest, users can effortlessly compare wishlist properties, receive personalized recommendations, and benefit from AI-generated summaries of guest reviews
      
      This solution empowers users with efficient decision-making tools, transforming the Airbnb experience by streamlining property selection and enabling efficient travel planning on Airbnb
      `,
      url: "/projects/airbnb",
      buttonOption: "Learn more",
   },
   {
      title: "Connexa.ai",
      shortName: "connexa",
      img: connexa,
      role: "Product Manager & Software Engineer",

      skills: [
         { title: "JavaScript", img: javascript },
         { title: "React.js", img: react },
         { title: "Figma", img: figma },
         { title: "AWS", img: aws },
         { title: "Git", img: git },
      ],
      description: `Connexa.ai is transforming customer service for small to medium businesses (SMBs) with a mission to facilitate genuine human connections

      Tackling the challenge of inconsistent customer experiences across channels, Connexa.ai introduces an all-in-one inbox with AI-powered analytics dashboard for real-time insights`,

      url: "https://www.connexa.ai/",
      buttonOption: "Learn more",
   },
   {
      title: "Portfolio",
      shortName: "portfolio",
      img: portfolio,
      role: "Software Engineer & Designer",

      skills: [
         { title: "TypeScript", img: ts },
         { title: "Next.js", img: next },
         { title: "React.js", img: react },
         { title: "Tailwind", img: tailwind },
         { title: "Figma", img: figma },
         { title: "Git", img: git },
      ],
      description:
         "This very website that you are viewing right now was designed on Figma and built using TypeScript, Next, React, and Tailwind CSS \n \n It features a modern website design with various dynamic interactive features and animations throughout the pages for an immersive user experience ",

      url: "https://github.com/sollee-9/Portfolio",
      buttonOption: "Learn more",
   },
];
