import React, { forwardRef } from 'react';
import './NavbarCheckbox.css';

const NavbarCheckbox = forwardRef(({ checked, onChange }, ref) => {
  return (
    <div>
      <input ref={ref} type='checkbox' id='checkbox' checked={checked} onChange={onChange} />
      <label className="toggle" htmlFor="checkbox">
        <div className="bar bar--top"></div>
        <div className="bar bar--middle"></div>
        <div className="bar bar--bottom"></div>
      </label>
    </div>
  );
});

export default NavbarCheckbox;