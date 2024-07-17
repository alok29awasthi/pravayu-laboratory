import React from 'react';
import './ClientCard.css';

const ClientCard = ({ image, name }) => {
  return (
    <div className="client-card">
      <img src={image} alt={name} className="client-card-image" />
      <div className="client-card-name">{name}</div>
    </div>
  );
};

export default ClientCard;
