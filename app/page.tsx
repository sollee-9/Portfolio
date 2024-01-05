import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import {
   Experience,
   PageInfo,
   Project,
   Skill,
   Social,
} from "../typings";

type Props = {
   pageInfo: PageInfo;
   experiences: Experience[];
   skills: Skill[];
   project: Project[];
   socials: Social[];
};

const Home = () => {
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

         <section id="skills" className="snap-start">
            <Skills />
         </section>

         <section id="projects" className="snap-start">
            <Projects />
         </section>

         <section id="experience" className="snap-center">
            <WorkExperience />
         </section>

         <section id="contact" className="snap-start">
            <Contact />
         </section>

         <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
               <div className="flex items-center justify-center">
                  <ChevronUpIcon className="text-xs font-thin h-10 w-10 text-gray-300 hover:opacity-20" />
               </div>
            </footer>
         </Link>
      </div>
   );
};

export default Home;
