import React from "react";
import html from "../../../assets/tech/html.png";
import css from "../../../assets/tech/css.png";
import javascript from "../../../assets/tech/javascript.png";
import react from "../../../assets/tech/reactjs.png";
import tailwind from "../../../assets/tech/tailwind.png";
import node from "../../../assets/tech/nodejs.png";
import mongo from "../../../assets/tech/mongodb.png";
import git from "../../../assets/tech/git.png";
import figma from "../../../assets/tech/figma.png";
import { Bounce } from "react-awesome-reveal";
const TechSection = () => {
  return (
    <div className=" lg:flex grid grid-cols-4  text-white w-[300px] mx-10 col lg:w-[1000px] lg:mx-[230px]  mt-10 lg:gap-10 gap-5 ">
      <div className="lg:flex gap-2 mt-2 text-2xl font-bold ">
        <h1>Tech </h1>
        <p>Stack</p>
        <p className="">|</p>
      </div>
      <Bounce>
        <a target="_blank" href="https://www.w3schools.com/html/">
          <img src={html} alt="" />
        </a>
      </Bounce>{" "}
      <Bounce>
        <a target="_blank" href="https://www.w3schools.com/js/default.asp">
          <img src={javascript} alt="" />
        </a>
      </Bounce>
      <Bounce>
        <a target="_blank" href="https://tailwindcss.com/">
          <img src={tailwind} alt="" />
        </a>
      </Bounce>
      <Bounce>
        <a target="_blank" href="https://react.dev/">
          <img className="lg:h-[60px] lg:w-60" src={react} alt="" />
        </a>
      </Bounce>
      <Bounce>
        <a target="_blank" href="https://nodejs.org/en/download">
          <img src={node} alt="" />
        </a>
      </Bounce>
      <Bounce>
        <a target="_blank" href="https://www.mongodb.com/atlas/database">
          <img src={mongo} alt="" />
        </a>
      </Bounce>
      <Bounce>
        <a target="_blank" href="https://github.com/">
          <img src={git} alt="" />
        </a>
      </Bounce>
      <Bounce>
        <a target="_blank" href="https://www.figma.com/">
          <img src={figma} alt="" />
        </a>
      </Bounce>
    </div>
  );
};

export default TechSection;
