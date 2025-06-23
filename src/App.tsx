import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Nutrition from './components/Nutrition';
import Storage from './components/Storage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Nutrition />
          <Storage />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
