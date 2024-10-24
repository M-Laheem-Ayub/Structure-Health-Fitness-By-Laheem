import React from 'react';
import './TipsNsightSec.css';
import TipsRow from '../../../components/tipsRow/TipsRow';


const TipsNsightsSec = () => {
  return (
    <div>
      <div className='tip-sec-body pb-5 '>
        <div className='tip-sec-title ps-md-4 my-5 m-0 row'>
          <div className='tip-sec-bold-title mt-5 ps-md-5 ps-0 col-md-4 col-12'>TIPS & INSIGHTS</div>
          <div className='col-md-8 col-12 d-flex'>
          <div className='tip-sec-divider mt-5 '></div>
          <div className='tip-sec-title-text mt-5' >Get the latest training tips & performance insights from the team at
            Structure Health & Fitness.</div>
          </div>
          
        </div>
        <div className="pb-5">
          <TipsRow />
        </div>
      </div>
    </div>
  )
};

export default TipsNsightsSec;
