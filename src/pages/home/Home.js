import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import AlertBox from "../../components/alertBox/AlertBox";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Check localStorage to determine if alert has been shown
    const alertShown = localStorage.getItem("alertShown");
    if (!alertShown) {
      setShowAlert(true);
      localStorage.setItem("alertShown", "true"); // Mark alert as shown
    }
  }, []);

  const handleClose = () => setShowAlert(false);

  const handleFormSubmit = () => {
    setShowAlert(false); // Close the alert box
    navigate('/thank-you'); // Navigate to Thank You page
  };

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
      <AlertBox
        show={showAlert}
        onClose={handleClose}
        onFormSubmit={handleFormSubmit} // Pass the form submission handler
      />
    </div>
  );
};

export default Home;
