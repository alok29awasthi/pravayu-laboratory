import React from 'react';
import './scrollDown.css';

function ScrollDown() {
  return (
    <div className="scrolldown" style={{ color: 'skyblue' }}>
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
  );
}

export default ScrollDown;