import React, { useState, useEffect } from 'react';
import './BeakerAnimation.css';
import ScrollDown from '../../elements/ScrollDown/ScrollDown'
import Logo from '../../assets/images/logo.png'

const BeakerAnimation = ({ onAnimationEnd }) => {
  const [visible, setVisible] = useState(true); // Start hidden

  useEffect(() => {
    // localStorage.clear();
    sessionStorage.clear()
    const hasVisited = sessionStorage.getItem('hasVisited') === 'true';
    console.log(hasVisited)

    if (!hasVisited) {
      setVisible(true);
      sessionStorage.setItem('hasVisited', "true");

      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onAnimationEnd();
        }, 2000); // Give some time for the slide-up animation to complete
      }, 4000); // Duration of the animation in milliseconds

      return () => clearTimeout(timer);
    } else {
        onAnimationEnd()
    }
  }, [onAnimationEnd]);

  return (
    <div className={`beaker-container ${visible ? '' : 'hidden'}`}>
      <div className="flask">
        <div className='containing'>
            <div className="liquid">
                <img src={Logo} alt="logo" className='water-logo' />
                <div className='bubbles'></div>
            </div>
        </div>
      </div>
      <div><ScrollDown/></div>
    </div>
  );
};

export default BeakerAnimation;