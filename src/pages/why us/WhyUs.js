import React from 'react'
import './WhyUs.css'
import Footer from "../../components/footer/Footer";
import WhyMainSec from '../../sections/why us/why main sec/WhyMainSec';
import Header from "../../components/header/Header";

import AboutUsSec from '../../sections/why us/about us sec/AboutUsSec';



const WhyUs = () => {
  return (
    <div className='why-us-page'>
    <Header BgColor={'why-header-color'}/>
    <WhyMainSec/>
    <AboutUsSec/>
      <Footer/>
    </div>
  )
}

export default WhyUs
