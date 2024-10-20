import React from 'react'
import './RightParaRow.css'

const RightParaRow = ({ title, para, img }) => {
  return (
    <div className='container'>
      <div className='row mt-5 '>
        <div className='col-md-6 col-12 '>
          <img
            className='r-para-img w-100'
            src={`${process.env.PUBLIC_URL}/${img}`}
            alt='description'
          />
        </div>
        <div className='col-md-6 col-12 text-center mt-3 mt-md-0  text-md-start ps-4'>
          <div className='r-para-title'>{title}</div>
          <div className='r-para-text mt-3'>
            {para}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightParaRow
