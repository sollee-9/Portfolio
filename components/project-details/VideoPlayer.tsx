"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
   const [hasWindow, setHasWindow] = useState(false);
   useEffect(() => {
      if (typeof window !== "undefined") {
         setHasWindow(true);
      }
   }, []);
   //video path
   let videosrc = "/videos/sample.mp4";
   return (
      <>
         {hasWindow && (
            <ReactPlayer
               width="500px"
               height="400px"
               url={videosrc}
               controls={true}
               // light is usefull incase of dark mode
               light={false}
               // picture in picture
               pip={true}
            />
         )}
      </>
   );
};

export default VideoPlayer;
