import React from 'react'
import './MapSec.css'
const MapSec = () => {
  return (
    <div>
      <iframe
        src="https://maps.google.com/maps?q=Structure+Health+%26+Fitness+Gulberg+Lahore&output=embed"
        className='map-iframe'
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Structure Health & Fitness Gulberg Lahore Location"
      ></iframe>
    </div>
  )
}

export default MapSec
