import React from "react";
import "./Home.css";
import HeroSec from "../sections/home/HeroSec";
import OurProcessSec from "../sections/home/OurProcessSec";
import GetStartedSec from "../sections/home/GetStartedSec";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <HeroSec/>
      <OurProcessSec/>
      <GetStartedSec/>
    </section>
  );
};

export default Home;
