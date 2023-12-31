"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { motion } from "framer-motion";
export const MotionDiv = motion.div;
export const MotionImage = motion.img;

type Props = {};

function Header({}: Props) {
   return (
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center">
         <MotionDiv
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center"
         >
            <SocialIcon
               url="https://www.linkedin.com/in/melissasollee/"
               fgColor="gray"
               bgColor="transparent"
            />
            <SocialIcon
               url="https://github.com/sollee-9"
               fgColor="gray"
               bgColor="transparent"
            />
         </MotionDiv>

         <MotionDiv
            initial={{
               x: 500,
               opacity: 0,
               scale: 0.5,
            }}
            animate={{
               x: 0,
               opacity: 1,
               scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
         >
            <SocialIcon
               href="#contact"
               className="cursor-pointer"
               network="email"
               fgColor="gray"
               bgColor="transparent"
            />
            <a
               href="#contact"
               className="uppercase hidden md:inline-flex text-sm text-gray-400"
            >
               Get in touch
            </a>
         </MotionDiv>
      </header>
   );
}

export default Header;
