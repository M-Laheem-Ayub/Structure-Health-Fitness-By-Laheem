import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {

  // State to track which div is active (selected)
  const [activeDiv, setActiveDiv] = useState('div1');

  // Function to handle div click
  const handleDivClick = (divId) => {
    setActiveDiv(divId); // Set the active div when clicked
  };

  return (
    <div className='p-0 m-0' >
      <div className='footer-body p-0 m-0'>
        <div className='pb-5'>
          <div className='row px-4 pt-5 m-0'>
            <div className='col-md-4 col-12 text-center text-md-start'>
              <h4 className='footer-title pt-3 pb-3'>Structure Health & Fitness</h4>
              <p className='left-footer-text'>Structure Health & Fitness Is The Best Gym For Ladies & Gents Located In Gulberg Lahore, Pakistan. A Top-notch Health Fitness Club With Experienced Trainers & Latest Gym Equipment.</p>
              <h4 className='footer-title pt-4'>Follow Us</h4>
              <div className='footer-icons-con pt-3'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
            <div className='col-md-4 col-12 text-center text-md-start'>
              <h4 className='footer-title  pt-3' >Useful Links</h4>
              <div className='center-footer-links pt-3'>
              <Link className="text-decoration-none border-0" to="/">
                <a href='' className='pt-0'>Home</a>
                </Link>
              <Link className="text-decoration-none border-0" to="/our-branches">
                <a href=''>Our Branches</a>
                </Link>
              <Link className="text-decoration-none border-0" to="/why-us">
                <a href=''>Why Us</a>
                </Link>
              <Link className="text-decoration-none border-0" to="/why-us">
                <a href=''>Trainers</a>
                </Link>
              <Link className="text-decoration-none border-0" to="/why-us">
                <a href=''>Blog</a>
                </Link>
                <Link className="text-decoration-none border-0" to="/contact">
                <a href=''>Contact Us</a>
                </Link>
              <Link className="text-decoration-none border-0" to="/membership">
                <a href='' className='border-0'>Work With Us</a>
                </Link>
              </div>
            </div>
            <div className='col-md-4 col-12 text-center text-md-start '>
              <h4 className='footer-title  pt-3 pb-2'>Opening Hours</h4>
              <div className='footer-branches-con d-flex'>
                <div className={`time-table-title ${activeDiv === 'div1' ? 'my-active ' : ''}`}
                  onClick={() => handleDivClick('div1')} >Gulberg Lahore</div>
                <div className={`time-table-title ${activeDiv === 'div2' ? 'my-active' : ''}`}
                  onClick={() => handleDivClick('div2')} >DHA Lahore</div>
                <div className={`time-table-title ${activeDiv === 'div3' ? 'my-active' : ''}`}
                  onClick={() => handleDivClick('div3')} >Johar Town Lahore</div>
              </div>
              <div className={` time-table-box text-light  ${activeDiv === 'div1' ? 'my-active' : ''}`}>
                    <ul>
                      <li>Monday 06:00 AM To 11:00 PM</li>
                      <li>Tuesday 06:00 AM To 11:00 PM</li>
                      <li>Wednesday 06:00 AM To 11:00 PM</li>
                      <li>Thursday 06:00 AM To 11:00 PM</li>
                      <li>Friday 06:00 AM To 11:00 PM</li>
                      <li>Saturday 09:00 AM To 10:00 PM</li>
                      <li>Sunday 10:00 AM To 07:00 PM</li>
                    </ul>
                  </div> 
                  <div className={`text-light time-table-box ${activeDiv === 'div2' ? 'my-active' : ''}`}>
                    <ul>
                      <li>Monday 07:00 AM To 10:00 PM</li>
                      <li>Tuesday 07:00 AM To 10:00 PM</li>
                      <li>Wednesday 07:00 AM To 10:00 PM</li>
                      <li>Thursday 07:00 AM To 10:00 PM</li>
                      <li>Friday 07:00 AM To 10:00 PM</li>
                      <li>Saturday 10:00 AM To 10:00 PM</li>
                      <li>Sunday 12:00 AM To 07:00 PM</li>
                    </ul>
                  </div>
                   <div className={`text-light time-table-box ${activeDiv === 'div3' ? 'my-active' : ''}`}>
                    <ul>
                      <li>Monday 06:00 AM To 10:00 PM</li>
                      <li>Tuesday 06:00 AM To 10:00 PM</li>
                      <li>Wednesday 06:00 AM To 10:00 PM</li>
                      <li>Thursday 06:00 AM To 10:00 PM</li>
                      <li>Friday 06:00 AM To 10:00 PM</li>
                      <li>Saturday 10:00 AM To 09:00 PM</li>
                      <li>Sunday Closed</li>
                    </ul>
                  </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className='footer-copyright' >
        Copyright © 2023 – 2024 | <a href=''>Structure Health & Fitness</a>
        </div>
    </div>
  )
}

export default Footer
