import React, { useEffect, useState } from 'react';
import './Footer.css'
import FlickityCarousel from '../FlickityCarousel/FlickityCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { clientImages } from '../../assets/images/clientImages/clientImages'
import FooterContact from '../FooterContact/FooterContact';

function Footer() {
  const [goUp, setGoUp] = useState(false);

  const flickityOptions = {
    autoPlay: 1000,
    rightToLeft: true,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 200) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <footer className="App-footer">

      <FooterContact embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7140127846806!2d81.01998497578109!3d26.880825876666226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3cd7129fd41%3A0x38fd6d4e84e41dfc!2sPRAVAYU%20TESTING%20LABORATORY%20LLP!5e0!3m2!1sen!2sin!4v1722255969689!5m2!1sen!2sin"
                    mapsUrl="https://www.google.com/maps/place/PRAVAYU+TESTING+LABORATORY+LLP/@26.8808259,81.019985,17z/data=!3m1!4b1!4m6!3m5!1s0x399be3cd7129fd41:0x38fd6d4e84e41dfc!8m2!3d26.8808259!4d81.0225599!16s%2Fg%2F11l27n84tl?entry=ttu"/>

      <div className='footer-client'>
        <h2 className='footer-client-heading'><span>Our Clients</span></h2>
        <FlickityCarousel cellWidth='200px' cellHeight='200px' cellObjectFit='contain' flickityOptions={flickityOptions} images={clientImages}/>
      </div>

      <p>&copy; 2024 Pravayu Laboratory. All rights reserved.</p>

      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </footer>
  );
}

export default Footer;
