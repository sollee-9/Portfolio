import React from "react";
import { MotionDiv } from "../app/page";

type Props = {
   directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
   return (
      <div className="transition ease-in-out delay-80 hover:scale-110 duration-300 ">
         <MotionDiv
            initial={{
               x: directionLeft ? -200 : 200,
               opacity: 0,
            }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative flex cursor-pointer"
         >
            <img
               src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
               className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
                xl:h-32 filter "
            />
            <div
               className="absolute opacity-0 group-hover:opacity-80 transition duration-300
         ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0"
            >
               <div className="flex items-center justify-center h-full">
                  <p className="text-m font-semibold text-[gray] opacity-100 mb-[3px]">
                     JavaScript
                  </p>
               </div>
            </div>
         </MotionDiv>
      </div>
   );
}

export default Skill;
