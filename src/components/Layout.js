import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer/Footer';
import NavbarComponent from './Navbar/Navbar';
import '../App.css'; // Import the CSS file

const Layout = () => {
  const location = useLocation();

  // Conditionally render Header only on the home page
  const renderHeader = location.pathname === '/' ? <Header className="App-header" /> : null;

  return (
    <div className="App">
      {renderHeader}
      <NavbarComponent />
      <div style={{ paddingTop: '5rem' }}>
        <Outlet />
      </div>
      <Footer className="App-footer" />
    </div>
  );
};

export default Layout;