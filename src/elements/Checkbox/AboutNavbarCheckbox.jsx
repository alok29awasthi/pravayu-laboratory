// AboutNavbarCheckbox.jsx

import React from 'react';
import './AboutNavbarCheckbox.css';

const AboutNavbarCheckbox = ({ isChecked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(!isChecked); // Toggle the isChecked state
  };

  return (
    <label className="container">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <div className="line"></div>
      <div className="line line-indicator"></div>
    </label>
  );
};

export default AboutNavbarCheckbox;
