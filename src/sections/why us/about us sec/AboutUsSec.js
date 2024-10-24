import React from 'react'
import './AboutUsSec.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import aboutUsData from '../../../api/why us/aboutUsData';

const AboutUsSec = () => {
    return (
        <div>
            <div className='about-us-body'>
                <div className='  mx-md-5 mx-3   pt-4'>
                    <div className=' row m-0 pb-5 about-text text-md-start text-center pt-5 px-1'>
                        We know you have lots of choices when it comes to fitness options in a coaching team and gym. But here’s why we believe we have pioneered a new way of training which delivers better results for our members.
                    </div>
                    <div className='why-link-box text-start pt-4'>
                        <div className=' why-link d-flex'>
                            <FontAwesomeIcon className='why-link-icon pe-2' icon={faPlus} />
                            <div className='why-link-text'>
                                Our Model At Structure Health & Fitness
                            </div>
                        </div>
                        <div className=' why-link d-flex'>
                            <FontAwesomeIcon className='why-link-icon pe-2' icon={faPlus} />
                            <div className='why-link-text'>
                                More Personalized Attention. Better Professional Expertise.
                            </div>
                        </div>
                        <div className=' why-link d-flex'>
                            <FontAwesomeIcon className='why-link-icon pe-2' icon={faPlus} />
                            <div className='why-link-text'>
                                We Believe In People Power. Yours & Ours
                            </div>
                        </div>
                    </div>
                    <div className=' row m-0 pt-4 pb-4'>
                    {aboutUsData.map((item, index) => (
                            <div className='col-md-6 col-12 pt-5' key={index}>
                                <div className={`why-box ${item.wb_BG}`}>
                                    <a className='why-box-link' href='#'>
                                        {item.lint_text}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSec
