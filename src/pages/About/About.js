import React, { useState, useRef, useEffect } from 'react';
import AboutNavbar from '../../components/AboutNavbar/AboutNavbar';
import './About.css';
import AboutImg from '../../assets/images/about.jpg';
import VisionImg from '../../assets/images/vision.jpg';
import ObjectiveImg from '../../assets/images/objective.jpg';
import Logo from '../../assets/images/logo.png';
import SolutionStep from '../../components/SolutionStep';

const About = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    // Update navbarWidth after the component mounts
    if (navbarRef.current) {
      document.documentElement.style.setProperty('--navbar-width', `${navbarRef.current.offsetWidth}px`);
    }
  }, [isNavbarOpen]);

  return (
    <div className={`about-section about-container ${isNavbarOpen ? 'navbar-open' : 'navbar-closed'}`}>
    <div className="about-description-container">
      <div className="about-image-content">
        <img src={Logo} alt="Logo" className="logo" width={350} />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to Pravayu Testing Laboratory LLP, your trusted partner in environmental testing excellence. We are an ISO 9001:2015 Certified and NABL Accredited laboratory committed to delivering precise and reliable testing services. Our state-of-the-art facilities and skilled professionals ensure comprehensive testing solutions tailored to meet your needs. Join us in upholding the highest standards of quality and accuracy in environmental analysis.
        </p>
      </div>
    </div>

      <div className="about-description-company about-description-container" id="about-company">
        <div className="about-the-company about-text-content">
          <h3 className="about-title">
            <span>About The Company</span>
          </h3>
          <p className="about-description">
            PRAVAYU TESTING LABORATORY LLP is an ISO 9001:2015 Certified & NABL Accredited environmental Laboratory. PTL is incorporated with MCA on 4th November, 2022. PTL has LLP Identification Number (LLPIN) provided from MCA i.e. ABC-9271, and GSTIN of the company is 09ABCFP7334F1Z6. PTL has accreditation from NABL (A constituent board of Quality Council of India) vide certificate no. TC-12468. PTL is fully equipped with required instruments and infrastructure for conducting testing and analysis. We are a team of highly talented professionals, who work in sync with clients to ensure that the defined assignment is executed with a high level of efficiency within the time frame.
          </p>

          <div className="solution-steps">
            <SolutionStep
              title="ISO Certification"
              description="ISO 9001:2015 Certified & NABL Accredited environmental Laboratory."
            />
            <SolutionStep
              title="LLP Identification"
              description="Incorporated with MCA, LLPIN: ABC-9271, GSTIN: 09ABCFP7334F1Z6."
            />
            <SolutionStep
              title="Accreditation"
              description="Accredited by NABL (Certificate no. TC-12468)."
            />
          </div>
        </div>

        <div className="about-image-content">
          <img src={AboutImg} alt="Doctor Group" className="about-image1" />
        </div>
      </div>

      <div className="about-description-vision about-description-container" id="vision">
        <div className="about-image-content">
          <img src={VisionImg} alt="Doctor Group" className="about-image1" />
        </div>

        <div className="about-vision about-text-content">
          <h3 className="about-title">
            <span>Vision</span>
          </h3>
          <p className="about-description">
            PRAVAYU TESTING LABORATORY LLP is committed to providing Quality service to its customers with their full satisfaction by providing quality testing services by following the appropriate professional practices conforming to the requirements of ISO/IEC 17025:2017 and related national & international standards of testing as per its scope of operation.
          </p>

          <div className="solution-steps">
            <SolutionStep
              title="Quality Service"
              description="Provide quality testing services ensuring customer satisfaction."
            />
            <SolutionStep
              title="ISO Standards"
              description="Follow ISO/IEC 17025:2017 and international testing standards."
            />
            <SolutionStep
              title="Professional Practices"
              description="Adhere to professional practices in testing services."
            />
          </div>
        </div>
      </div>

      <div className="about-description-objective about-description-container" id="objective">
        <div className="about-objective about-text-content">
          <h3 className="about-title">
            <span>Objective</span>
          </h3>
          <p className="about-description">
            <p>The driving principle of the laboratory is that its personnel are qualified, trained, and competent and have sufficient experience in the relevant field.</p>
            <p>It is committed to continually improve the established Quality management system of the laboratory & consistent activity of the laboratory.</p>
            <p>The laboratory is committed to be impartial & is competent to perform its activity within its scope of activity.</p>
          </p>

          <div className="solution-steps">
            <SolutionStep
              title="Qualified Personnel"
              description="Personnel are qualified, trained, and competent."
            />
            <SolutionStep
              title="Continuous Improvement"
              description="Continually improve the Quality management system."
            />
            <SolutionStep
              title="Impartiality and Competence"
              description="Maintain impartiality and competence in activities."
            />
          </div>
        </div>

        <div className="about-image-content">
          <img src={ObjectiveImg} alt="Doctor Group" className="about-image1" />
        </div>
      </div>

      <div className='about-navbar'>
        <AboutNavbar ref={navbarRef} onToggle={toggleNavbar} />
      </div>
    </div>
  );
};

export default About;
