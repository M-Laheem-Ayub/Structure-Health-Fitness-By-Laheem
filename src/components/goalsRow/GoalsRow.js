import React from 'react';
import goalCardData from '../../api/home/goalCardData';
import GoalCard from '../goalCard/GoalCard';

const GoalsRow = () => {
  return (
    <div className='row g-3 mt-md-5    d-flex justify-content-around'>
      {goalCardData.map((goal, index) => (
        <div className='col-md-3 col-12' key={index}>
          <GoalCard icon={goal.icon} title={goal.title} />
        </div>
      ))}
    </div>
  );
}

export default GoalsRow;
