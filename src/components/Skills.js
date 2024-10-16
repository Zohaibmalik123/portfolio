import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

function Skills() {
  const getDirection = (index) => {
    return index % 8 < 4 ? "left" : "right";
  };
  const SkillLogo = [
    {
      name: "HTML",
      logoUrl:
        "https://w7.pngwing.com/pngs/186/608/png-transparent-html5-icon-%E2%80%A2-html-social-network-icon.png",
      percent: 90,
    },
    {
      name: "Laravel",
      logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ82JrlYKoul-cEPccgMJvUdITR6WN5ZfMlA&s",
      percent: 90,
    },
    {
      name: "PHP",
      logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NIUKQkMz7G-QX0ob2iYYooIMbjNo8Q6mBg&s",
      percent: 80,
    },
    {
      name: "CSS",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      percent: 70,
    },
    { 
      name: "JavaScript",
      logoUrl:
        "https://img.freepik.com/premium-vector/swoosh-letter-js-logo-design-business-company-identity-water-wave-js-logo_754537-502.jpg?w=740",
      percent: 80,
    },
    {
      name: "React",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      percent: 70,
    },
    {
      name: "Tailwind",
      logoUrl:
        "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
      percent: 50,
    },
    {
      name: "Chakra UI",
      logoUrl:
        "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-770x528.png",
      percent: 60,
    },
    {
      name: "Bootstrap",
      logoUrl:
        "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
      percent: 80,
    },
    {
      name: "Node.js",
      logoUrl:
        "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
      percent: 60,
    },
    {
      name: "Firebase",
      logoUrl:
        "https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg",
      percent: 50,
    },
    {
      name: "MongoDB",
      logoUrl:
        "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Picture.png",
      percent: 50,
    },
  ];

  return (
    <div className=" flex flex-col justify-center items-center text-center p-5 pt-12">
      {/* <p className="uppercase p-16 text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.8em] mx-auto xsm:mt-6"> */}
      <p className="uppercase p-9 sm:text-2xl font-bold text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.3em] xsm:pt-12  xsm:mt-12 mx-auto text-center">
        Skills
      </p>
      {/* <h3 className="uppercase tracking-[3px] text-gray-400 text-sm">
        Hover over a skill
      </h3> */}
      <div className="md:w-6/12 xsm:w-full sm:w-8/12 place-items-center grid grid-cols-4 xsm:gap-3 md:gap-5 mt-12">
        {SkillLogo.map((skill, index) => (
          <Skill key={index} skill={skill} direction={getDirection(index)} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
