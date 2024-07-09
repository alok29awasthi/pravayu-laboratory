import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import Header from '../components/Header'

// Import images using relative paths
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

function Home() {
  // State to track if slideshow should be paused
  const [isPaused, setIsPaused] = useState(false);

  // Configure slide properties
  const slideProperties = {
    duration: 1000, // Duration of each slide in milliseconds (5 seconds in this example)
    transitionDuration: 1000, // Duration of slide transitions in milliseconds (1 second in this example)
    infinite: true, // Whether the slideshow should loop infinitely
    indicators: true, // Whether to show slide indicators (dots) below the slideshow
    arrows: true, // Whether to show navigation arrows for previous and next slides
    pauseOnHover: true, // Whether to pause the slideshow on hover
    onChange: (oldIndex, newIndex) => {
      console.log(`Slide transitioned from ${oldIndex} to ${newIndex}`);
    }
  };

  return (
    <div className="Home">
      <h2>Welcome to Pravayu Laboratory</h2>
      <p>Providing top-notch laboratory services since 2024.</p>

      <Slide {...slideProperties} pause={isPaused}>
        <div className="each-slide-effect">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${slide1})` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        </div>
        <div className="each-slide-effect">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${slide2})` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        </div>
        <div className="each-slide-effect">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${slide3})` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        </div>
      </Slide>
    </div>
  );
}

export default Home;
