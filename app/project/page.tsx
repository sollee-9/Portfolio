"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import VideoPlayer from "../../components/project-details/VideoPlayer";
import ProjectHeader from "@/components/project-details/ProjectHeader";

type Props = {};

const ProjectDetails = () => {
   const router = useRouter();
   const params = useSearchParams();
   const project = params.get("name");
   const goBackToProject = () => {
      router.push("/#projects");
   };
   return (
      <div
         className="bg-[url('../images/background.png')] bg-no-repeat bg-cover text-black overflow-y-scroll overflow-x-hidden z-0
          scrollbar-thin scrollbar-thumb-[#C4C3CD] scrollbar-rounded-xl relative"
      >
         <div className="p-5 fixed">
            <button onClick={() => goBackToProject()}>
               <ArrowLeftIcon className="h-8" />
            </button>
         </div>
         <h1 className="text-4xl my-16 text-center">
            Airbnb Compare & Suggest
         </h1>

         <ProjectHeader />

         <section className="h-[6000px]">
            <VideoPlayer />
         </section>
      </div>
   );
};

export default ProjectDetails;
