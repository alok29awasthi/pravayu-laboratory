import React from 'react';
import './FooterContact.css';
import GoogleMapEmbed from '../../elements/GoogleMapEmbed/GoogleMapsEmbed';
import { IoMdMail } from 'react-icons/io';
import { GiRotaryPhone } from "react-icons/gi";
import { FaWhatsapp, FaMapLocationDot } from "react-icons/fa6";
import GlassButton from '../../elements/GlassButtons/GlassButton';

const FooterContact = ({ embedUrl, mapsUrl }) => {
  return (
    <div className="footer-contact">
      <h2 className='footer-contact-heading'><span>Reach Out To Us</span></h2>
      <div className='footer-contact-details'>
        <GoogleMapEmbed embedUrl={embedUrl} />
        <div className="contact-details">
            <a href="tel:+919452319886">
              <GlassButton Icon={GiRotaryPhone}/>
              <p className='contact-details-phone'>
                <p><a href="tel:+919452319886">+91 9452319886</a></p>
                <p><a href="tel:+917905923302">+91 7905923302</a></p>
              </p>
            </a>
            <a href="mailto:ptl.env@gmail.com"><GlassButton Icon={IoMdMail}/><p>ptl.env@gmail.com</p></a>
            <a href="https://wa.me/7905923302" target="_blank" rel="noopener noreferrer">
              <GlassButton Icon={FaWhatsapp}/>
              <p className='contact-details-phone'>
                <p><a href="https://wa.me/9452319886" target="_blank" rel="noopener noreferrer">+91 9452319886</a></p>
                <p><a href="https://wa.me/7905923302" target="_blank" rel="noopener noreferrer">+91 7905923302</a></p>
              </p>
            </a>
            <a href="https://www.google.com/maps/place/PRAVAYU+TESTING+LABORATORY+LLP/@26.8808259,81.019985,17z/data=!3m1!4b1!4m6!3m5!1s0x399be3cd7129fd41:0x38fd6d4e84e41dfc!8m2!3d26.8808259!4d81.0225599!16s%2Fg%2F11l27n84tl?entry=ttu"><GlassButton Icon={FaMapLocationDot}/><p>P, 60, New Panchwati Colony, Panchvati Colony, Kamta, Lucknow, Uttar Pradesh 226028</p></a>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;