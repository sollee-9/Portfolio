import React from "react";
import Skill from "./Skill";

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
               <Skill />
               <Skill />
               <Skill />
               <Skill />
            </div>
            <div className="flex justify-center mt-[-10px]">
               <Skill directionLeft={true} />
               <Skill directionLeft={true} />
               <Skill directionLeft={true} />
               <Skill directionLeft={true} />
               <Skill directionLeft={true} />
            </div>
            <div className="flex justify-center mt-[-10px]">
               <Skill />
               <Skill />
               <Skill />
               <Skill />
            </div>
         </div>
      </div>
   );
}

export default Skills;
