"use client";
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Link from "next/link";
import {
   ArrowUpCircleIcon,
   ChevronUpIcon,
} from "@heroicons/react/24/outline";

export const MotionDiv = motion.div;
export const MotionImage = motion.img;

const Home: NextPage = () => {
   return (
      <div
         className="bg-[url('../images/background.png')] bg-no-repeat bg-cover text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
          scrollbar-thin scrollbar-thumb-[#C4C3CD] scrollbar-rounded-xl"
      >
         <Header />

         <section id="hero" className="snap-start">
            <Hero />
         </section>

         <section id="about" className="snap-center">
            <About />
         </section>

         <section id="experience" className="snap-center">
            <Experience />
         </section>

         <section id="skills" className="snap-start">
            <Skills />
         </section>

         <section id="projects" className="snap-start">
            <Projects />
         </section>

         <section id="contact" className="snap-start">
            <Contact />
         </section>

         <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
               <div className="flex items-center justify-center">
                  <ArrowUpCircleIcon className="h-10 w-10 text-gray-400 hover:opacity-20" />
               </div>
            </footer>
         </Link>
      </div>
   );
};

export default Home;
