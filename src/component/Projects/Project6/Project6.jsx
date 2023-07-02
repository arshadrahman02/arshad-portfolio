import React from "react";
import Project6Button from "./Project6Button";
import quiz from "../../../assets/project/quiz.png";
const Project6 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-slate-100 mt-10 ">
      <figure>
        <Project6Button imageUrl={quiz}></Project6Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://quiz-hero-bug.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/assignment-quiz">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project6;
