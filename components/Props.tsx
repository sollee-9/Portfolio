import React from "react";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};
function Hero({}: Props) {
   const [text, count] = useTypewriter({
      words: ["Developer", "Designer", "Creator"],
   });
   return <div></div>;
}
export default Hero;
