import React from "react";
import { motion } from "framer-motion";

function Skill({ direction, skill }) {
  const xValue = direction === "left" ? -50 : 50;

  return (
    <div className="flex-col group">
      <div className="relative">
        <motion.img
          initial={{
            x: xValue,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={skill.logoUrl}
          alt={skill.name}
          className="rounded-full w-22 h-22 xsm:w-[60px] xsm:h-[60px] sm:w-[60px] sm:h-[60px]  md:w-[80px] md:h-[80px] xl:w-[90px] xl:h-[90px] object-cover object-center transition duration-300 filter hover:blur-md"
        />
        <div className="absolute rounded-full inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-70  xsm:w-[60px] xsm:h-[60px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] xl:w-[90px] xl:h-[90px] object-cover object-center">
          <span className="text-black font-bold text-md md:text-xl px-4 py-2 rounded-lg">
            {skill.percent}%
          </span>
        </div>
      </div>
      <div className="my-2 ">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

export default Skill;
