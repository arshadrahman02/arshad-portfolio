import React from "react";
import self from "../../assets/resume/16881205596134.jpg";
import { FaDownload } from "react-icons/fa";
import facebook from "../../assets/socialMEdia/facebook-removebg-preview.png";
import linkedin from "../../assets/socialMEdia/linkdin-removebg-preview.png";
import twitter from "../../assets/socialMEdia/twitter-removebg-preview.png";
import instagram from "../../assets/socialMEdia/instragram-removebg-preview.png";
const About = () => {
  return (
    <div>
      <div className="mt-20 text-center text-white">
        <h1 className="text-4xl">ABOUT ME</h1>
        <p className="text-cyan-300 font-bold">__________</p>
        <p className="mt-5">
          I am Shaik Arshad Rahman. I am a English Language Literature student
          as well as a web developer.
        </p>
        <div>
          <img
            className=" rounded-xl w-[300px] h-[300px] mt-10 mx-auto"
            src={self}
            alt=""
          />
          <p className="bg-gray-500 mx-20 mt-5">
            <span className="uppercase text-2xl font-bold">My Process</span>{" "}
            <br />{" "}
            <span>
              Before starting a project, first thing i always do and that is,
              discuss the project step by step with myself and partner or
              client.Then as always i do a website making plan for the website's
              responsiveness. Interaction also a valuable process for making a
              web app. I never shy to interact with others, because i love to
              learn new things and try to help others for make the project
              purposeful.
            </span>
            <br />
            <a href="https://drive.google.com/file/d/1dBk6GeHuPFdICe010EbdxIv1LC19LyEE/view?usp=sharing">
              <button className="btn bg-cyan-300 mt-5 mb-5 hover:bg-green-600 hover:text-white">
                <FaDownload></FaDownload> Resume
              </button>
            </a>
          </p>
        </div>
        <footer className=" mt-20 items-center p-4 bg-gray-500 lg:w-[1055.5px] mx-20 text-neutral-content">
          <div className="items-center grid-flow-col ">
            <p className="text-2xl font-bold text-white ">CONNECT ME VIA</p>
          </div>
          <div className="flex mt-10 lg:mx-[415px] gap-4 md:place-self-center md:justify-self-end">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100073955862812"
            >
              <img className="w-10" src={facebook} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/ArshadRahman02">
              <img className="w-10" src={twitter} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/arshad-rahman02/"
            >
              <img className="w-10 mt-1" src={linkedin} alt="" />
            </a>
            <a target="_blank" href="https://www.instagram.com/arshadrahman20/">
              <img className="w-10" src={instagram} alt="" />
            </a>
          </div>
        </footer>
        <div>
          <p className="text-2xl mt-5 font-bold font-mono">Education</p>
          <div className="grid lg:grid-cols-3  mt-5 mx-0">
            <p>
              B.A (Bachelor of Arts) <br />{" "}
              <span>English Language Literature</span> <br />{" "}
              <span>2021-(Present)</span>{" "}
            </p>
            <p className="lg:mt-0 mt-8">
              H.S.C (Higher Secondary School Certificate ) <br />{" "}
              <span>Bangladesh Navy College</span> <br /> <span>2018-2020</span>{" "}
            </p>
            <p className="lg:mt-0 mt-8">
              S.S.C (Secondary School Certificate ) <br />{" "}
              <span>Government Muslim High School</span> <br />{" "}
              <span>2012-2018</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
