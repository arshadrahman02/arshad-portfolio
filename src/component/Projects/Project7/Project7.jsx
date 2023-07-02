import React from "react";
import Project7Button from "./Project7Button";
import geometry from "../../../assets/project/geometry .png";
const Project7 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-slate-100 mt-10 ">
      <figure>
        <Project7Button imageUrl={geometry}></Project7Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://geometry-calc.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/assignment-geometry">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project7;
