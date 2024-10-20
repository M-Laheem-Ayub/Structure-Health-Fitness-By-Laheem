import React from "react";
import "./Home.css";
import HeroSec from "../../sections/home/heroSec/HeroSec";
import OurProcessSec from "../../sections/home/ourProcessSec/OurProcessSec";
import GetStartedSec from "../../sections/home/getStartedsec/GetStartedSec";

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
