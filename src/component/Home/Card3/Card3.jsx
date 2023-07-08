import React from "react";
import { Bounce } from "react-awesome-reveal";
import chef from "../../../assets/website/Screenshot_2023-06-28_08-46-02.png";
import ImageButton3 from "../ImageButton3/ImageButton3";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Card3 = () => {
  return (
    <div className="card w-80 lg:w-[650px] lg:h-[600px] lg:card-side bg-base-100 shadow-xl shadow-slate-400 mt-28 mx-auto">
      <div>
        <ImageButton3 imageUrl={chef}></ImageButton3>
      </div>
      <div className="card-body">
        <p className="card-title">Chef's kitchen (MERN Website)</p>
        <p className="font-bold">Features</p>
        <p>
          The Website is about to Resturant Base Website <br />
          Custom Authentication and Google Authentication added <br /> User can
          add there Favorite Food from Select Route
        </p>
        <p className="font-bold">Dependencies</p>
        <p>React JS | Tailwind | DaisyUI | Node JS | Express JS | MongoDB</p>

        <div className=" lg:flex gap-3 mt-3 ">
          <div className="">
            <a target="_blank" href="https://chefs-kitchenn.netlify.app/">
              <button className="btn bg-red-500 text-white hover:bg-red-600  ">
                <TbWorldWww></TbWorldWww> Live Link
              </button>
            </a>
          </div>
          <a
            target="_blank"
            href="https://github.com/arshadrahman02/assignment-kitchen-client"
          >
            <button className="btn btn-primary mt-5 lg:mt-0">
              {" "}
              <FaGithub className="mt-1"></FaGithub> GitHub Link
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card3;
