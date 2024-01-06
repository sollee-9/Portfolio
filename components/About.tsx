"use client";
import React from "react";
import { motion } from "framer-motion";
import profile from "../images/profile.jpeg";
import { about } from "../data/About";

type Props = {};

function About({}: Props) {
   const MotionDiv = motion.div;
   const MotionImage = motion.img;

   return (
      <MotionDiv
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ transition: 1.5 }}
         className="h-screen flex flex-col relative text-center md-text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
         <h3
            className="absolute top-24 uppercase tracking-[20px]
             text-gray-500 text-2xl"
         >
            About
         </h3>
         <div className="px-0 md:px-10 flex flex-col sm:flex-row items-center justify-center">
            <MotionImage
               initial={{
                  x: -200,
               }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               src={profile.src}
               className="md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover
                sm:rounded-lg sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[360px]"
            />

            <p
               className="max-h-[180px] w-full sm:ml-4 sm:max-h-[400px] mt-3 px-8 text-sm sm:text-[15px] 
               text-gray-500 text-left whitespace-pre-line text-ellipsis overflow-y-scroll lg:scrollbar-hide"
            >
               {about}
            </p>
         </div>
      </MotionDiv>
   );
}

export default About;
