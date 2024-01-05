"use client";
import React from "react";
import { motion } from "framer-motion";
import profile from "../images/profile.jpeg";

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
               Hey, there! 👋🏼 I&apos;m Sol, a tech enthusiast on a
               mission to bridge the worlds of business strategy and
               cutting-edge technology
               {"\n"}
               {"\n"}
               🎓 I started my university journey at Cornell
               University&apos;s SC Johnson College of Business before
               pivoting to immerse myself in the dynamic realm of
               Computer Science at The University of British Columbia
               {"\n"}
               {"\n"}
               🚀 Throughout my academic and professional journey, I
               had the privilege of diving into all realms of
               “product”: from product design, product management to
               software engineering, which gave me a holistic
               understanding of the entire product development
               lifecycle. I learned that my true passion lies in
               crafting innovative solutions and transforming ideas
               into successful products
               {"\n"}
               {"\n"}
               🌐 What drew me to the tech space is the endless
               opportunities for learning, the constant evolution of
               technology, and the joy of creating products that
               people love. From engineering to user experience,
               I&apos;m passionate about making an impact and
               fostering innovation through thoughtful design and
               strategic thinking to transform ideas into impactful
               solutions
            </p>
         </div>
      </MotionDiv>
   );
}

export default About;
