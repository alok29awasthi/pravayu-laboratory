import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import NavbarComponent from './Navbar/Navbar';
import '../App.css'; // Import the CSS file

const Layout = () => {
  // Conditionally render Header only on the home page
  // const renderHeader = location.pathname === '/' ? <Header className="App-header" /> : null;

  return (
    <div className="App">
      {/* {renderHeader} */}
      <NavbarComponent />
      <div style={{ paddingTop: '5rem' }}>
        <Outlet />
      </div>
      <Footer className="App-footer" />
    </div>
  );
};

export default Layout;