import React from 'react'
import './MapSec.css'
const MapSec = () => {
  return (
    <div>
     <img src={`${process.env.PUBLIC_URL}/assets/images/map.webp`} className='map-img' />
    </div>
  )
}

export default MapSec
