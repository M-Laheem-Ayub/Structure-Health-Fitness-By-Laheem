import React from "react";
import "./Home.css";
import HeroSec from "../../sections/home/heroSec/HeroSec";
import OurProcessSec from "../../sections/home/ourProcessSec/OurProcessSec";
import GetStartedSec from "../../sections/home/getStartedsec/GetStartedSec";
import TestimonialsSec from "../../sections/home/testimonialsSec/TestimonialsSec";
import ComfortZoneSec from "../../sections/home/comfortZoneSec/ComfortZoneSec";
import GymFactsSec from "../../sections/home/gymFactsSec/GymFactsSec";
import SpecialOfferSec from "../../sections/home/specialOfferSec/SpecialOfferSec";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <HeroSec/>
      <OurProcessSec/>
      <GetStartedSec/>
      <TestimonialsSec/>
      <GymFactsSec/>
      <ComfortZoneSec/>
      <SpecialOfferSec/>
    </section>
  );
};

export default Home;