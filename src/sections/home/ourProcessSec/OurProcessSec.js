import React from 'react';
import GoalsRow from '../../../components/goalsRow/GoalsRow';
import GymStatisticsRow from '../../../components/gymStatisticsRow/GymStatisticsRow';
import './OurProcessSec.css';

const OurProcessSec = () => {
  return (
    <div className='my-container'>
    <div className=' text-center pb-5 pb-md-0 pt-5 our-pro-title'>Our Process</div>
    <div className='container'>
    <GoalsRow/>
    </div>
    <div className=' pt-5'>
    <GymStatisticsRow/>
    </div>
    </div>
  )
}

export default OurProcessSec
