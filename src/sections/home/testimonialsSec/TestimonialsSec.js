import React from 'react'
import './TestimonialsSec.css'


const TestimonialsSec = () => {
  return (
    <div className='testimonials-body'>
      <div className='testimonials-contant ' >
       <h2 className='testimonials-text mb-5 mt-5 pt-5' >TESTIMONIALS</h2>
       <p>
       I Joined Them Last Month And So Far I'm Having A Wonderful Experience Here. The Staff Is Friendly And Well Mannered. The Place Is Surrounded By Elite-class People As It Is One Of The Most Expensive Gyms And Fitness Clubs In Lahore. I'm Having Swimming Sessions There And So Far It Is My Best Experience.
       </p>
            <img className='testimonials-img mb-4' src={`${process.env.PUBLIC_URL}/assets/images/testimonials_contant_img.webp`}/>
        <h2 className='testimonials-name'>SHAHZAIB HAYAT KHAN</h2>
        <h2 className='testimonials-pro pb-5 mb-5'>CROSSFIT PROFESSIONAL</h2>
      </div>
    </div>
  )
}

export default TestimonialsSec
