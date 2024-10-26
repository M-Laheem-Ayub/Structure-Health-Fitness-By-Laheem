import React from 'react'
import './LeftParaRow.css'

const LeftParaRow = ({ title, para, img = "assets/images/para_2.webp" }) => {
    return (
        <div className='container'>
            <div className='row  mt-5 flex-column-reverse flex-md-row'>
                <div className='col-md-6 col-12 text-center mt-3 mt-md-0  text-md-start ps-4'>
                    <div className='para-title'>{title}</div>
                    <div className='para-text mt-3'>{para}</div>
                </div>
                <div className='col-md-6 col-12'>
                    <img
                        className='para-img w-100'
                        src={`${process.env.PUBLIC_URL}/${img}`}
                        alt='description'
                    />
                </div>
            </div>

        </div>
    )
}

export default LeftParaRow
