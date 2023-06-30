import React from "react";
import { Bounce } from "react-awesome-reveal";
import madtoys from "../../../assets/website/Screenshot (224).png";
import ImageButton from "../ImageButton/ImageButton";

const Card = () => {
  return (
    <div className="card w-80 lg:w-[650px] lg:h-[600px] lg:card-side bg-base-100 shadow-xl shadow-slate-400 lg:mt-28 mt-36 mx-auto">
      <div>
        <ImageButton imageUrl="https://i.ibb.co/JHzpF6Y/Screenshot-224.png"></ImageButton>
      </div>
      <div className="card-body">
        <p className="card-title">New album is released!</p>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
