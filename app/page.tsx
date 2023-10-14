"use client";
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionImage = motion.img;

const Home: NextPage = () => {
   return (
      <div
         className="bg-white text-black h-screen snap-y 
         snap-mandatory overflow-scroll z-0"
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

         {/* Contact */}
      </div>
   );
};

export default Home;
