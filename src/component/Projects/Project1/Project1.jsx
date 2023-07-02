import React from "react";
import ProjectButton from "./ProjectButton";
import madToy from "../../../assets/project/madtoy.png";

const Project1 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 ">
      <figure>
        <ProjectButton imageUrl={madToy}></ProjectButton>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://madtoys.netlify.app/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project1;
