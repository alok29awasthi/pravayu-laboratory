import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavbarCheckbox from '../../elements/Checkbox/NavbarCheckbox';
import SwallowIcon from '../../elements/SwallowIcon/SwallowIcon';
import Logo from '../../assets/images/only_logo.png'
import DownloadButton from '../../elements/DownloadButton/DownloadButton';
import Portfolio from '../../assets/pdfs/Company_Portfolio.pdf'
import ServicesDropdown from '../ServicesDropdown/ServicesDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarCheckboxRef = useRef(null);

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

  return (
    <nav className={`cv__navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <div className='cv__navbar-heading'>
        <Link to='/' className='cv__navbar-heading_links'>
          <img src={Logo} alt="logo" />
          <div>
            <h1 className='inline'>PRAVAYU<br/></h1>
            <h2 className='inline'>Testing Laboratory</h2>
          </div>
        </Link>
      </div>

      <ul className='cv__navbar-links'>
        <li className='cv__navbar-links-li'><Link to='/' className='nav-link'>Home</Link></li>
        <li className='cv__navbar-links-li'><Link to='/about' className='nav-link'>About</Link></li>
        <li className='cv__navbar-links-li dropdown' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <span className='nav-link' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Link to='/service' className='nav-link'>Services</Link><SwallowIcon/></span>
          {isDropdownOpen && <ServicesDropdown />
          // (
          //   <div className='dropdown-div'>
          //     <ul className='dropdown-content'>
          //       <li onClick={() => handleServiceClick(1)}><FaCirclePlus className='plus'/>Environmental Monitoring</li>
          //       <li onClick={() => handleServiceClick(2)}><FaCirclePlus className='plus'/>Project Reports</li>
          //       <li onClick={() => handleServiceClick(3)}><FaCirclePlus className='plus'/>Environmental Clearance</li>
          //       <li onClick={() => handleServiceClick(4)}><FaCirclePlus className='plus'/>Groundwater NOCs</li>
          //       <li onClick={() => handleServiceClick(5)}><FaCirclePlus className='plus'/>Environmental NOCs</li>
          //       <li onClick={() => handleServiceClick(6)}><FaCirclePlus className='plus'/>EPR Registration</li>
          //     </ul>
          //   </div>
          // )
          }
        </li>
        <li className='cv__navbar-links-li'><Link to='/contact' className='nav-link'>Contact</Link></li>
        <li className='cv__navbar-links-li'><Link to='/gallery' className='nav-link'>Gallery</Link></li>
        <a href={Portfolio} download='E-Brochure.pdf'><li className='download-button'><DownloadButton/></li></a>
      </ul>

      <div className='cv__navbar-smallscreen'>
        <div className='cv__navbar-smallscreen_menu'>
          <NavbarCheckbox checkboxRef={navbarCheckboxRef} checked={isMenuOpen} onChange={toggleMenu} />
        </div>
        {isMenuOpen && (
          <div className={isMenuOpen ? 'cv__navbar-smallscreen_overlay active' : 'cv__navbar-smallscreen_overlay'}>
            <ul className='cv__navbar-smallscreen_links'>
              <li><Link to='/' className='nav-link' onClick={() => toggleMenu()}>Home</Link></li>
              <li><Link to='/about' className='nav-link' onClick={() => toggleMenu()}>About</Link></li>
              <li><Link to='/service' className='nav-link' onClick={() => toggleMenu()}>Services</Link></li>
              <li><Link to='/contact' className='nav-link' onClick={() => toggleMenu()}>Contact</Link></li>
              <li><Link to='/e-brochure' className='nav-link' onClick={() => toggleMenu()}>Clients</Link></li>
              <a href={Portfolio} download='E-Brochure.pdf'><li><DownloadButton/></li></a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;