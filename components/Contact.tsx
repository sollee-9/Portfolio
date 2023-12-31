"use client";
import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
   name: string;
   email: string;
   subject: string;
   message: string;
};

function Contact({}: Props) {
   const { register, handleSubmit } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      // window.location.href = `malito:sollee.contact@gmail?subject=${data.subject}&body=name: ${data.name} - ${data.message} (${data.email})`;
      console.log("sending email");
   };

   return (
      <div
         className="h-screen flex relative flex-col text-center md:text-left md:flex-row
   max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
         </h3>

         <div className="flex flex-col space-y-10 mt-8">
            <div>
               <div className="flex items-center space-x-5">
                  <EnvelopeIcon className="text-[#676097] h-7 w-7 animate-pulse" />
                  <p>sollee.contact@gmail.com</p>
               </div>
               <div className="flex items-center space-x-5">
                  <MapPinIcon className="text-[#676097] h-7 w-7 animate-pulse" />
                  <p>Vancouver, BC & New York, NY</p>
               </div>
            </div>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="flex flex-col space-y-2 w-fit mx-auto"
            >
               <div className="flex space-x-2">
                  <input
                     {...register("name")}
                     placeholder="Name"
                     className="contactInput"
                     type="text"
                  />
                  <input
                     {...register("email")}
                     placeholder="Email"
                     className="contactInput"
                     type="text"
                  />
               </div>
               <input
                  {...register("subject")}
                  placeholder="Subject"
                  className="contactInput"
                  type="text"
               />
               <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="contactInput"
               />
               <button
                  type="submit"
                  className="bg-[#676097] py-5 px-10 rounded-md text-white font-bold text-lg"
               >
                  Send
               </button>
            </form>
         </div>
      </div>
   );
}

export default Contact;
