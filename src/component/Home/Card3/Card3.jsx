import React from "react";
import { Bounce } from "react-awesome-reveal";
import chef from "../../../assets/website/Screenshot_2023-06-28_08-46-02.png";
import ImageButton3 from "../ImageButton3/ImageButton3";

const Card3 = () => {
  return (
    <div className="card w-80 lg:w-[650px] lg:h-[600px] lg:card-side bg-base-100 shadow-xl shadow-slate-400 mt-28 mx-auto">
      <div>
        <ImageButton3 imageUrl={chef}></ImageButton3>
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

export default Card3;
