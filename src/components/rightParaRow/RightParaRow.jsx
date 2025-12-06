import React from 'react'
import './RightParaRow.css'
import { motion } from 'framer-motion'

const RightParaRow = ({ title, para, img }) => {
  return (
    <div className='container'>
      <div className='row mt-5 '>
        <div className='col-md-6 col-12 '>
           <motion.img
             className='r-para-img w-100'
             src={`${process.env.PUBLIC_URL}/${img}`}
             alt='description'
             initial={{ opacity: 0, y: 100, scale: 0.8 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ type: 'spring', stiffness: 100, damping: 10 }}
             viewport={{ once: true }}
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
