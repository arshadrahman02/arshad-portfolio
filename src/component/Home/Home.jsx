import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import TechSection from "./TechSection/TechSection";
import ShowProjects from "./showProjects/ShowProjects";
import Card from "./Card/Card";
import Card2 from "./Card2/Card2";
import Card3 from "./Card3/Card3";
import SpecialSkill from "./SpecialSkill/SpecialSkill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TechSection></TechSection>
      <ShowProjects></ShowProjects>
      <Card></Card>
      <Card2></Card2>
      <Card3></Card3>
      <SpecialSkill></SpecialSkill>
    </div>
  );
};

export default Home;
