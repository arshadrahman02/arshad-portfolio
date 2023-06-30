import React from "react";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";

const Projects = () => {
  return (
    <div>
      <div className="text-white text-3xl mt-10 text-center font-bold font-mono">
        <h1>MY WORK</h1>
        <p className="text-cyan-300">______</p>
      </div>
      <p className="text-white text-xl mt-10 text-center font-bold font-mono">
        Check out some of my projects
      </p>
      <div className="grid lg:grid-cols-3">
        <Project1></Project1>
        <Project2></Project2>
      </div>
    </div>
  );
};

export default Projects;
