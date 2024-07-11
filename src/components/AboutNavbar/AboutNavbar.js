import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IoIosPeople } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import './AboutNavbar.css';
import AboutNavbarCheckbox from '../../elements/Checkbox/AboutNavbarCheckbox';

const AboutNavbar = ({ onToggle }, ref) => {
  const [activeLink, setActiveLink] = useState('');
  const [isShowingIcons, setIsShowingIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.about-description-container');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight/2) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIcons = () => {
    setIsShowingIcons(!isShowingIcons);
    onToggle(!isShowingIcons); // Notify parent component about the toggle action
  };

  return (
    <nav className={`about-navbar ${isShowingIcons ? 'open' : 'closed'}`} ref={ref}>
      <div className="toggle-icons">
        <AboutNavbarCheckbox isChecked={!isShowingIcons} onChange={toggleIcons} />
      </div>

      <ul>
        <li>
          <ScrollLink to="about-company" smooth={true} duration={500} offset={-50} className={activeLink === 'about-company' ? 'active' : ''}>
            <PiBuildingOfficeFill className="icon" /> {!isShowingIcons && <span>About the Company</span>}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="vision" smooth={true} duration={500} offset={-50} className={activeLink === 'vision' ? 'active' : ''}>
            <FaEye className="icon" /> {!isShowingIcons && <span>Vision</span>}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="objective" smooth={true} duration={500} offset={-50} className={activeLink === 'objective' ? 'active' : ''}>
            <IoIosPeople className="icon" /> {!isShowingIcons && <span>Objective</span>}
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default React.forwardRef(AboutNavbar);