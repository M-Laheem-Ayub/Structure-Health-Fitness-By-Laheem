import React from 'react'
import './GymFactsSec.css'
import gymFactsData from '../../../api/home/gymFactsData'
const GymFactsSec = () => {
  return (
    <div className='gym-fact-con pt-5 pb-5'>
      <h2 className='gym-fact-heading pb-2'>GYM FACTS</h2>
      <p>
        You dream. You plan. You reach. There will be obstacles
      </p>
      <div className='container pb-4'>
        <div className='row pt-3'>

          {gymFactsData.map((fact, index) => (
            <div className='col-md-3 col-12 fact-card' key={index}>
              <div className='fact-num'>{fact.num}</div>
              <div className='fact-title'>{fact.title}</div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default GymFactsSec
