import React from "react";
import Project3Button from "./Project3Button";
import chef from "../../../assets/project/chef.png";
const Project3 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-slate-100 mt-10 ">
      <figure>
        <Project3Button imageUrl={chef}></Project3Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://chefs-kitchenn.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/assignment-kitchen-client">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project3;
