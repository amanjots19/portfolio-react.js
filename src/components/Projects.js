import React, { useState } from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "./ProjectCard";
import {motion} from 'framer-motion'
const Projects = () => {
  const [projects, setProjects] = useState(data_projects);

  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };
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
      className="container projects"
      variants={projects_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={() => handleFilterCategory("React")}>React</div>
        <div onClick={() => handleFilterCategory("MERN Stack")}>MERN stack</div>
        <div onClick={() => handleFilterCategory("Data Analysis")}>
          Data Analysis
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
