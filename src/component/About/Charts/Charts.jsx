import React from "react";
import { Link } from "react-router-dom";

const Charts = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl mt-10 font-mono font-bold mb-5">My Skills </h1>
      </div>
      <div>
        <div className="bg-gray-500  lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">HTML</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={100}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">CSS</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={90}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">JAVASCRIPT</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={80}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">BOOTSTRAP</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={90}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">TAILWIND</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={90}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">REACT JS</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={80}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">MONGODB</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={70}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">NODE JS</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={60}
              max="100"
            ></progress>{" "}
          </div>
          <br />
        </div>
        <div className="bg-gray-500 lg:mx-16">
          <div className="flex">
            <p className="font-bold text-xl mx-1">FIREBASE</p>
            <progress
              className="progress progress-success bg-transparent  mt-2 mx-5 "
              value={70}
              max="100"
            ></progress>{" "}
          </div>
          <br />
          <Link to="/projects">
            {" "}
            <button className="btn bg-cyan-300 mb-5">View My Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Charts;
