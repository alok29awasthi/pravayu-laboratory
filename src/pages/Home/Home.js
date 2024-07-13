import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';

// Import images using relative paths
import Hero from '../../components/Hero/Hero';
import BeakerAnimation from '../../components/BeakerAnimation/BeakerAnimation';
import Slideshow from '../../components/Slideshow/Slideshow';

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
      <h2 className='home-title'><span>Check Us Out</span></h2>
      <Slideshow/>
    </div>
  );
}

export default Home;
