import React from "react";
import Project8Button from "./Project8Button";
import weather from "../../../assets/project/weather.png";
const Project8 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 ">
      <figure>
        <Project8Button imageUrl={weather}></Project8Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <a href="https://arshadrahman02.github.io/temperature-hot/">
          {" "}
          <button className="btn bg-red-500 text-white hover:bg-red-600">
            Live Link
          </button>
        </a>
        <a href="https://github.com/arshadrahman02/temperature-hot">
          {" "}
          <button className="btn btn-primary">GitHub Link</button>
        </a>
      </div>
    </div>
  );
};

export default Project8;
