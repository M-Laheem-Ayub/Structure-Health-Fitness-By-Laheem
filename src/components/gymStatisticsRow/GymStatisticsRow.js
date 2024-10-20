import React from 'react'
import StatisticsCard from '../statisticsCard/StatisticsCard'
import gymStatisticsData from '../../api/home/gymStatisticsData'
import './GymStatisticsRow.css'

const GymStatisticsRow = () => {
  return (
    <div className='row my-stat-row mt-md-5 g-0 d-flex justify-content-center'>
      {gymStatisticsData.map((statistic, index) => (
        <div className={`col-md-2 col-6 ${index === 4 ? 'd-none d-md-block' : 'border-secondary border-opacity-25 border-end border-3'}`} key={index}>
          <StatisticsCard icon={statistic.icon} title={statistic.title} num={statistic.no} />
        </div>
      ))}
    </div>
  )
}

export default GymStatisticsRow
