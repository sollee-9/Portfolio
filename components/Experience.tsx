"use client";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
export const MotionDiv = motion.div;

type Props = {};

function Experience({}: Props) {
   return (
      <MotionDiv
         initial={{ opacity: 1 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
         max-w-full px-10 justify-evenly mx-auto items-center"
      >
         <h3
            className="absolute top-24 uppercase tracking-[20px]
             text-gray-500 text-2xl"
         >
            Experience
         </h3>
         <div className="absolute w-full h-5/6 max-h-[800px] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
         </div>
      </MotionDiv>
   );
}

export default Experience;
