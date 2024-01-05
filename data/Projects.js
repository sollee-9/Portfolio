// project images
import airbnb2 from "../images/projects/airbnb2.png";
import airbnb from "../images/projects/airbnb.png";
import connexa from "../images/projects/connexa.png";
import portfolio from "../images/projects/portfolio.png";

// skills
import javascript from "../images/skills/javascript.png";
import node from "../images/skills/Node.png";
import react from "../images/skills/React.png";
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
      title: "Airbnb Compare & Suggest",
      shortName: "airbnb",
      img: airbnb2,
      skills: [
         { title: "JavaScript", img: javascript },
         { title: "React.js", img: react },
         { title: "Tailwind", img: tailwind },
         { title: "Figma", img: figma },
         { title: "Git", img: git },
      ],
      description:
         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem laudantium, totam rem aperiam, eaque ipsa quae Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae Sed",
      url: "https://docs.google.com/presentation/d/1a5u2axo72tE5sZVMumQnno3DuJodIQFavJFw7d_DulM/edit?usp=sharing",
   },
   {
      title: "Connexa",
      shortName: "connexa",
      img: connexa,
      skills: [
         { title: "JavaScript", img: javascript },
         { title: "React.js", img: react },
         { title: "Figma", img: figma },
         { title: "AWS", img: aws },
         { title: "Git", img: git },
      ],
      description:
         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      url: "https://docs.google.com/presentation/d/1a5u2axo72tE5sZVMumQnno3DuJodIQFavJFw7d_DulM/edit?usp=sharing",
   },
   {
      title: "Portfolio",
      shortName: "portfolio",
      img: portfolio,
      skills: [
         { title: "TypeScript", img: ts },
         { title: "Next.js", img: next },
         { title: "React.js", img: react },
         { title: "Tailwind", img: tailwind },
         { title: "Figma", img: figma },
         { title: "Git", img: git },
      ],
      description:
         "This very portfolio website that you are viewing now was designed on Figma and built using TypeScript, Next, React, and Tailwind CSS \n \n It features various dynamic interactive features and animations throughout the web pages for an immersive user experience",
      url: "https://github.com/sollee-9/Portfolio",
   },
];
