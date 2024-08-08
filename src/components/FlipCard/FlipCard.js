import React from 'react';
import './FlipCard.css';

const FlipCard = ({ 
  image, 
  name, 
  designation, 
  education, 
  phone, 
  address 
}) => {

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Card front" className="front-image" />
        </div>
        <div className="flip-card-back" style={backgroundImageStyle}>
          <div className="back-details">
            <p className="name">{name}</p>
            <p className="designation">{designation}</p>
            <p className="education">{education}</p>
            <p className="phone">{phone}</p>
            <p className="address">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
