import React from "react";
import LaboratoryImage from "../../assets/images/logo.png"; // Replace with the appropriate image
import { IoCall } from "react-icons/io5";
import { MdGppGood } from "react-icons/md";
import ISO from '../../assets/images/iso_logo.png'
import NABL from '../../assets/images/nabl_logo.png'
import "./Hero.css";
import BlinkingButton from "../../elements/BlinkingButton/BlinkingButton";

function Hero() {
  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline"><MdGppGood/>Quality First</p>
          <h2 className="text-title">
            Discover Pravayu Testing Laboratory LLP
          </h2>
          <p className="text-description">
            Ensuring quality and precision in testing and
            analysis, with a commitment to excellence and customer satisfaction.
          </p>

          <a href="tel:9452319886" className="call">
            <BlinkingButton text="9452319886" icon={<IoCall/>}/>
          </a>
          
          <div className="text-stats">
            <div className="text-stats-container">
              <img src={ISO} alt="iso_logo" className="iso_logo" />
              {/* <p>15+</p> */}
              <p>ISO 9001:2015 Certified</p>
            </div>

            <div className="text-stats-container">
              <img src={NABL} alt="nabl_logo" className="nabl_logo" />
              {/* <p>15+</p> */}
              <p>NABL Accredited</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={LaboratoryImage} alt="Laboratory" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
