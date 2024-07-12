import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';

// Import images using relative paths
import Hero from '../../components/Hero/Hero';
import Slider from '../../components/Slider/Slider';
import BeakerAnimation from '../../components/BeakerAnimation/BeakerAnimation';

function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };
  sessionStorage.clear();
  const hasVisited = sessionStorage.getItem('hasVisited') === "true";
  // console.log(hasVisited)

  return (
    <div className="Home">
      {!hasVisited && !animationComplete && <BeakerAnimation onAnimationEnd={handleAnimationEnd} />}
      <Hero/>
      <h2>Welcome to Pravayu Laboratory</h2>
      <p>Providing top-notch laboratory services since 2024.</p>
      <Slider/>
    </div>
  );
}

export default Home;
