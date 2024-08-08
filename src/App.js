import React from 'react';
import { HashRouter as Router, Route, Routes, ScrollRestoration } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className="App">
        
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
