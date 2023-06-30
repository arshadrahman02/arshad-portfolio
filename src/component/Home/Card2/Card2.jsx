import React from "react";
import { Bounce } from "react-awesome-reveal";
import musicMinds from "../../../assets/website/Screenshot_2023-06-28_08-26-25.png";
import ImageButton2 from "../ImageButton2/ImageButton2";

const Card2 = () => {
  return (
    <div className="card w-80 lg:w-[650px] lg:h-[600px] lg:card-side bg-base-100 shadow-xl shadow-slate-400 mt-28 mx-auto">
      <div>
        <ImageButton2 imageUrl={musicMinds}></ImageButton2>
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

export default Card2;
