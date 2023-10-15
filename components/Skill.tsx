import React from "react";
import { MotionDiv } from "../app/page";

type Props = {
   directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
   return (
      <>
         <MotionDiv
            initial={{
               x: directionLeft ? -100 : 100,
               opacity: 0,
            }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative flex cursor-pointer"
         >
            <div
               className="transition ease-in-out delay-80 hover:scale-[115%] duration-300 rounded-full
                 bg-white hover:z-50 w-24 h-24 xl:w-28 xl:h-28 mx-1 group relative flex cursor-pointer
               justify-center items-center shadow-lg shadow-violet-200/70"
            >
               <img
                  src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  className="h-[70%] w-[70%]"
               />
               <div
                  className="absolute opacity-0 group-hover:opacity-80 transition duration-300
                  ease-in-out group-hover:bg-white w-24 h-24 xl:w-28 xl:h-28  rounded-full z-0"
               >
                  <div className="flex items-center justify-center h-full">
                     <p className="text-sm text-gray-500 opacity-100 mb-[3px]">
                        JavaScript
                     </p>
                  </div>
               </div>
            </div>
         </MotionDiv>
      </>
   );
}

export default Skill;
