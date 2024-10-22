import React from 'react';
import './HoverImg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
const HoverImg = () => {
    return (
        <div>
            <div className='title-box container-fluid'>
                <div className='row pt-5 align-items-center'>
                    <div className='l-side-icon col-md- col'>
                        <FontAwesomeIcon icon={faAngleDoubleDown} className="side-icon  " aria-hidden="true" />
                    </div>
                    <div className='ready-title col-xl-4 col-lg-5 col-md-6 col-9' >READY TO GET STARTES?</div>
                    <div className='r-side-icon col-md- col'>
                        <FontAwesomeIcon icon={faAngleDoubleDown} className="side-icon  " aria-hidden="true" />
                    </div>
                </div>
                <div className=' row mt-5'>
                    <div className='col-md-6 col-12 bg-img-r'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/our_classes.png`} alt='classes' />

                        <a href='#' className='our-btn '>
                            OUR CLASSES
                        </a>
                    </div>
                    <div className='col-md-6 col-12 bg-img-l'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/our_branches.png`} alt='classes' />

                        <a href='#' className='our-btn'>
                            OUR TRAINERS
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverImg
