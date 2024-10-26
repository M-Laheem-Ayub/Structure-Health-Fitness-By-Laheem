import React from 'react'
import './ThanksYou.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ThanksYou = () => {
  return (
    <div>
      <div className='Thanks-body'>
      <FontAwesomeIcon className='thanks-icon' icon={faEnvelopeOpen} />
    <div className='thanks-title pt-3'>Thank You!</div>
    <div className='thanks-text'>Our representative will call you soon</div>
    <Link className="text-decoration-none thank-btn mt-3" to="/">
    <div >Back To Home Page
    <FontAwesomeIcon className='ps-2 fs-6' icon={faArrowRight} />
    </div>
    </Link>

      </div>
    </div>
  )
}

export default ThanksYou
