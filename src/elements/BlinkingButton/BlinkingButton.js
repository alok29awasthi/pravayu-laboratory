import React from 'react';
import './BlinkingButton.css';

const BlinkingButton = ({ text, icon }) => {
  return (
    <button className="blinking-button">
      {icon} {text}
    </button>
  );
};

export default BlinkingButton;
