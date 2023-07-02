import React from "react";

import facebook from "../../../assets/socialMEdia/facebook-removebg-preview.png";
import linkedin from "../../../assets/socialMEdia/linkdin-removebg-preview.png";
import twitter from "../../../assets/socialMEdia/twitter-removebg-preview.png";
import instagram from "../../../assets/socialMEdia/instragram-removebg-preview.png";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[600px] h-[630px]  object-cover  "
      style={{
        backgroundImage: `url("https://i.ibb.co/cb1dSMj/herobg.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-0 h-full"></div>
      <div className="hero-content text-center  ">
        <div className="max-w-full font-sans">
          <h1 className="mb-5 text-5xl text-white font-bold font-mono lg:mt-1 mt-20 ">
            I Am Shaik Arshad Rahman{" "}
            <div className="mt-5">
              {" "}
              <Typewriter
                words={["Web Developer", "Programmer", "MERN-Stack Developer"]}
                loop={5}
                cursor
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </div>
            <small className="text-base ">
              I specialize in web development and designing and programming.
            </small>
            <div className=" lg:flex gap-5 mx-6 lg:gap-5 lg:mx-40 mt-8">
              <a
                target="_blank"
                href="https://github.com/arshadrahman02"
                className="btn bg-amber-100 font-bold hover:bg-blue-400"
              >
                <FaGithub></FaGithub> github link
              </a>
              <br />
              <a
                target="_blank"
                href="/public/RESUME-OF-SHAIK-ARSHAD-RAHMAN.pdf"
                download
                className="btn bg-amber-100 font-bold hover:bg-blue-400"
              >
                <FaDownload></FaDownload> Download My Resume
              </a>
            </div>
          </h1>
          <div className="flex lg:w-64 w-44 gap-3 mx-[95px] lg:mx-52 lg:mt-10">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100073955862812"
            >
              <img src={facebook} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/ArshadRahman02">
              <img src={twitter} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/arshad-rahman02/"
            >
              <img src={linkedin} alt="" />
            </a>
            <a target="_blank" href="https://www.instagram.com/arshadrahman20/">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
