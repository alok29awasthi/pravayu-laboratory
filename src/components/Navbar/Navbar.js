import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import NavbarCheckbox from '../../elements/Checkbox/NavbarCheckbox';
import { FaCaretDown } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import SwallowIcon from '../../elements/SwallowIcon/SwallowIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarCheckboxRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleServiceClick = (serviceId) => {
    navigate('/service', { state: { serviceId } });
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`cv__navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <div className='cv__navbar-heading'>
        <Link to='/' className='cv__navbar-heading_links'>
          <h1 className='inline'>Pravayu Laboratory</h1>
        </Link>
      </div>

      <ul className='cv__navbar-links'>
        <li><Link to='/' className='nav-link'>Home</Link></li>
        <li><Link to='/about' className='nav-link'>About</Link></li>
        <li className='dropdown' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <span className='nav-link' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Link to='/service' className='nav-link'>Services</Link><SwallowIcon/></span>
          {isDropdownOpen && (
            <div className='dropdown-div'>
              <ul className='dropdown-content'>
                <li onClick={() => handleServiceClick(1)}><FaCirclePlus className='plus'/>Environmental Monitoring</li>
                <li onClick={() => handleServiceClick(2)}><FaCirclePlus className='plus'/>Project Reports</li>
                <li onClick={() => handleServiceClick(3)}><FaCirclePlus className='plus'/>Environmental Clearance</li>
                <li onClick={() => handleServiceClick(4)}><FaCirclePlus className='plus'/>Groundwater NOCs</li>
                <li onClick={() => handleServiceClick(5)}><FaCirclePlus className='plus'/>Environmental NOCs</li>
                <li onClick={() => handleServiceClick(6)}><FaCirclePlus className='plus'/>EPR Registration</li>
              </ul>
            </div>
          )}
        </li>
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
              <li className='nav-link' onClick={() => handleServiceClick(1)}>Service</li>
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