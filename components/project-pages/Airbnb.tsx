"use client";
import React from "react";
import { useRouter } from "next/navigation";
import airbnbProject from "../../images/projects/airbnb.png";
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
            <img src={airbnbProject.src} className="w-[300px]" />
         </div>
         {/* Title */}
         <h1 className="flex w-6/6 justify-center font-semibold text-gray-700 my-3">
            Airbnb Compare & Suggest
         </h1>
         {/* Buttons */}
         <div className="flex flex-col justify-center items-center space-y-2">
            <button
               onClick={() =>
                  window.open(
                     "https://docs.google.com/presentation/d/1a5u2axo72tE5sZVMumQnno3DuJodIQFavJFw7d_DulM/edit?usp=sharing",
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
                     "https://airbnb-compare-suggest.vercel.app/",
                     "_blank"
                  )
               }
               className="project-buttons flex justify-center"
            >
               🌐 <p className="font-bold mx-1">Live Build:</p>
               Interactive Application
            </button>
            <button
               onClick={() =>
                  window.open(
                     "https://www.figma.com/proto/8ZCEB0jFDlNvPdyBinYMUR/Airbnb-Compare-Interactive-Prototype?type=design&node-id=1-12&t=xL8wN7l9I018PXnS-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A12&show-proto-sidebar=1&mode=design",
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
                     "https://docs.google.com/presentation/d/1a5u2axo72tE5sZVMumQnno3DuJodIQFavJFw7d_DulM/edit#slide=id.g2ab7b096878_0_46",
                     "_blank"
                  )
               }
               className="project-buttons"
            >
               Product Demo Video
            </button>
         </div>
      </div>
   );
}

export default Notion;
