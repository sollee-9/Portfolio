import React from "react";
import Skill from "./Skill";
import javascript from "../images/skills/javascript.png";
import node from "../images/skills/Node.png";
import react from "../images/skills/react.png";
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

type Props = {};

function Skills({}: Props) {
   return (
      <div
         className="flex relative flex-col text-center md:text-left
            xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
            justify-center xl:space-y-0 mx-auto items-center"
      >
         <h3 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-2xl">
            Skills
         </h3>
         <div className="flex flex-col items-center mt-8">
            <div className="flex justify-center pt-8">
               <Skill image={javascript.src} text="JavaScript" />
               <Skill image={node.src} text="Node.js" />
               <Skill image={express.src} text="Express.js" />
               <Skill image={react.src} text="React.js" />
               <Skill image={next.src} text="Next.js" />
            </div>
            <div className="flex justify-center mt-[-10px]">
               <Skill
                  image={ts.src}
                  text="TypeScript"
                  directionLeft={true}
               />

               <Skill
                  image={python.src}
                  text="Python"
                  directionLeft={true}
               />
               <Skill image={c.src} text="C" directionLeft={true} />
               <Skill
                  image={cpp.src}
                  text="C++"
                  directionLeft={true}
               />
               <Skill
                  image={java.src}
                  text="Java"
                  directionLeft={true}
               />
               <Skill
                  image={git.src}
                  text="Git"
                  directionLeft={true}
               />
            </div>
            <div className="flex justify-center mt-[-10px]">
               <Skill image={aws.src} text="AWS" />{" "}
               <Skill image={html.src} text="HTML" />
               <Skill image={css.src} text="CSS" />
               <Skill image={tailwind.src} text="Tailwind" />
               <Skill image={figma.src} text="Figma" />
            </div>
         </div>
      </div>
   );
}

export default Skills;
