"use client";
import React from "react";
import Airbnb from "../../../components/project-pages/Airbnb";
function page() {
   return (
      <div
         className="bg-[url('../images/background.png')] bg-no-repeat bg-cover text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
     scrollbar-thin scrollbar-thumb-[#C4C3CD] scrollbar-rounded-xl flex flex-col justify-center"
      >
         <Airbnb />
      </div>
   );
}

export default page;
