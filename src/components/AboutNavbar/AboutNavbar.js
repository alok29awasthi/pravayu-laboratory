import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IoIosPeople } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import './AboutNavbar.css';
import AboutNavbarCheckbox from '../../elements/Checkbox/AboutNavbarCheckbox';

const AboutNavbar = ({ onToggle }, ref) => {
  const [activeLink, setActiveLink] = useState('');
  const [isShowingIcons, setIsShowingIcons] = useState(true);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.about-description-container');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIcons = () => {
    setIsShowingIcons(!isShowingIcons);
    onToggle(!isShowingIcons);
  };

  const handleMouseEnter = (icon) => {
    if (isShowingIcons) {
      setHoveredIcon(icon);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <nav className={`about-navbar ${isShowingIcons ? 'open' : 'closed'}`} ref={ref}>
      <div className="toggle-icons">
        <AboutNavbarCheckbox isChecked={!isShowingIcons} onChange={toggleIcons} />
      </div>

      <ul>
        <li>
          <ScrollLink to="about-company" smooth={true} duration={500} offset={-50} className={`scroll-link ${activeLink === 'about-company' ? 'active' : ''}`}>
            <div 
              className="icon-container" 
              onMouseEnter={() => handleMouseEnter('About the Company')} 
              onMouseLeave={handleMouseLeave}
            >
              <PiBuildingOfficeFill className="icon" />
              {!isShowingIcons && <span>About the Company</span>}
              {isShowingIcons && hoveredIcon === 'About the Company' && <span className="icon-name">About the Company</span>}
            </div>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="vision" smooth={true} duration={500} offset={-50} className={`scroll-link ${activeLink === 'vision' ? 'active' : ''}`}>
            <div 
              className="icon-container" 
              onMouseEnter={() => handleMouseEnter('Vision')} 
              onMouseLeave={handleMouseLeave}
            >
              <FaEye className="icon" />
              {!isShowingIcons && <span>Vision</span>}
              {isShowingIcons && hoveredIcon === 'Vision' && <span className="icon-name">Vision</span>}
            </div>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="objective" smooth={true} duration={500} offset={-50} className={`scroll-link ${activeLink === 'objective' ? 'active' : ''}`}>
            <div 
              className="icon-container" 
              onMouseEnter={() => handleMouseEnter('Objective')} 
              onMouseLeave={handleMouseLeave}
            >
              <IoIosPeople className="icon" />
              {!isShowingIcons && <span>Objective</span>}
              {isShowingIcons && hoveredIcon === 'Objective' && <span className="icon-name">Objective</span>}
            </div>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default React.forwardRef(AboutNavbar);