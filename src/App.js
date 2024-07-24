// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Academics from './components/Academics/Academics';
import Admissions from './components/Admissions/Admissions';
import Faculty from './components/Faculty/Faculty';
import Students from './components/Students/Students';
import Gallery from './components/Gallery/PhotoGallery'; // Assuming you want to use the photo gallery as the default gallery
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Footer from './components/Footer'; // Assuming you have a Footer component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes as necessary */}
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
};

export default App;


