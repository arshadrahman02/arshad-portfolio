import React from "react";
import Project4Button from "./Project4Button";
import books from "../../../assets/project/books.png";
const Project4 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 ">
      <figure>
        <Project4Button imageUrl={books}></Project4Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://bookscafee.netlify.app/">
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

export default Project4;
