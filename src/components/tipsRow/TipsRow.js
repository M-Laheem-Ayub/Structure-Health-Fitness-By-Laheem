import React from 'react';
import './TipsRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import tipsRowData from '../../api/home/tipsRowData';


const TipsRow = () => {
    return (
        <div className='container'>
            <div className='row'>
                {tipsRowData.map((tip, index) => (
                    <div className='col-lg-4 col-md-6 col-12' key={index}>
                        <div className='tip-body px-2 pt-1'>
                            <div className='tip-container my-2 py-4 px-4'>
                                <div className='text-start bold-tip py-1'>{tip.title}</div>
                                <div className='tip-link-con'>
                                    <FontAwesomeIcon icon={faAlignLeft} className='tip-icon me-2' />
                                    <a href='#'>Fitness</a>
                                </div>
                                <div className='tip-text text-start pt-2 pb-3'>{tip.detail}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TipsRow;
