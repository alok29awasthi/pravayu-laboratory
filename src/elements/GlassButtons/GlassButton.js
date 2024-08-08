import React from 'react';
import './GlassButton.css';

const GlassButton = ({ Icon }) => {
  return (
    <button className="button">
      <span>
        <Icon className="icon" />
      </span>
    </button>
  );
};

export default GlassButton;