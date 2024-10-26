import React from 'react'
import './OurBranches.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import OurBranchMainSec from '../../sections/our branches/our branches main sec/OurBranchMainSec'
import BranchTypesSec from '../../sections/our branches/branches types sec/BranchTypesSec'
import ComfortZoneSec from "../../sections/home/comfortZoneSec/ComfortZoneSec";
import MapSec from '../../sections/home/mapSec/MapSec'
import KeepInTouchSec from '../../sections/our branches/keep in touch sec/KeepInTouchSec'


const OurBranches = () => {
  return (
    <div className='branches-page'>
      <Header BgColor={'why-header-color'}/>
      <OurBranchMainSec/>
      <BranchTypesSec/>
      <ComfortZoneSec/>
      <KeepInTouchSec/>
      <MapSec/>
      <Footer/>
    </div>
  )
}

export default OurBranches
