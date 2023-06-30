import React from "react";
import Project2Button from "./Project2Button";

const Project2 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 ">
      <figure>
        <Project2Button imageUrl="https://i.ibb.co/JHzpF6Y/Screenshot-224.png"></Project2Button>
      </figure>
      <div className="mt-5 gap-5 mx-auto mb-3 flex">
        <button className="btn btn-primary">Buy Now</button>
        <button className="btn btn-primary">Buy Now</button>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default Project2;
