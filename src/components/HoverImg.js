import React from 'react';
import './HoverImg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
const HoverImg = () => {
    return (
        <div>
            <div className='title-box py-5 container-fluid'>
                <div className='row'>
                    <FontAwesomeIcon icon={faAngleDoubleDown} className="side-icon col Justify-self-lg-end border bor der-black" aria-hidden="true" />
                    <div className='ready-title col ' >READY TO GET STARTES?</div>
                    <FontAwesomeIcon icon={faAngleDoubleDown} className="side-icon col border border-black" aria-hidden="true" />
                </div>
                <div className='row'>
                    <div className='col-md-6 col-12'>

                    </div>
                    <div className='col-md-6 col-12'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverImg
