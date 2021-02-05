import React from "react";
import Skillcard from "./Skillcard";
import api from "../assets/icons/api.svg";
import computer from "../assets/icons/computer.svg";
import algo from "../assets/icons/algo.svg";
import repair from "../assets/icons/repair.svg";
// import repair from '../assets/icons/.svg';
import puzzle from "../assets/icons/puzzle.svg";
import { motion } from "framer-motion";
const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using HTML , CSS and React.js.",
  },
  {
    icon: algo,
    title: "Backend development",
    about: "I can build a a dynamic and responsive website using MERN stack.",
  },
  {
    icon: repair,
    title: "Database Management",
    about: "Can handle database, server, API using and Nosql and sql",
  },
  {
    icon: api,
    title: "API Development",
    about: "I can develop robust REST API.",
  },
  {
    icon: puzzle,
    title: "Competitive Coder",
    about: "A daily problem solver in GFG , LEETCODE and PEP coding.",
  },
];

const About = () => {
  const projects_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
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
      className="about"
      className="container projects"
      variants={projects_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">
        I decribe myself as someone who's persistant , a quick learner and loves
        problem solving by using simple and scalable solutions.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
