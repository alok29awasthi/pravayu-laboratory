import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EBrochure from './pages/EBrochure';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header only renders on the Home page */}
        <Route exact path="/" component={Header} />
        
        <Navbar />
        
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/e-brochure" component={EBrochure} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
