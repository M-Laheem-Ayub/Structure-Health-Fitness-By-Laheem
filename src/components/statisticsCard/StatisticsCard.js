import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './StatisticsCard.css'

const StatisticsCard = ({icon, num, title}) => {
  return (
    <div className="my-stat-card" >
      <FontAwesomeIcon icon={icon} className="stat-icon" aria-hidden="true" />
      <div className="card-num pt-3">{num}</div>
    <div className="stat-title pt-2">{title}</div>
  </div>
  )
}

export default StatisticsCard
