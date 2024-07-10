import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavbarCheckbox from '../../elements/Checkbox/NavbarCheckbox';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBoxShadow, setHasBoxShadow] = useState(false);
  const navbarCheckboxRef = useRef(null);

  const toggleMenu = () => {
    console.log('Navbar - toggleMenu called');  
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasBoxShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ boxShadow: hasBoxShadow ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : 'none' }} className='cv__navbar'>
      <div className='cv__navbar-heading'>
        <Link to='/' className='cv__navbar-heading_links'>
          <h1 className='inline'>Pravayu Laboratory</h1>
        </Link>
      </div>

      <ul className='cv__navbar-links'>
        <li><Link to='/' className='nav-link'>Home</Link></li>
        <li><Link to='/about' className='nav-link'>About</Link></li>
        <li><Link to='/service' className='nav-link'>Service</Link></li>
        <li><Link to='/contact' className='nav-link'>Contact</Link></li>
        <li><Link to='/e-brochure' className='nav-link'>EBrochure</Link></li>
      </ul>

      <div className='cv__navbar-smallscreen'>
        <div className='cv__navbar-smallscreen_menu'>
          <NavbarCheckbox checkboxRef={navbarCheckboxRef} checked={isMenuOpen} onChange={toggleMenu} />
        </div>
        {isMenuOpen && (
          <div className={isMenuOpen ? 'cv__navbar-smallscreen_overlay active' : 'cv__navbar-smallscreen_overlay'}>
            <ul className='cv__navbar-smallscreen_links'>
              <li><Link to='/' className='nav-link'>Home</Link></li>
              <li><Link to='/about' className='nav-link'>About</Link></li>
              <li><Link to='/service' className='nav-link'>Service</Link></li>
              <li><Link to='/contact' className='nav-link'>Contact</Link></li>
              <li><Link to='/e-brochure' className='nav-link'>EBrochure</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;