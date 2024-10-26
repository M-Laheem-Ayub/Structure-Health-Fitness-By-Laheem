import React from 'react'
import './ComfortZoneSec.css'
import { Link } from 'react-router-dom'

const ComfortZoneSec = () => {
  return (
    <div>
      <div className='ComfortZone-body pt-5 pb-5 pb-lg-0'>
        <div className='ComfortZone-contant pe-lg-5 pe-1 pt-5 text-end' >
          <h2 className='ComfortZone-heading-1 pt-5 mt-5 pe-lg-4 pe-1' >GET OUT OF YOUR</h2>
          <h2 className='ComfortZone-heading-2 ps-3 pe-lg-4 pe-1'>
            COMFORT ZONE
          </h2>
          <div className='ComfortZone-text pe-lg-4 pe-1'>Success usually comes to those who are too busy to be looking for it.</div>
          <div className='ComfortZone-text pe-lg-4 pe-1'> The body achieves what the mind believes.</div>
          <Link className="text-decoration-none " to="/membership">
          <a href='#' className='ComfortZone-btn mt-4 me-lg-4 me-1'>JOIN US TODAY</a>
          </Link>
        </div>
      </div>
      <div className='ComfortZone-divider'></div>
    </div>
  )
}

export default ComfortZoneSec
