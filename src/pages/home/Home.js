import React from "react";
import "./Home.css";
import HeroSec from "../../sections/home/heroSec/HeroSec";
import OurProcessSec from "../../sections/home/ourProcessSec/OurProcessSec";
import GetStartedSec from "../../sections/home/getStartedsec/GetStartedSec";
import TestimonialsSec from "../../sections/home/testimonialsSec/TestimonialsSec";
import ComfortZoneSec from "../../sections/home/comfortZoneSec/ComfortZoneSec";
import GymFactsSec from "../../sections/home/gymFactsSec/GymFactsSec";
import SpecialOfferSec from "../../sections/home/specialOfferSec/SpecialOfferSec";
import MapSec from "../../sections/home/mapSec/MapSec";
import TipsNsightsSec from "../../sections/home/tipsINsightsSec/TipsNsightsSec";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div id="home" className="home-section">
      <Header BgColor={'home-header-color'} />
      <HeroSec/>
      <OurProcessSec/>
      <GetStartedSec/>
      <TestimonialsSec/>
      <GymFactsSec/>
      <ComfortZoneSec/>
      <SpecialOfferSec/>
      <TipsNsightsSec/>
      <MapSec/>
      <Footer/>
    </div>
  );
};

export default Home;
