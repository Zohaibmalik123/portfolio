import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { RiCheckboxCircleFill } from "react-icons/ri";

function About() {
  return (
    <div className=" flex flex-col">
      <div className="xsm:p-4 md:p-9">
        <p className="uppercase p-9 sm:text-2xl font-bold text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.3em] mx-auto text-center">
          About Me
        </p>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center mx-auto sm:w-[90%] md:w-[85%] lg:w-[90%] ">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="py-6"
        >
          <img
            className="xl:rounded-full xsm:w-32 xsm:h-32 md:w-48 md:h-48 md:rounded-lg  lg:w-[70%] lg:h-[70%] xl:w-[70%] xl:h-[70%]  "
            src={profile}
            alt="profile picture"
          />
        </motion.div>

        <div className="xsm:px-5 md:w-[80%] lg:w-[80%] xl:w-[50%]  h-80 ">
          {/* <p className="xsm:py-5 xsm:text-center lg:text-justify pl-5 text-2xl font-semibold">
            Here is a little background
          </p> */}
          <p className=" xsm:p-4 md:p-2 lg:p-4 text-justify mx-auto text-gray-300 sm:text-base xsm:text-sm ">
            As a MERN Stack Developer Intern, developed and maintained web
            applications using the MERN stack. Collaborated with the team to
            plan and design software solutions, wrote clean and efficient code,
            and troubleshooted and debugged code issues. Also developed and
            maintained database systems using MongoDB, RESTful APIs using
            Node.js and Express, and worked with React to create user-friendly
            interfaces.
          </p>
          <div className="ml-4 text-gray-300 sm:text-base xsm:text-sm">
            <span>My preferred weapons of choice 👇</span>
            <div className="grid grid-cols-2 mt-6 mb-4 gap-y-4">
              <p className="flex items-center">
                <RiCheckboxCircleFill
                  className="mr-2 text-white text-xl"
                  style={{ fill: "#0c7cbf" }}
                />
                JavaScript
              </p>
              <p className="flex items-center">
                <RiCheckboxCircleFill
                  className="mr-2 text-white text-xl"
                  style={{ fill: "#0c7cbf" }}
                />
                React
              </p>
              <p className="flex items-center">
                <RiCheckboxCircleFill
                  className="mr-2 text-white text-xl"
                  style={{ fill: "#0c7cbf" }}
                />
                Redux/Context
              </p>
              <p className="flex items-center">
                <RiCheckboxCircleFill
                  className="mr-2 text-white text-xl"
                  style={{ fill: "#0c7cbf" }}
                />
                NodeJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
