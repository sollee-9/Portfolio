import React from "react";
import { SocialIcon } from "react-social-icons";
import { MotionDiv } from "../app/page";

type Props = {};

function Header({}: Props) {
   return (
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-99 xl:items-center">
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
               className="cursor-pointer"
               network="email"
               fgColor="gray"
               bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
               Get in touch
            </p>
         </MotionDiv>
      </header>
   );
}

export default Header;