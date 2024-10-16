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
      name: "E-Commerce-FYP",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-4f2d2.appspot.com/o/ecommerce-mern-app.vercel.png?alt=media&token=ee13ddff-0df0-46cd-93e4-b52886639adc",
      deployedUrl: "#",
      githubRepo: "#",
      description:
        "An e-commerce platform with a product catalog, shopping cart, and Stripe integration for payments. It allows users to browse, purchase, and track their orders easily.",
      technologies: ["React JS", "Node", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      name: "Facebook Clone",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-4f2d2.appspot.com/o/facebook-clone.png?alt=media&token=adab8011-ea4d-48b8-9095-dd1399ae40bb",
      deployedUrl: "https://facebook-clone-blush-alpha.vercel.app/",
      githubRepo: "#",
      description:
        "A social media platform that allowed users to sign in with their Google accounts and share updates.",
      technologies: ["React JS", "Firebase"],
    },
    {
      id: 3,
      name: "searching-filtering-pagination",
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
      name: "E-commerce Store",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-4f2d2.appspot.com/o/javascript-shopping-cart.png?alt=media&token=a246c70e-6d9c-4f87-9ba3-619dc70c2083",
      deployedUrl: "https://javascript-shopping-cart.vercel.app/",
      githubRepo: "#",
      description:
        "Websites that allow customers to browse, search, and add items to their shopping carts",
      technologies: ["HTML", "CSS", "Javascript"],
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
