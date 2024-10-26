import React from 'react'
import './BranchTypesSec.css'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import GoalCard from '../goalCard/GoalCard';
import brachesData from '../../../api/our branches/branchesData';
import GoalCard from '../../../components/goalCard/GoalCard';


const BranchTypesSec = () => {
    return (
        <div className='my-container'>
            <div className=' text-center pb-5 pb-md-0 pt-5 our-pro-title'>Checkout Our Best State of The Art Branches</div>
            <div className='container pb-5'>
                <div className='row g-3 mt-md-5 pb-4 d-flex justify-content-around'>
                    {brachesData.map((goal, index) => (
                        <div className='col-md-3 col-12' key={index}>
                            <GoalCard icon={faMapMarkerAlt} title={goal.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BranchTypesSec
