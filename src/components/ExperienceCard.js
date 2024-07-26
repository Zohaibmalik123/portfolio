import React from "react";
import { motion } from "framer-motion";
// import profile from "../assets/profile.png";
function ExperienceCard({
  companyLogo,
  position,
  name,
  startDate,
  summary,
  techUsed,
}) {
  return (
    <article className="flex flex-col flex-shrink-0 text-gray-300 p-10 xsm:w-[300px] sm:w-[400px] justify-center items-center snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mx-3">
      <img
        src={companyLogo}
        alt="company"
        className="rounded-full mb-8 w-32 h-32 xsm:w-[80px] xsm:h-[80px] md:w-[100px] md:h-[100px] xl:w-[120px] xl:h-[120px] object-cover object-center "
      />
      <div>
        <h3 className=" xsm:text-lg sm:text-xl text-justify">{position}</h3>
        <p className="text-justify text-sm font-semibold">{name}</p>
        <div className="flex space-x-1 my-2 justify-start items-center">
          {techUsed.map((tech, index) => (
            <img
              src={tech}
              key={index}
              className="mr-2 rounded-full w-6 h-6 "
            />
          ))}
        </div>
        <p className="text-justify xsm:text-xs sm:text-sm uppercase xsm:my-3 sm:my-5">
          {startDate}
        </p>
        <ul className="list-disc ">
          {summary.map((item, index) => (
            <li
              key={index}
              className=" xsm:text-xs sm:text-sm my-3 text-justify "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
