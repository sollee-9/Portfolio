"use client";
import React, { useState } from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

type Props = {};

type Inputs = {
   name: string;
   email: string;
   subject: string;
   message: string;
};

function Contact({}: Props) {
   const [name, setName] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [message, setMessage] = useState<string>("");
   const [subject, setSubject] = useState<string>("");

   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const params = {
         from_name: name,
         email_id: email,
         message: message,
         subject: subject,
      };

      emailjs
         .send(
            "service_7tv4raq",
            "template_2lad7sl",
            params,
            "5E1rl8HXA2njN6dNr"
         )
         .then(
            (result) => {
               console.log("email sent");
               setName("");
               setEmail("");
               setMessage("");
               setSubject("");
            },
            (error) => {
               console.log(error.text);
            }
         );
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
               onSubmit={(e) => sendEmail(e)}
               className="flex flex-col space-y-2 w-fit mx-auto"
            >
               <div className="flex space-x-2">
                  <input
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Name"
                     className="contactInput"
                     type="text"
                     required
                  />
                  <input
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                     className="contactInput"
                     type="text"
                     required
                  />
               </div>
               <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="contactInput"
                  type="text"
                  required
               />
               <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className="contactInput"
                  required
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
