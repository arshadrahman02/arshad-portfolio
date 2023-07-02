import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const Project6Button = ({ imageUrl }) => {
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
        className={`transition-opacity duration-700 w-[1000px] h-[300px] ${
          isHovered ? "opacity-30" : "opacity-100"
        }`}
      />

      {isHovered && (
        <div>
          <p className="absolute left-4 top-10 font-bold text-3xl text-white font-mono">
            JavaScript WebSite <br />
            Quiz Hero
          </p>

          <div className="absolute top-28 left-8  flex items-center justify-center">
            <a
              target="_blank"
              href="https://github.com/arshadrahman02/assignment-quiz"
            >
              <button className="flex mt-10 gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FaGithub className="mt-1"></FaGithub> GitHub Link
              </button>
            </a>

            <a target="_blank" href="https://quiz-hero-bug.netlify.app/">
              <button className="flex  mt-10 gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                <TbWorldWww className="mt-1"></TbWorldWww> Live Link
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project6Button;
