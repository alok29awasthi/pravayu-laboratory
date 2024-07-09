// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import './Navbar.css'; // Import your custom CSS file

// const NavbarComponent = () => {
//   const location = useLocation();

//   // Determine if the current location is the home page
//   const isHome = location.pathname === '/';

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" className={`fixed-top ${isHome ? 'home-header' : ''}`}>
//       <Navbar.Brand className="navbar-title" as={Link} to="/">Pravayu Laboratory</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto"> {/* Align items to the right */}
//           <Nav.Link as={Link} to="/" className={isHome ? 'active' : ''}>Home</Nav.Link>
//           <Nav.Link as={Link} to="/about">About</Nav.Link>
//           <Nav.Link as={Link} to="/service">Services</Nav.Link>
//           <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//           <Nav.Link as={Link} to="/e-brochure">E-Brochure</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavbarComponent;

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Checkbox from '../elements/Checkbox/Checkbox';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBoxShadow, setHasBoxShadow] = useState(false);

  const toggleMenu = () => {
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

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav  style={{boxShadow: hasBoxShadow ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : 'none'}} className='cv__navbar'>
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
          <Checkbox checked={isMenuOpen} onChange={toggleMenu}></Checkbox>
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
