import React from 'react';
import './ServiceCard.css'; // Import the CSS file for styles

const ServiceCard = ({ title, title_icon: TitleIcon, onClick }) => {
  return (
    <div className="services-card" onClick={() => onClick(title)}>
      <div className="services-card-details">
        <p className="services-card-text-title">{title}</p>
        {TitleIcon && <TitleIcon className='services-card-text-title-icon'/>}
      </div>
      <button className="services-card-button">More info</button>
    </div>
  );
};

export default ServiceCard;
