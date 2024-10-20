import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onAnimationEnd }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited') === 'true';

    if (!hasVisited) {
      setVisible(true);
      sessionStorage.setItem('hasVisited', "true");

      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onAnimationEnd();
        }, 200000); // Give some time for the fade-out animation to complete
      }, 4000000); // Duration of the loader animation

      return () => clearTimeout(timer);
    } else {
      onAnimationEnd();
    }
  }, [onAnimationEnd]);

  if (!visible) return null;

  return (
    <div className={`loader-wrapper`}>
      <div className="loader">
        <span className="loader-text">Pravayu</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loader;