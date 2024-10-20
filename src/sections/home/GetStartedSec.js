import React from 'react'
import './GetStartedSec.css'
import HoverImg from '../../components/HoverImg'
import RightParaRow from '../../components/RightParaRow'
import LeftParaRow from '../../components/LeftParaRow'
import LeftRowData from '../../api/LeftRowData'
import RightRowData from '../../api/RightRowData'

const GetStartedSec = () => {
  return (
    <div className=''>
      <HoverImg />

        <div className='pt-4 para-contant'>
          <LeftParaRow
            title={LeftRowData[0].title}
            para={LeftRowData[0].para}
            img={LeftRowData[0].img}
          />
          <RightParaRow
            title={RightRowData[0].title}
            para={RightRowData[0].para}
            img={RightRowData[0].img}
          />
          <LeftParaRow
            title={LeftRowData[1].title}
            para={LeftRowData[1].para}
            img={LeftRowData[1].img}
          />
          <RightParaRow
            title={RightRowData[1].title}
            para={RightRowData[1].para}
            img={RightRowData[1].img}
          />
        </div>
      </div>
  )
}

export default GetStartedSec
