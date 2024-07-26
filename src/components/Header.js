import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

function Header() {
  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuChange = () => {
    setMenu(!menu);
  };
  // // for active link
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const heroSection = document.getElementById("hero");
  //     const offset = window.pageYOffset;

  //     if (offset < heroSection.offsetTop - 70) {
  //       setActiveLink("home");
  //     } else {
  //       setActiveLink("");
  //     }
  //   };

  //   // Set active link on component mount
  //   handleScroll();

  //   // Add event listener for scroll event
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // // for hamburger menu false when screen large than 1024px
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1024) {
  //       setMenu(false);
  //     }
  //   };

  //   // Check the window size on component mount
  //   handleResize();

  //   // Add event listener for resize event
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");

  //     sections.forEach((section) => {
  //       const rect = section.getBoundingClientRect();
  //       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  //         setActiveLink(section.id);
  //       }
  //     });
  //   };

  //   // Set active link on component mount
  //   handleScroll();

  //   // Add event listener for scroll event
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const showHamburgerMenu = (
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="nav_menu flex justify-between items-center cursor-pointer text-gray-300 xsm:pt-1 sm:pt-1 md:pt-4"
    >
      <AiOutlineMenuFold onClick={menuChange} className=" text-3xl " />
    </motion.div>
  );

  const showLinks = (
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="text-gray-200"
    >
      <ul className=" uppercase flex items-center gap-9 font-semibold cursor-pointer">
        <Link
          activeClass="active underline-effect"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          // onClick={() => setActiveLink("home")}
          className={activeLink === "hero" ? "active" : ""}
        >
          <li className="py-3 hover:text-blue-400 underline-effect">Home</li>
        </Link>

        <Link
          activeClass="active underline-effect"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-3 hover:text-blue-400 underline-effect">About</li>
        </Link>

        <Link
          activeClass="active underline-effect"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-3 hover:text-blue-400 underline-effect">
            Experience
          </li>
        </Link>
        <Link
          activeClass="active underline-effect"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-3 hover:text-blue-400 underline-effect">Skills</li>
        </Link>
        <Link
          activeClass="active underline-effect"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-3 hover:text-blue-400 underline-effect">
            Projects
          </li>
        </Link>

        <Link
          activeClass="active underline-effect"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-3 hover:text-blue-400 underline-effect">Contact</li>
        </Link>
      </ul>
    </motion.div>
  );

  return (
    <header className="sticky top-0 z-[100] ">
      <div className="sticky top-0 flex justify-between items-center p-5 max-w-7xl mx-auto xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex justify-between items-center nav_menu xsm:pt-2 md:pt-5"
        >
          <Link
            activeClass="active "
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h1 className=" xsm:w-10 xsm:h-10 md:w-10 md:h-10 cursor-pointer  xsm:text-base md:text-xl rounded-full bg-transparent border-2 border-white text-white flex justify-center items-center">
              ZA
            </h1>
          </Link>
        </motion.div>

        {/* Hide hamburger menu and show links on large screens */}
        <div className="hidden lg:block nav_menu">{showLinks}</div>

        {/* Show hamburger menu on small screens */}
        <div className="lg:hidden">{showHamburgerMenu}</div>
      </div>

      {/* Rest of the component */}
      <div
        className={
          menu ? " sideMenu fixed top-0 left-0 bg-black/70 h-screen w-full" : ""
        }
      >
        <div
          className={
            menu
              ? " fixed top-0 left-0 bg-[#111212] h-screen xsm:w-64 sm:w-96 ease-in duration-500  "
              : "fixed top-0 left-[-100%] bg-[#111212] h-screen xsm:w-64 sm:w-96 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex justify-end p-2 ">
              <AiOutlineClose
                onClick={menuChange}
                className="cursor-pointer shadow-lg  bg-gray-300 text-3xl rounded-full text-black p-1"
              />
            </div>
            <div className="w-[80%] mx-auto border-b-4 border-blue-400 ">
              <p className=" uppercase text-gray-300 xsm:text-sm ">
                Let's Build Something Together
              </p>
            </div>
            <div className=" text-gray-300">
              <ul className="p-9 uppercase font-semibold cursor-pointer">
                <Link
                  activeClass="active underline-effect"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  // onClick={() => setActiveLink("home")}
                  // className={activeLink === "hero" ? "active" : ""}
                >
                  <li
                    onClick={menuChange}
                    className="py-3 mt-2 hover:text-blue-400 underline-effect"
                  >
                    Home
                  </li>
                </Link>

                <Link
                  activeClass="active underline-effect"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li
                    onClick={menuChange}
                    className="py-3 mt-2 hover:text-blue-400 underline-effect"
                  >
                    About
                  </li>
                </Link>

                <Link
                  activeClass="active underline-effect"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li
                    onClick={menuChange}
                    className="py-3 mt-2 hover:text-blue-400 underline-effect"
                  >
                    Experience
                  </li>
                </Link>
                <Link
                  activeClass="active underline-effect"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li
                    onClick={menuChange}
                    className="py-3 mt-2 hover:text-blue-400 underline-effect"
                  >
                    Skills
                  </li>
                </Link>
                <Link
                  activeClass="active underline-effect"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li
                    onClick={menuChange}
                    className="py-3 mt-2 hover:text-blue-400 underline-effect"
                  >
                    Projects
                  </li>
                </Link>

                <Link
                  activeClass="active underline-effect"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li
                    onClick={menuChange}
                    className="py-3 mt-2 hover:text-blue-400 underline-effect"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex justify-between items-center sticky top-0 xsm:px-3 sm:p-3 max-w-7xl mx-auto xl:items-center mt-8">
              <div>
                <div className="text-[#1da1f2] px-2 w-[90%] mx-auto ">
                  <p className=" uppercase font-semibold ">Let's Connect</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <SocialIcon
                    className="cursor-pointer"
                    url="https://www.facebook.com/pirnce.zabi"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                  <SocialIcon
                    className="cursor-pointer"
                    url="https://twitter.com/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                  <SocialIcon
                    className="cursor-pointer"
                    url="https://github.com/Zohaibmalik123"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                  <SocialIcon
                    className="cursor-pointer"
                    url="https://www.instagram.com/zohaib.ali.malik/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
