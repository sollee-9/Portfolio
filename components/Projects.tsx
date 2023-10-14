import React from "react";
import { MotionDiv, MotionImage } from "../app/page";

type Props = {};

function Projects({}: Props) {
   const projects = [1, 2, 3, 4, 5];
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

         <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {projects.map((project, i) => (
               <div
                  key={i}
                  className="flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-56 md:p-44 h-screen"
               >
                  <MotionImage
                     initial={{ y: -50, opacity: 0 }}
                     transition={{ duration: 0.7 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     src="https://img.freepik.com/free-psd/isolated-realistic-laptop_125540-2157.jpg"
                     alt="project"
                     className="h-[200px] mt-14"
                  />
                  <div className="space-y-10 px-0 md:px-10 max-w-6xl flex flex-col align-center">
                     <h4 className="text-l font-semibold text-center">
                        <span className="underline decoration-[#f7ab0a]/50">
                           Case Study {i + 1} of {projects.length}:
                        </span>{" "}
                        UPS clone
                     </h4>
                     <p className="text-sm text-center ml-[200px] mr-[200px] my-0">
                        "Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro.
                     </p>
                  </div>
               </div>
            ))}
         </div>
         <div
            className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[300px]
         -skew-y-12"
         ></div>
      </MotionDiv>
   );
}

export default Projects;
