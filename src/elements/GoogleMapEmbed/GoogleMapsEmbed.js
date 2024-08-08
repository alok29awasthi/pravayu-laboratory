import React from 'react';
import './GoogleMapsEmbed.css';

const GoogleMapsEmbed = ({ embedUrl }) => {
  return (
    <div className="map-container">
      <iframe
        title='Pravayu_Labs'
        src={embedUrl}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;