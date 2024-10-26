import React from 'react';
import './SpecialOfferSec.css';
import FormComponent from '../../../components/formComponent/FormComponent';
 // Import the form component

const SpecialOfferSec = () => {
    return (
        <div className='specialOffer-body'>
            <div className='container py-lg-5'>
                <div className='row pt-5'>
                    <div className='col-md-7 col-12 d-flex flex-column align-items-md-start align-items-center'>
                        <div className='d-flex'>
                            <div className='ms-2 l-side-line'></div>
                            <div className='specialOffer-bold-text text-center text-md-start ps-2'>
                                WE’RE NOT LIKE ANY OTHER GYM IN PAKISTAN
                            </div>
                        </div>
                        <div className='specialOffer-text text-md-start text-center ps-2 mt-4'>
                            Whether you want to get in shape with a personalized fitness training plan, break a sweat in a team environment, or reach peak athletic performance, our group of expert fitness coaches and community members are here to help you be your best self, every day.
                        </div>
                        <img className='specialOffer-img ms-2 mt-5' src={`${process.env.PUBLIC_URL}/assets/images/google_logo.webp`} alt="Google logo" />
                    </div>
                    <div className='col-md-5 mt-5 mt-md-0 d-flex flex-column align-items-center col-12'>
                        <FormComponent /> {/* Use the new form component */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOfferSec;
