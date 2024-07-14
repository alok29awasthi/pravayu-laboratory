// src/ImageSlider.js
import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import s1 from '../../assets/images/s1.jpg'
import s2 from '../../assets/images/s2.jpg'
import s3 from '../../assets/images/s3.jpg'
import s4 from '../../assets/images/s4.jpg'

const images = [s1, s2, s3, s4];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
        {/* <div className='slider-images'> */}
            <div className="background-image" style={{ backgroundImage: `url(${images[(currentIndex - 1 + images.length) % images.length]})` }} />
            <div className="current-image" style={{ backgroundImage: `url(${images[currentIndex]})` }} />
            <div className="background-image" style={{ backgroundImage: `url(${images[(currentIndex + 1) % images.length]})` }} />
        {/* </div> */}
        <button className="prev" onClick={goToPrevious}>❮</button>
        <button className="next" onClick={goToNext}>❯</button>
    </div>
  );
};

export default ImageSlider;