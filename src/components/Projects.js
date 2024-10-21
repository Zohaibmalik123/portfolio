import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Project from "./Project";

const slideVariants = {
  enter: (direction) => {
    return {
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction === "left" ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const projectsData = [
    {
      id: 1,
      name: "Trusted Legal Advisor",
      imageUrl:
        "https://adnanpersonalportfolio.netlify.app/wp-content/uploads/2024/10/pexels-ekaterina-bolovtsova-6077447-1.jpg",
      deployedUrl: "https://www.firstlawsolicitors.co.uk/",
      githubRepo: "#",
      description:
        "A Team of solicitors you can trust to handle complex legal matters. No matter what the obstacles, we will work tenaciously to achieve a positive result.",
      technologies: ["HTML", "CSS", "Javascript", "Laravel "],
    },
    {
      id: 2,
      name: "E-commerce Dashboard",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwagaqefYZm0VGtRAHvn3cTtQvN1rkj7JPw&s",
      deployedUrl: "https://react-shopify-site.vercel.app/",
      githubRepo: "#",
      description:
        "An e-commerce platform with an order catalog, customer and employee modules, featuring charts, a Kanban board, and a color picker. This platform allows users to manage orders efficiently while providing tools for tracking and customization, enhancing both the user and administrative experience",
      technologies: ["React JS", "Tailwind" , "Chakra UI" , "Syncfusion "],
    },
    {
      id: 3,
      name: "Searching-filtering-pagination",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-4f2d2.appspot.com/o/react-filtering-searching-pagination.png?alt=media&token=3cff4606-68a7-4822-a5bb-f5a4ef0dbb6e",
      deployedUrl: "https://react-filtering-searching-pagination.vercel.app/",
      githubRepo:
        "#",
      description:
        "A web page that includes searching, filtering by category, and pagination features. I utilized Chakra UI to style the project efficiently and create an intuitive user interface.",
      technologies: ["React", "Chakra UI"],
    },
    {
      id: 4,
      name: "Expert Printing Solutions",
      imageUrl:
        "https://adnanpersonalportfolio.netlify.app/wp-content/uploads/2024/10/geri-sakti-g9_KP2fvFII-unsplash-1-1.jpg",
      deployedUrl: "https://www.printvillage.co.uk/",
      githubRepo: "#",
      description:
        "Our initiative is dedicated to empowering small and start-up ventures in their quest for work and co-working spaces.",
      technologies: ["HTML", "CSS", "Javascript" , "Laravel"],
    },
  ];

  const goToPreviousProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projectsData.length - 1 : prevProject - 1
    );
    setSlideDirection("left");
  };

  const goToNextProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === projectsData.length - 1 ? 0 : prevProject + 1
    );
    setSlideDirection("right");
  };

  return (
    <div className="relative flex flex-col text-center justify-center items-center overflow-hidden md:w-[100%]">
      {/* Heading */}
      {/* <p className="uppercase xsm:p-16 lg:p-5 text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.8em] mx-auto xsm:mt-6"> */}
      <p className="uppercase p-9 sm:text-2xl font-bold text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.3em] xsm:pt-12  xsm:mt-12 mx-auto text-center">
        Projects
      </p>

      {/* Project component with animation */}
      <motion.div
        key={currentProject}
        custom={slideDirection}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        // Add this line to give a fixed height to the container
      >
        <Project project={projectsData[currentProject]} />
      </motion.div>

      {/* Left chevron */}
      <div
        onClick={goToPreviousProject}
        className="absolute text-gray-400 xsm:top-[60%] left-1 md:left-5 cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right chevron */}
      <div
        onClick={goToNextProject}
        className="absolute text-gray-400 xsm:top-[60%] right-1 md:right-5 cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Projects;
