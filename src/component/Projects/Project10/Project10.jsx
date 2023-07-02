import React from "react";
import Project10Button from "./Project10Button";
import legal from "../../../assets/project/legal.png";
const Project10 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-slate-400 mt-10 ">
      <figure>
        <Project10Button imageUrl={legal}></Project10Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://legal-notice.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/assignment-legal">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project10;
