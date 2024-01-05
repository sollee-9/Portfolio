"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import headshot from "../images/headshot.png";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
   const [text, count] = useTypewriter({
      words: [
         "Software Developer",
         "Product Manager",
         "UX Researcher",
      ],
      loop: true,
      delaySpeed: 2000,
   });

   return (
      <div
         className="h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden"
      >
         <BackgroundCircle />
         <Image
            className="relative rounded-full h-40 w-40 mx-auto object-cover"
            src={headshot}
            height={150}
            width={150}
            alt="profile image"
         />
         <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
               Sol (Melissa) Lee
            </h2>
            <h1 className="text-3xl lg:text-4xl font-semibold px-10">
               <span className="mr-3">{text}</span>
               <Cursor cursorColor="#676097" />
            </h1>
            <div className="pt-5 space-x-1">
               <Link href="#about">
                  <button className="heroButton">About</button>
               </Link>
               <Link href="#skills">
                  <button className="heroButton">Skills</button>
               </Link>
               <Link href="#projects">
                  <button className="heroButton">Projects</button>
               </Link>
               <Link href="#experience">
                  <button className="heroButton">Experience</button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Hero;
