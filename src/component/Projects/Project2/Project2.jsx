import React from "react";
import Project2Button from "./Project2Button";
import music from "../../../assets/project/music.png";
const Project2 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-slate-400 mt-10 ">
      <figure>
        <Project2Button imageUrl={music}></Project2Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://music-minds.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/assignment-music">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project2;
