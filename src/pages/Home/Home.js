import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';

// Import images using relative paths
import Hero from '../../components/Hero/Hero';
import BeakerAnimation from '../../components/BeakerAnimation/BeakerAnimation';
import FlickityCarousel from '../../components/FlickityCarousel/FlickityCarousel';
import { galleryImages } from '../../assets/images/galleryImages/galleryImages';
import ServicesDropdown from '../../components/ServicesDropdown/ServicesDropdown';

function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };
  
  const hasVisited = sessionStorage.getItem('hasVisited') === "true";

  return (
    <div className="Home">
      {!hasVisited && !animationComplete && <BeakerAnimation onAnimationEnd={handleAnimationEnd} />}
      <Hero/>
      <div className='home-gallery'>
        <h2 className='home-title'><span>Check Us Out</span></h2>
        <FlickityCarousel images={galleryImages}/>
      </div>
      <ServicesDropdown />
      {/* <Slideshow/> */}
    </div>
  );
}

export default Home;
