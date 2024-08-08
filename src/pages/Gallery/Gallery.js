import React from 'react';
import './Gallery.css';
import FlipCard from '../../components/FlipCard/FlipCard';
import Pravin from '../../assets/images/galleryImages/praveen.jpeg';
import Pramod from '../../assets/images/galleryImages/pramod.jpg';
import { galleryImages } from '../../assets/images/galleryImages/galleryImages'; // Import the images array

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h3 className="title">
        <span>Gallery</span>
      </h3>
      <div className="gallery-entire">
        <h3 className="title director-title">
          <span>At Director's Desk</span>
        </h3>
        <div className="directors">
          <FlipCard
            image={Pramod}
            name="Pramod Kumar Tiwari"
            designation="Managing Director"
            education="MSC in Organic chemistry"
            phone="+91 9452319886/+91 6393403970"
            address="P60, New Panchwati Colony, Kamta, Lucknow, 226028"
          />
          <FlipCard
            image={Pravin}
            name="Pravin Singh"
            designation="Joint Managing Director"
            education="M. tech in Environmental Engineering"
            phone="+91 7905923302/+91 7572062988"
            address="P60, New Panchwati Colony, Kamta, Lucknow, 226028"
          />
        </div>
        <h3 className="title journey-title">
          <span>Our Journey</span>
        </h3>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="card">
              <img src={image.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;