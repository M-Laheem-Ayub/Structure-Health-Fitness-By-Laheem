import React from 'react';
import './GoalCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoalCard = ({ icon, title }) => {
  return (
    <div className="my-card" >
      <div className="circle">
        <FontAwesomeIcon icon={icon} className="icon" aria-hidden="true" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default GoalCard;




