import React from "react";
import { Link } from "react-router-dom";

const ShowProjects = () => {
  return (
    <div className="text-white  ">
      <h1 className="text-center mt-10 text-3xl font-serif ">
        MY BEST PROJECTS
      </h1>

      <p className="absolute lg:left-[540px] left-20 mt-5">
        To see more of my Projects visit my
        <Link
          to="/projects"
          className="  btn text-white bg-gray-950 mt-5 hover:bg-emerald-400 p-4 mx-2"
        >
          <span className="lg:mx-0 mx-14">Project Page</span>
        </Link>
      </p>
    </div>
  );
};

export default ShowProjects;
