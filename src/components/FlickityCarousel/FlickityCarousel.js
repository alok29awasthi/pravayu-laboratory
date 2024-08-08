// Carousel.js
import React from 'react';
import Flickity from 'react-flickity-component';
import './FlickityCarousel.css';

const defaultFlickityOptions = {
  autoPlay: 2000,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  pauseAutoPlayOnHover: false,
  draggable: false,
  initialIndex: 4,
  resize: false,
};

const FlickityCarousel = ({ cellWidth = '400px', cellHeight = '300px', cellObjectFit = 'cover', flickityOptions = {}, images }) => {
    const options = { ...defaultFlickityOptions, ...flickityOptions };
  
  return (
    <div className="flickity-container">
      <Flickity className="carousel" options={options}>
        {images.map((image, index) => (
          <img key={index} className="carousel-cell" src={image.src} alt={`cell ${index + 1}`} 
            style={{width: cellWidth, height: cellHeight, objectFit: cellObjectFit}}/>
        ))}
      </Flickity>
    </div>
  );
};

export default FlickityCarousel;
