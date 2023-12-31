import React from "react";
import github from "../../images/projects/Github.png";
import figma from "../../images/skills/figma.png";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

type Props = {};

function ProjectHeader({}: Props) {
   return (
      <div className="flex justify-center space-x-4 items-baseline">
         <a className="flex flex-col items-center">
            <Image alt="" src={github.src} height={18} width={18} />
            <p className="text-xs mt-1 text-gray-800">Source Code</p>
         </a>

         <a className="flex flex-col items-center">
            <Image alt="" src={figma.src} height={12} width={12} />
            <p className="text-xs mt-1 text-gray-800">Prototype</p>
         </a>
         <a className="flex flex-col items-center">
            <PlayCircleIcon className="h-5" />
            <p className="text-xs mt-1 text-gray-800">Video Demo</p>
         </a>
      </div>
   );
}

export default ProjectHeader;
