import React from "react";
import { MotionDiv, MotionImage } from "../app/page";

type Props = {};

function About({}: Props) {
   return (
      <MotionDiv
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ transition: 1.5 }}
         className="h-screen flex flex-col relative h-sreen text-center md-text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
         <h3
            className="absolute top-24 uppercase tracking-[20px]
             text-gray-500 text-2xl"
         >
            About
         </h3>
         <MotionImage
            initial={{
               x: -200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=sph"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
         />
         <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
               Here is a
               <span className="underline decoration-[#F7AB0A/50]">
                  little
               </span>
               background
            </h4>
            <p className="text-base">
               "Sed ut perspiciatis unde omnis iste natus error sit
               voluptatem accusantium doloremque laudantium, totam rem
               aperiam, eaque ipsa quae ab illo inventore veritatis et
               quasi architecto beatae vitae dicta sunt explicabo.
               Nemo enim ipsam voluptatem quia voluptas sit aspernatur
               aut odit aut fugit, sed quia consequuntur magni dolores
               eos qui ratione voluptatem sequi nesciunt. Neque porro
               quisquam est, qui dolorem ipsum quia dolor sit amet,
               consectetur, adipisci velit, sed quia non numquam eius
               modi tempora incidunt ut labore et dolore magnam
               aliquam quaerat voluptatem. Ut enim ad minima veniam,
               quis nostrum exercitationem ullam corporis suscipit
               laboriosam, nisi ut aliquid ex ea commodi consequatur?
               Quis autem vel eum iure reprehenderit qui in ea
               voluptate velit esse quam nihil molestiae consequatur,
               vel illum qui dolorem eum fugiat quo voluptas nulla
               pariatur?"
            </p>
         </div>
      </MotionDiv>
   );
}

export default About;
