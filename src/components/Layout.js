import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import NavbarComponent from './Navbar/Navbar';
import '../App.css'; // Import the CSS file
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  // Conditionally render Header only on the home page
  // const renderHeader = location.pathname === '/' ? <Header className="App-header" /> : null;

  return (
    <div className="App">
      <ScrollToTop />
      <NavbarComponent />
      <div style={{ paddingTop: '3.5rem' }}>
        <Outlet />
      </div>
      <Footer className="App-footer" />
    </div>
  );
};

export default Layout;