import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
import resume from "../assets/Resume.pdf";

function About() {
  return (
    <div className=" mb-12 flex flex-col">
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
            className="xl:rounded-full xsm:w-32 xsm:h-32 md:w-48 md:h-48 md:rounded-lg  lg:w-[70%] lg:h-[73%] xl:w-[73%] xl:h-[70%]  "
            src={profile}
            alt="profile picture"
          />
        </motion.div>

        <div className="xsm:px-5 md:w-[80%] lg:w-[80%] xl:w-[50%]  h-80 ">
          {/* <p className="xsm:py-5 xsm:text-center lg:text-justify pl-5 text-2xl font-semibold">
            Here is a little background
          </p> */}
          <p className=" xsm:p-4 md:p-2 lg:p-4 text-justify mx-auto text-gray-300 sm:text-base xsm:text-sm ">
            Results-driven Laravel developer with over 1+ years of experience building scalable, efficient, and robust web applications.
            Skilled in full-stack development, API design, and integration, with proficiency in both front-end and back-end technologies
            such as Laravel, React, PHP, HTML5, CSS3, Bootstrap, JavaScript, Ajax, and jQuery. Experienced in testing APIs with Postman
            and using GitHub for version control, consistently delivering high-quality solutions on time. As a MERN Stack Developer,
            developed and maintained web applications using MongoDB, Express, React, and Node.js. Collaborated with teams to plan, design,
            and implement software solutions, ensuring clean, efficient code, while also maintaining database systems and creating user-friendly interfaces.
            Let’s connect and explore how we can work together to make your brand shine.
          </p>
          <div className="ml-4 text-gray-300 sm:text-base xsm:text-sm">
            <span>My preferred weapons of choice 👇</span>
            <div className="grid grid-cols-3 mt-6 mb-4 gap-y-4">
              <p className="flex items-center">
                <RiCheckboxCircleFill
                  className="mr-2 text-white text-xl"
                  style={{ fill: "#0c7cbf" }}
                />
                Full-stack Laravel
              </p>
              <p className="flex items-center">
                <RiCheckboxCircleFill
                  className="mr-2 text-white text-xl"
                  style={{ fill: "#0c7cbf" }}
                />
                PHP
              </p>
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
              <div className="mt-5 mb-10">
                <a
                  href={resume}
                  download="Muhammad_Zohaib_Ali_Resume.pdf"
                  className="bg-[#1da1f2] text-white-100 hover:bg-[#65bff6] text-center font-semibold py-2 px-6 rounded-lg uppercase"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
