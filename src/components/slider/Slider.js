import React from 'react';
import './Slider.css';
import slidesData from '../../api/home/slidesData';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators my-indicators">
                {slidesData.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        className={`my-ind ${id === 0 ? 'active' : ''}`}
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={id}
                        aria-label={label}
                        aria-current={id === 0 ? 'true' : 'false'} /* Improves accessibility */
                    >
                        <div className="dot"></div>
                    </button>
                ))}
            </div>
            <div className="carousel-inner slide-box">
                {slidesData.map(({ id, backgroundClass, t1, t2, t3, t4, btnText }, index) => (
                    <div key={id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className={`${backgroundClass}`}>
                            <div className=' right-corner'></div>
                            <div className='slide-all-content '>
                                <div className='slide-text-box '>
                                    <div className='slide-text'>{t1}</div>
                                    <div className='slide-text'>{t2}</div>
                                    <div className='slide-text'>{t3}</div>
                                    {id === 3 && <div className='slide-text'>{t4}</div>}
                                </div>
                                <div className='text-side-line'></div>
                            </div>
                        </div>
                        <div className='slide-btn'>
                        {btnText}
                        </div>
                        <div className=' left-corner'></div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Slider;
