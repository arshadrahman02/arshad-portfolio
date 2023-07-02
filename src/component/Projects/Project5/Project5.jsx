import React from "react";
import Project5Button from "./Project5Button";
import job from "../../../assets/project/jobhunter.png";
const Project5 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-slate-400 mt-10 ">
      <figure>
        <Project5Button imageUrl={job}></Project5Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://job-hunter-project.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/assignment-job">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project5;
