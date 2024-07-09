import React from 'react';
// import logo from '../assets/images/logo.png';
import ScrollDown from '../elements/scrollDown'
import Logo from '../assets/images/logo.png'

function Header() {
  return (
    <header className="App-header">
      <img src={Logo} alt="logo" />
      {/* <h1>Pravayu Laboratory</h1> */}
      <ScrollDown/>
    </header>
  );
}

export default Header;
