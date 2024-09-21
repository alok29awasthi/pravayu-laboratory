import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavbarCheckbox from '../../elements/Checkbox/NavbarCheckbox';
import SwallowIcon from '../../elements/SwallowIcon/SwallowIcon';
import Logo from '../../assets/images/only_logo.png';
import DownloadButton from '../../elements/DownloadButton/DownloadButton';
import Portfolio from '../../assets/pdfs/Company_Portfolio.pdf';
import ServicesDropdown from '../ServicesDropdown/ServicesDropdown';
import { servicesData } from '../../assets/constants/ServicesDropdownData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallDropdownOpen, setIsSmallDropdownOpen] = useState(false); // Set initial state to false
  const navbarCheckboxRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSmallDropdownOpen(false);
  };

  const toggleSmallDropdown = () => {
    setIsSmallDropdownOpen(!isSmallDropdownOpen);
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
        <Link to='/' className='nav-link'><li className='cv__navbar-links-li'>Home</li></Link>
        <Link to='/about' className='nav-link'><li className='cv__navbar-links-li'>About</li></Link>
        <li 
          className='cv__navbar-links-li dropdown' 
          onMouseEnter={() => setIsDropdownOpen(true)} 
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className='nav-link' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Link to='/service' className='nav-link'>Services</Link><SwallowIcon/>
          </span>
          {isDropdownOpen && <ServicesDropdown />}
        </li>
        <Link to='/contact' className='nav-link'><li className='cv__navbar-links-li'>Contact</li></Link>
        <Link to='/gallery' className='nav-link'><li className='cv__navbar-links-li'>Gallery</li></Link>
        <a href={Portfolio} download='E-Brochure.pdf'><li className='download-button'><DownloadButton/></li></a>
      </ul>

      <div className='cv__navbar-smallscreen'>
        <div className='cv__navbar-smallscreen_menu'>
          <NavbarCheckbox checkboxRef={navbarCheckboxRef} checked={isMenuOpen} onChange={toggleMenu} />
        </div>
        {isMenuOpen && (
          <div className={isMenuOpen ? 'cv__navbar-smallscreen_overlay active' : 'cv__navbar-smallscreen_overlay'}>
            <ul className='cv__navbar-smallscreen_links'>
              <Link to='/' className='nav-link' onClick={toggleMenu}><li>Home</li></Link>
              <Link to='/about' className='nav-link' onClick={toggleMenu}><li>About</li></Link>
              <li>
                <div className='nav-link' onClick={toggleSmallDropdown}>
                  <Link to='/service' className='nav-link' onClick={toggleMenu}>Services</Link><SwallowIcon/>
                </div>
                {isSmallDropdownOpen && (
                  <div className="services-small-category">
                    {servicesData.map((service, index) => (
                      <li className='services-small-category-parent-content' key={index}>
                        <h3>{service.category}</h3>
                        <ul className='services-small-category-child'>
                          {service.items.map((item, subIndex) => (
                            <Link 
                              key={subIndex}
                              to={`/service?category=${service.category}`} 
                              onClick={() => {
                                toggleMenu();
                                toggleSmallDropdown();
                              }}
                            >
                              <li className='services-small-category-child-content'>- {item.name}</li>
                            </Link>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </div>
                )}
              </li>
              <Link to='/contact' className='nav-link' onClick={toggleMenu}><li>Contact</li></Link>
              <Link to='/gallery' className='nav-link' onClick={toggleMenu}><li>Gallery</li></Link>
              <a href={Portfolio} download='E-Brochure.pdf' className='download-e-brochure'><li><DownloadButton/></li></a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;