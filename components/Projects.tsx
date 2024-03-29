"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/Projects";
import airbnb from "../images/projects/airbnb.png";
import { useRouter } from "next/navigation";

type Props = {};

function Projects({}: Props) {
   const router = useRouter();

   const MotionDiv = motion.div;
   const MotionImage = motion.img;

   const openProject = (url: string) => {
      if (url.slice(0, 4) === "http") {
         window.open(url, "_blank");
      } else {
         router.push(url);
      }
   };

   return (
      <MotionDiv
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0"
      >
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
         </h3>

         <div className="relative w-full flex overflow-x-scroll no-scrollbar overflow-y-hidden snap-x snap-mandatory z-20">
            {projects.map((project, i) => (
               <div
                  key={i}
                  className="flex-shrink-0 snap-center flex flex-col items-center
                justify-center h-screen"
               >
                  <MotionImage
                     initial={{ y: -50, opacity: 0 }}
                     transition={{ duration: 0.7 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     alt="project"
                     src={project.img.src}
                     className="h-[200px] mt-14"
                  />
                  <div className="px-0 md:px-10 max-w-6xl flex flex-col align-center justify-center">
                     <h4 className="text-l font-semibold text-center mt-2">
                        <span className="underline decoration-[#676097]/60">
                           Project {i + 1} of {projects.length}:
                        </span>{" "}
                        {project.title}
                     </h4>
                     <div className="flex flex-col justify-center">
                        <span className="text-xs flex justify-center my-2">
                           <p className="font-bold mr-1">Role:</p>
                           {project.role}
                        </span>
                        <div className="flex space-x-2 justify-center">
                           {project.skills.map((skill) => (
                              <img
                                 key={skill.title}
                                 className="h-5 w-5s object-contain"
                                 src={skill.img.src}
                              />
                           ))}
                        </div>
                     </div>
                     <p className="text-sm text-center text-gray-500 my-2 mx-auto whitespace-pre-line w-[60%]">
                        {project.description}
                     </p>
                     <button
                        onClick={() => openProject(project.url)}
                        className="justify-center flex m-auto border-gray-300 h-8 border text-sm px-3
                     font-bold items-center rounded-full mt-2"
                     >
                        {project.buttonOption}
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </MotionDiv>
   );
}

export default Projects;
