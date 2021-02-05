import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";
import { motion } from "framer-motion";
const languages = [
  {
    icon: react,
    name: "Java",
    level: "75",
  },
  {
    icon: react,
    name: "Javascript",
    level: "80",
  },
  {
    icon: react,
    name: "Node.js",
    level: "75",
  },
  {
    icon: react,
    name: "React.js",
    level: "70",
  },
  {
    icon: react,
    name: "Express.js",
    level: "80",
  },
  {
    icon: react,
    name: "Mongoose",
    level: "80",
  },
  {
    icon: react,
    name: "Python",
    level: "60",
  },
  {
    icon: react,
    name: "MongoDB",
    level: "80",
  },
];
const tools = [
  {
    icon: react,
    name: "Git",
    level: "80",
  },
  {
    icon: react,
    name: "Github",
    level: "80",
  },
  {
    icon: react,
    name: "Heroku",
    level: "80",
  },
];

const Resume = () => {
  const navbar_variant = {
    hidden: {
      y: "-20vh",
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
      }
    },
    exit:{
      opacity:0,
      transition:{
        ease:'easeInOut'
      }
    }
  };
  return (
    <motion.div
      className="container resume__"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="reume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Bachelors in Technology</h5>
            <p className="resume-card__name">
              Guru Gobind Singh Indraprastha University(2018-2022)
            </p>
            <p className="resume-card__details">
              I am persuing B.tech in Computer Science Engineering from IPU.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="reume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Internship</h5>
            <h6>1 month</h6>
            <p className="resume-card__name">Technocolabs, Indore</p>
            <p className="resume-card__details">
              I worked as an intern and also completed some project on Data
              Analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Language and Frameworks</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Resume;
