import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import bg from "../../assets/BG/herobg.png";
import Footer from "../Home/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
