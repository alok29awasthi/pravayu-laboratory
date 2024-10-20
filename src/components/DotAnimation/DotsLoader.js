import React, { useState, useEffect } from 'react';
import './DotsLoader.css';

const DotsLoader = ({ onAnimationEnd }) => {
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
        }, 1000); // Give some time for the fade-out animation to complete
      }, 3000); // Duration of the loader animation

      return () => clearTimeout(timer);
    } else {
      onAnimationEnd();
    }
  }, [onAnimationEnd]);

  return (
    <div className={`loader-wrapper ${visible ? '' : 'hidden'}`}>
        <div className="pravayu-container">
            {'PRAVAYU LABORATORY'.split('').map((letter, index) => (
                <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {letter === ' ' ? '\u00A0' : letter} {/* Handle space character */}
                </span>
            ))}
        </div>
        <div>
            <section className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </section>
        </div>
    </div>
  );
};

export default DotsLoader;