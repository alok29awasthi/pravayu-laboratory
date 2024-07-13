import React from 'react';
import './Slideshow.css';
import s1 from '../../assets/images/s1.jpg'
import s2 from '../../assets/images/s2.jpg'
import s3 from '../../assets/images/s3.jpg'
import s4 from '../../assets/images/s4.jpg'
import s5 from '../../assets/images/s5.jpeg'
import s6 from '../../assets/images/s6.jpeg'

const images = [
  s1, s2, s3, s4, s5, s6,
  "https://images.pexels.com/photos/301682/pexels-photo-301682.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
];

const Slideshow = () => {

    return (
        <section id="slideshow">
        <div className="entire-content">
            <div className="content-carrousel">
            {images.map((src, index) => (
                <figure key={index} className="shadow">
                <img src={src} alt={`Slide ${index + 1}`} />
                </figure>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;