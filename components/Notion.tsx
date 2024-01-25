"use client";
import React from "react";
import { useRouter } from "next/navigation";
import notionProject from "../images/projects/notion.png";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

function Notion({}: Props) {
   const router = useRouter();
   return (
      <div>
         <button
            onClick={() => router.push("/#projects")}
            className="fixed top-6 left-6 flex items-center text-gray-500 hover:scale-105 ease-in duration-200"
         >
            <ChevronLeftIcon className="h-5 mr-1 text-gray-500" />
            Back
         </button>
         {/* Image */}
         <div className="flex w-6/6 justify-center">
            <img src={notionProject.src} className="w-[300px]" />
         </div>
         {/* Title */}
         <h1 className="flex w-6/6 justify-center font-semibold text-gray-700 my-3">
            Notion - Collaborative Workspace
         </h1>
         {/* Buttons */}
         <div className="flex flex-col justify-center items-center space-y-2">
            <button
               onClick={() =>
                  window.open(
                     "https://docs.google.com/presentation/d/1n6gSGpWyd0HaoANrGT7U83W2Hfqgc3Bj-4HjJ-bUigw/edit?usp=sharing",
                     "_blank"
                  )
               }
               className="project-buttons"
            >
               Project Slide Deck
            </button>
            <button
               onClick={() =>
                  window.open(
                     "https://drive.google.com/file/d/1Qm-MJHaUaj8TlQwcvI_cFiMPXd3rh6RZ/view?usp=sharing",
                     "_blank"
                  )
               }
               className="project-buttons"
            >
               Whitepaper Report
            </button>
            <button
               onClick={() =>
                  window.open(
                     "https://www.figma.com/proto/nkDIDZkSFMWsXU7PZNiL0S/Notion?type=design&node-id=1-2&t=8bamISerJwnPONZl-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
                     "_blank"
                  )
               }
               className="project-buttons"
            >
               High-fidelity Interactive Prototype
            </button>
            <button
               onClick={() =>
                  window.open(
                     "https://docs.google.com/presentation/d/1n6gSGpWyd0HaoANrGT7U83W2Hfqgc3Bj-4HjJ-bUigw/edit#slide=id.g2b22f2c9094_6_12",
                     "_blank"
                  )
               }
               className="project-buttons"
            >
               Product Demo Video
            </button>
            <button
               onClick={() =>
                  window.open(
                     "https://www.figma.com/file/nkDIDZkSFMWsXU7PZNiL0S/Notion?type=design&node-id=1%3A2&mode=design&t=zIHSQlCulRi7k0X0-1",
                     "_blank"
                  )
               }
               className="project-buttons"
            >
               Figma Working Doc
            </button>
         </div>
      </div>
   );
}

export default Notion;
