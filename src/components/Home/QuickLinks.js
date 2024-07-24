// src/components/Home/QuickLinks.js
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="p-6 bg-gray-200 mt-6">
      <h2 className="text-3xl font-semibold mb-4">Quick Links</h2>
      <ul className="grid grid-cols-2 gap-4">
        <li><Link to="/admissions" className="text-blue-600 hover:underline">Admissions</Link></li>
        <li><Link to="/academics" className="text-blue-600 hover:underline">Academics</Link></li>
        <li><Link to="/faculty" className="text-blue-600 hover:underline">Faculty</Link></li>
        <li><Link to="/students" className="text-blue-600 hover:underline">Student Life</Link></li>
        <li><Link to="/gallery" className="text-blue-600 hover:underline">Gallery</Link></li>
        <li><Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;

