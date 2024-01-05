"use client";
import React, { useState } from "react";
import ExperienceDetailCard from "./ExperienceDetailCard";
import { motion } from "framer-motion";
export const MotionDiv = motion.div;
export const MotionImage = motion.img;

type Props = { experience: any };

function ExperienceCard({ experience }: Props) {
   // const [open, setOpen] = useState(false);

   return (
      <>
         <article
            // onClick={() => setOpen(!open)}
            className="flex flex-col rounded-lg relative justify-center items-center space-y-7 flex-shrink-0 w-[300px] 
               md:w-[350px] xl:w-[400px] snap-center hover:bg-[#fbfbfe] bg-[white] border hover:opacity-100 cursor-pointer 
               transition-opacity duration-200 overflow-hidden mt-12  p-5"
         >
            <MotionImage
               initial={{
                  y: -50,
                  opacity: 0,
               }}
               transition={{ duration: 0.8 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-24 h-24 rounded-full object-fit object-cover
                object-center min-h-[50px] min-w-[50px] absolute top-16"
               src={experience.image.src}
               alt="work experience"
            />
            <div className="px-0 md:px-10">
               <div className=" absolute top-48 left-12">
                  <p className="font-bold text-lg mt-1">
                     {experience.company}
                  </p>
                  <h4 className="text-base font-light">
                     {experience.jobTitle}
                  </h4>
               </div>

               {/* <div className="flex space-x-2 my-2">
                  <img
                     className="h-10 w-10 rounded-full"
                     src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  />
                  <img
                     className="h-10 w-10 rounded-full"
                     src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  />
                  <img
                     className="h-10 w-10 rounded-full"
                     src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  />
                  <img
                     className="h-10 w-10 rounded-full"
                     src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  />
               </div> */}
               <p className="uppercase py-3 text-gray-400 text-sm absolute top-[17rem] left-12">
                  {experience.start}
                  {"  "}-{"  "}
                  {experience.end}
               </p>
            </div>
         </article>
         {/* {open ? <ExperienceDetailCard setOpen={setOpen} /> : null} */}
      </>
   );
}

export default ExperienceCard;
