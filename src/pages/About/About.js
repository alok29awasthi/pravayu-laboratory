import React, { useState, useRef, useEffect } from 'react';
import AboutNavbar from '../../components/AboutNavbar/AboutNavbar';
import './About.css';

const About = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    // Update navbarWidth after the component mounts
    if (navbarRef.current) {
      setNavbarWidth(navbarRef.current.offsetWidth);
    }
  }, [isNavbarOpen]);

  const sectionStyles = {
    marginLeft: navbarWidth + 30,
    transition: 'margin-left 0.5s ease', // Add transition for smooth animation
  };

  return (
    <div className={`about-container ${isNavbarOpen ? 'navbar-open' : 'navbar-closed'}`}>
      <div className='about-navbar'>
        <AboutNavbar ref={navbarRef} onToggle={toggleNavbar} />
      </div>

      <div className='about-description' style={sectionStyles}>
        <h2>About the Company</h2>
        <section id="about-company" className="about-section about-section-overlay about-company-section">
          <div className='about-description-container'>
            <div className='about-description-content'>
              <p>PRAVAYU TESTING LABORATORY LLP is an ISO 9001:2015 Certified & NABL Accredited environmental Laboratory.
              PTL is incorporated with MCA on 4th November, 2022.
              PTL has LLP Identification Number (LLPIN) provided from MCA i.e. ABC-9271, and GSTIN of the company is 09ABCFP7334F1Z6.
              PTL has accreditation from NABL (A constituent board of Quality Council of India) vide certificate no. TC-12468.
              PTL is fully equipped with required instruments and infrastructure for conducting testing and analysis.
              We are a team of highly talented professionals, who work in sync with clients to ensure that the defined assignment is executed with a high level of efficiency within the time frame.</p>
            </div>
          </div>
        </section>

        <h2>Vision</h2>
        <section id="vision" className="about-section vision-section">
          <div className='about-description-container'>
            <div className='about-description-content'>
              <p>PRAVAYU TESTING LABORATORY LLP is committed to providing Quality service to its customers with their full satisfaction by providing quality testing services by following the appropriate professional practices conforming to the requirements of ISO/IEC 17025:2017 and related national & international standards of testing as per its scope of operation.</p>
            </div>
          </div>
        </section>

        <h2>Objective</h2>
        <section id="objective" className="about-section objective-section">
          <div className='about-description-container'>
            <div className='about-description-content'>
              <p>The driving principle of the laboratory is that its personnel are qualified, trained, and competent and have sufficient experience in the relevant field.</p>
              <p>It is committed to continually improve the established Quality management system of the laboratory & consistent activity of the laboratory.</p>
              <p>The laboratory is committed to be impartial & is competent to perform its activity within its scope of activity.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
