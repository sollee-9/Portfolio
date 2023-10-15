import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
   const [text, count] = useTypewriter({
      words: ["Developer", "Designer", "Creator"],
      loop: true,
      delaySpeed: 2000,
   });

   return (
      <div
         className="h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden"
      >
         <BackgroundCircle />
         <img
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src="https://media.licdn.com/dms/image/D5603AQGDChX8iftwsQ/profile-displayphoto-shrink_400_400/0/1697002583460?e=1703116800&v=beta&t=PwlRM0QeOgbNZWzgJ6l9fLnxuQvT57mj04Korwc4xf8"
         />
         <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
               Software Developer
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
               <span className="mr-3">{text}</span>
               <Cursor cursorColor="#F7AB0A" />
            </h1>
            <div className="pt-5">
               <Link href="#about">
                  <button className="heroButton">About</button>
               </Link>
               <Link href="#experience">
                  <button className="heroButton">Experience</button>
               </Link>
               <Link href="#skills">
                  <button className="heroButton">Skills</button>
               </Link>
               <Link href="#projects">
                  <button className="heroButton">Projects</button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Hero;
