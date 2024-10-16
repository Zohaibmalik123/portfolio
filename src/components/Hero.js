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
    // <div className=" h-[calc(90vh-20px)] flex flex-col items-center justify-center sm:mt-2 ">
    //   <img src={hero} alt="hero" width={150} height={150} />
    //   <p className="uppercase xsm:text-sm sm:text-base pt-9 text-gray-400 xsm:tracking-[0.2em] sm:tracking-[0.5em] mx-auto">
    //     Laravel Developer || Mern Stack Web Developer
    //   </p>
    //   <h1 className="font-bold uppercase xsm:text-lg sm:text-xl md:text-2xl p-4">
    //     Hi, The Name's <span className="text-[#1da1f2]">Zohaib</span>
    //   </h1>
    //   <h1 className="uppercase font-semibold xsm:text-lg sm:text-xl md:text-3xl py-5 ">
    //     <span>
    //       {text}
    //       <Cursor cursorColor="#1da1f2" />
    //     </span>
    //   </h1>
    //   {/* <p className="px-7 p-5 text-justify sm:w-4/6 lg:w-3/6 mx-auto text-gray-300">
    //     I'm a front-end web developer specializing in building (and
    //     occasionally designing) exceptional digital experiences. Currently,
    //     I'm focused on building responsive front-end web applications while
    //     learning back-end technologies.
    //   </p> */}

    //   <div className="flex items-center justify-around py-4">
    //     <ReactWhatsapp number="+92 3224753237">
    //       <button className="bg-[#1da1f2] text-white-100 hover:bg-[#65bff6] font-semibold xsm:text-sm sm:text-base  py-2 px-4 rounded-full uppercase ">
    //         Do you want to work with me ?
    //       </button>
    //     </ReactWhatsapp>
    //   </div>
    // </div>
    <div className="h-[calc(90vh-20px)] flex flex-col sm:flex-row items-center justify-center sm:mt-2 px-6 sm:px-10">
      {/* Image Column */}
      <div className="flex flex-1 lg:justify-center md:justify-center sm:justify-end mb-4 sm:mb-0">
        <img src={hero} alt="hero" width={500} height={500} className="rounded-full" />
      </div>

      {/* Text Column */}
      <div className="flex flex-1 flex-col lg:items-start sm:items-start text-center sm:text-left space-y-8">
        <p className="uppercase xsm:text-base sm:text-lg text-gray-400 tracking-wider">
          Laravel Full-stack Developer || Mern Stack Web Developer
        </p>
        <h1 className="font-bold uppercase xsm:text-xl sm:text-2xl md:text-3xl mt-4">
          Hi, The Name's <span className="text-[#1da1f2] font-extrabold text-2xl">Zohaib</span>
        </h1>
        <h1 className="uppercase font-semibold xsm:text-xl sm:text-2xl md:text-4xl py-3">
          <span>
            {text}
            <Cursor cursorColor="#1da1f2" />
          </span>
        </h1>

        {/* Button */}
        <div className="py-4">
          <ReactWhatsapp number="+92 3224753237">
            <button className="bg-[#1da1f2] text-white hover:bg-[#65bff6] font-semibold xsm:text-base sm:text-lg py-2 px-6 rounded-full uppercase">
              Do you want to work with me ?
            </button>
          </ReactWhatsapp>
        </div>
      </div>

    </div>







  );
}

export default Hero;
