import React from "react";
import facebook from "../../../assets/socialMEdia/facebook-removebg-preview.png";
import linkedin from "../../../assets/socialMEdia/linkdin-removebg-preview.png";
import twitter from "../../../assets/socialMEdia/twitter-removebg-preview.png";
import instagram from "../../../assets/socialMEdia/instragram-removebg-preview.png";
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-accent text-neutral-content mt-[20px]">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
        <p className="mx-20">Shaik Arshad Rahman Portfolio</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100073955862812"
        >
          <img className="w-10" src={facebook} alt="" />
        </a>
        <a target="_blank" href="https://twitter.com/ArshadRahman02">
          <img className="w-10" src={twitter} alt="" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/arshad-rahman02/">
          <img className="w-10 mt-1" src={linkedin} alt="" />
        </a>
        <a target="_blank" href="https://www.instagram.com/arshadrahman20/">
          <img className="w-10" src={instagram} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
