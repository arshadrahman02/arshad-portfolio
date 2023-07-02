import React from "react";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";
import Project4 from "./Project4/Project4";
import Project5 from "./Project5/Project5";
import Project7 from "./Project7/Project7";
import Project6 from "./Project6/Project6";
import Project8 from "./Project8/Project8";
import Project9 from "./Project9/Project9";
import Project10 from "./Project10/Project10";

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
      <div className="grid lg:grid-cols-3 lg:mx-28 mx-1 lg:gap-16  ">
        <Project1></Project1>
        <Project2></Project2>
        <Project3></Project3>
        <Project4></Project4>
        <Project5></Project5>
        <Project6></Project6>
        <Project7></Project7>
        <Project8></Project8>
        <Project9></Project9>
        <Project10></Project10>
      </div>
    </div>
  );
};

export default Projects;
