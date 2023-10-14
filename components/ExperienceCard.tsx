import React, { useState } from "react";
import { MotionImage } from "../app/page";
import ExperienceDetailCard from "./ExperienceDetailCard";

type Props = {};

function ExperienceCard({}: Props) {
   const [open, setOpen] = useState(false);

   return (
      <>
         <article
            onClick={() => setOpen(!open)}
            className="flex flex-col rounded-lg  justify-center items-center space-y-7 flex-shrink-0 w-[300px] 
        md:w-[350px] xl:w-[450px] snap-center bg-[white] border hover:opacity-100 opacity-70 cursor-pointer 
        transition-opacity duration-200 overflow-hidden mt-12 mx-5 p-5"
         >
            <MotionImage
               initial={{
                  y: -50,
                  opacity: 0,
               }}
               transition={{ duration: 0.8 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-20 h-20 rounded-full object-fit object-cover
                object-center min-h-[50px] min-w-[50px]"
               src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&w=1000&q=80"
               alt="work experience"
            />
            <div className="px-0 md:px-10">
               <h4 className="text-l font-light">CEO of MMML</h4>
               <p className="font-bold text-m mt-1">MMML</p>
               <div className="flex space-x-2 my-2">
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
               </div>
               <p className="uppercase py-3 text-gray-300 text-sm">
                  Started work ... - Ended ...
               </p>
               {/* <ul className="list-disc space-y-2 ml-5 text-sm">
               <li>
                  Summary points Summary points Summary points Summary
                  points{" "}
               </li>
               <li>
                  Summary points Summary points Summary points Summary
                  points{" "}
               </li>
               <li>
                  Summary points Summary points Summary points Summary
                  points
               </li>
            </ul> */}
            </div>
         </article>
         {open ? <ExperienceDetailCard setOpen={setOpen} /> : null}
      </>
   );
}

export default ExperienceCard;
