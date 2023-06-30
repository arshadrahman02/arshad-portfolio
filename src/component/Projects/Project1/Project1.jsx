import React from "react";
import ProjectButton from "./ProjectButton";

const Project1 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 ">
      <figure>
        <ProjectButton imageUrl="https://i.ibb.co/JHzpF6Y/Screenshot-224.png"></ProjectButton>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <button className="btn btn-primary">Buy Now</button>
        <button className="btn btn-primary">Buy Now</button>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default Project1;
