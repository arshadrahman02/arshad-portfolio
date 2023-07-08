import React from "react";
import { Bounce } from "react-awesome-reveal";
import musicMinds from "../../../assets/website/Screenshot_2023-06-28_08-26-25.png";
import ImageButton2 from "../ImageButton2/ImageButton2";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Card2 = () => {
  return (
    <div className="card w-80 lg:w-[650px] lg:h-[600px] lg:card-side bg-base-100 shadow-xl shadow-slate-400 mt-28 mx-auto">
      <div>
        <ImageButton2 imageUrl={musicMinds}></ImageButton2>
      </div>
      <div className="card-body">
        <p className="card-title">Music-Minds (Full Stack MREN Website)</p>
        <p className="font-bold">Features</p>
        <p>
          It a Real-Learning Project About E-commerce and its under development{" "}
          <br />
          Instructor can add class by there choice <br />
          Admin can approve the instructor class by clicking approve button
        </p>
        <p className="font-bold">Dependencies</p>
        <p>React JS | Tailwind | DaisyUI | Node JS | Express JS | MongoDB</p>

        <div className=" lg:flex gap-3 mt-3 ">
          <div className="">
            <a target="_blank" href="https://music-minds.netlify.app/">
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

export default Card2;
