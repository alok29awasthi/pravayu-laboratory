import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Clients from './pages/Clients/Clients';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header only renders on the Home page */}
        {/* <Route exact path="/" component={Header} /> */}
        
        <Navbar />
        
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/clients" component={Clients} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
