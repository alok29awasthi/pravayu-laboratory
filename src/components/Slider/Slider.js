import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import './Slider.css'; // Import the custom CSS
import Slide1 from '../../assets/images/slide1.jpg'
import Slide2 from '../../assets/images/slide2.jpg'
import Slide3 from '../../assets/images/slide3.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      animation="foldOutAnimation" // use the correct animation name
      className="custom-slider"
    //   cssModule={}
    >
      <div data-src={Slide1} />
      <div data-src={Slide2} />
      <div data-src={Slide3} />
      <div data-src={Slide1} />
    </AutoplaySlider>
  );
};

export default Slider;