import React from "react";
import { RiCheckboxCircleFill, RiLinksLine } from "react-icons/ri";
function Project({ project }) {
  return (
    <div className="w-full flex xsm:flex-col p-6 lg:flex-row xsm:gap-7 sm:gap-0 md:gap-5 lg:gap-20 justify-center md:pt-24 px-9 lg:px-24 ">
        <img
          className=" xl:rounded-[4rem] object-cover sm:mt-4 xsm:w-full xsm:h-[230px] sm:w-full sm:h-[350px] md:w-[600px] lg:w-[550px] lg:h-[350px] sm:p-9"
          src={project.imageUrl}
          alt={project.name}
        />
      <div className=" text-justify md:w-[600px] lg:w-[650px] xl:w-[650px] sm:p-9 md:px-9 lg:p-9">
        <h3 className="xsm:text-base sm:text-xl md:text-3xl font-bold  ">
          {project.name}
        </h3>
        <p className="sm:text-base xsm:text-sm my-4  md:w-[600px] lg:w-[450px] xl:w-[600px] text-gray-300">
          {project.description}
        </p>

        <span className="sm:text-base xsm:text-sm text-gray-300 grid grid-cols-2 ">
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.githubRepo}
            className="flex items-center "
          >
            <RiLinksLine className="mr-1" /> Github Repo
          </a> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.deployedUrl}
            className="flex items-center "
          >
            <RiLinksLine className="mr-1" /> Visit
          </a>
        </span>
        <div className="grid xsm:grid-cols-2 xsm:mt-6 mb-4 gap-y-4 text-gray-300 sm:text-base xsm:text-sm">
          {project.technologies.map((tech, index) => (
            <p key={index} className="flex items-center">
              <RiCheckboxCircleFill
                className="mr-2 text-white text-xl"
                style={{ fill: "#0c7cbf" }}
              />
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
