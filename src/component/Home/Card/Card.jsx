import React from "react";
import { Bounce } from "react-awesome-reveal";
import madtoys from "../../../assets/website/Screenshot (224).png";
import ImageButton from "../ImageButton/ImageButton";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card w-80 lg:w-[650px] lg:h-[600px] lg:card-side bg-base-100 shadow-xl shadow-slate-400 lg:mt-28 mt-36 mx-auto">
      <div>
        <ImageButton imageUrl="https://i.ibb.co/JHzpF6Y/Screenshot-224.png"></ImageButton>
      </div>
      <div className="card-body">
        <p className="card-title">Mad Toys (Full Stack MERN Website)</p>
        <p className="font-bold">Features</p>
        <p>
          The Website is about to Toy Store Website.In this site we have All
          toys component, add toys component <br />
          User can add there Favorite Toys from add Toy Route <br />
          User can update there Favorite Toys from my Toy Route <br />
          User can delete there Favorite Toys from my Toy Route <br />
          Custom Authentication and GitHub Authentication added
        </p>
        <p className="font-bold">Dependencies</p>
        <p>React JS | Tailwind | DaisyUI | Node JS | Express JS | MongoDB</p>

        <div className=" lg:flex gap-3 mt-3 ">
          <div className="">
            <a target="_blank" href="https://madtoys.netlify.app/">
              <button className="btn bg-red-500 text-white hover:bg-red-600  ">
                <TbWorldWww></TbWorldWww> Live Link
              </button>
            </a>
          </div>
          <a
            target="_blank"
            href="https://github.com/arshadrahman02/assignment-toys-client"
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

export default Card;
