import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import hero from "../assets/hero.png";
import ReactWhatsapp from "react-whatsapp";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Guy-Who-love-Coffee.jsx", "<But Loves To Code More/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-[calc(90vh-20px)] flex flex-col items-center justify-center sm:mt-2 ">
      <img src={hero} alt="hero" width={150} height={150} />
      <p className="uppercase xsm:text-sm sm:text-base pt-9 text-gray-400 xsm:tracking-[0.2em] sm:tracking-[0.5em] mx-auto">
        Laravel Developer || Mern Stack Web Developer
      </p>
      <h1 className="font-bold uppercase xsm:text-lg sm:text-xl md:text-2xl p-4">
        Hi, The Name's <span className="text-[#1da1f2]">Zohaib</span>
      </h1>
      <h1 className="uppercase font-semibold xsm:text-lg sm:text-xl md:text-3xl py-5 ">
        <span>
          {text}
          <Cursor cursorColor="#1da1f2" />
        </span>
      </h1>
      {/* <p className="px-7 p-5 text-justify sm:w-4/6 lg:w-3/6 mx-auto text-gray-300">
        I'm a front-end web developer specializing in building (and
        occasionally designing) exceptional digital experiences. Currently,
        I'm focused on building responsive front-end web applications while
        learning back-end technologies.
      </p> */}

      <div className="flex items-center justify-around py-4">
        <ReactWhatsapp number="+92 3224753237">
          <button className="bg-[#1da1f2] text-white-100 hover:bg-[#65bff6] font-semibold xsm:text-sm sm:text-base  py-2 px-4 rounded-full uppercase ">
            Do you want to work with me ?
          </button>
        </ReactWhatsapp>
      </div>
    </div>
  );
}

export default Hero;
