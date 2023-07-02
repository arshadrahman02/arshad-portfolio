import React from "react";
import Project9Button from "./Project9Button";
import bank from "../../../assets/project/bapbank.png";
const Project9 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-slate-100 mt-10 ">
      <figure>
        <Project9Button imageUrl={bank}></Project9Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://father-of-bank.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/assignment-bank">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project9;
