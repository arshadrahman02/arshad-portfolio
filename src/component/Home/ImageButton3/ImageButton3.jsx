import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ImageButton3 = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt="Image"
        className={`transition-opacity duration-700 w-[580px] h-[600px] ${
          isHovered ? "opacity-30" : "opacity-100"
        }`}
      />

      {isHovered && (
        <div>
          <p className="absolute left-4 top-60 font-bold text-3xl text-white font-mono">
            MERN Stack WebSite <br /> Chef's Kitchen
          </p>

          <div className="absolute top-80 left-8 flex items-center justify-center">
            <a
              target="_blank"
              href="https://github.com/arshadrahman02/assignment-kitchen-client"
            >
              <button className="flex gap-2 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FaGithub className="mt-1"></FaGithub> GitHub Link
              </button>
            </a>

            <a target="_blank" href="https://chefs-kitchenn.netlify.app/">
              <button className="flex mt-10 gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                <TbWorldWww className="mt-1"></TbWorldWww> Live Link
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageButton3;
