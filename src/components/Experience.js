import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
function Experience() {
  const dummyData = [
    {
      companyLogo:
        "https://i.pinimg.com/280x280_RS/c6/4c/84/c64c84e56ed10642d341e30b2f844b34.jpg",
      position: "Associate Software Engineer",
      name: "Bloomrix , Lahore",
      startDate: "Aug ’2023 – Continue",
      summary: [
        "Work with developers and designers to meet client needs.",
        "Collaborate in a cross-functional team",
        "Align software with client requirements.",
        "Designing efficient server-side logic with Laravel and ensuring smooth integration with front-end technologies.."
      ],
      techUsed: [
        "https://laravel.com/img/logomark.min.svg",
        "https://img.freepik.com/premium-vector/swoosh-letter-js-logo-design-business-company-identity-water-wave-js-logo_754537-502.jpg?w=740",
        "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
        "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
        "https://cdn.iconscout.com/icon/free/png-256/express-2-1175029.png",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      ],
    },
    {
      companyLogo:
        "https://i.pinimg.com/280x280_RS/c6/4c/84/c64c84e56ed10642d341e30b2f844b34.jpg",
      position: "Software Engineer Intern",
      name: "Bloomrix , Lahore",
      startDate: "June ’2023 – Aug ’2023",
      summary: [
        "Engaged in a Frontend Software Engineer trainee internship, focusing on frontend development",
        "Prioritized teamwork in project contributions",
        "Demonstrated expertise in React.js and UI design.",
      ],
      techUsed: [
        "https://laravel.com/img/logomark.min.svg",
        "https://img.freepik.com/premium-vector/swoosh-letter-js-logo-design-business-company-identity-water-wave-js-logo_754537-502.jpg?w=740",
        "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
        "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
        "https://cdn.iconscout.com/icon/free/png-256/express-2-1175029.png",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      ],
    },

    {
      companyLogo:
        "https://media.licdn.com/dms/image/v2/D4D0BAQF2wctmXsi6ag/company-logo_100_100/company-logo_100_100/0/1725374816566/synavosolutions_logo?e=1736985600&v=beta&t=i44LtqLw20fJExz3cFfyZlW-1SPmPInnSF63dWG01nc",
      position: "Mern Stack Intern",
      name: "Synavos , Lahore",
      startDate: "July ’2021 – October ‘2021",
      summary: [
        "Engaged in a MERN stack trainee internship, focusing on both frontend and backend development",
        "Developed responsive and interactive user interfaces using HTML, CSS, JavaScript and React js",
        "Worked closely with the backend team to integrate frontend components with RESTful APIs",
      ],
      techUsed: [
        "https://img.freepik.com/premium-vector/swoosh-letter-js-logo-design-business-company-identity-water-wave-js-logo_754537-502.jpg?w=740",
        "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
        "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
        "https://cdn.iconscout.com/icon/free/png-256/express-2-1175029.png",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      ],
    },
  ];
  return (
    <div className="experience flex flex-col text-center p-5 overflow-hidden justify-center items-center md:w-[97%] xl:w-[100%] lg:w-full">
      {/* <p className="uppercase xsm:p-16 lg:p-9 text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.8em] mx-auto xsm:mt-6"> */}
      <p className="uppercase p-9 sm:text-2xl font-bold text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.3em] xsm:pt-12  xsm:mt-12 mx-auto text-center">
        Experience
      </p>
      <div className="w-full xsm:p-5 lg:px-0 xl:p-9 flex relative justify-around items-center overflow-x-auto snap-x snap-mandatory mt-6">
        {dummyData.map((data, index) => (
          <ExperienceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
