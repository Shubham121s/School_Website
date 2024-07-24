// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Springdale Public School
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/academics"
              className="hover:text-yellow-300 transition-colors"
            >
              Academics
            </Link>
          </li>
          <li>
            <Link
              to="/admissions"
              className="hover:text-yellow-300 transition-colors"
            >
              Admissions
            </Link>
          </li>
          <li>
            <Link
              to="/faculty"
              className="hover:text-yellow-300 transition-colors"
            >
              Faculty
            </Link>
          </li>
          <li>
            <Link
              to="/students"
              className="hover:text-yellow-300 transition-colors"
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:text-yellow-300 transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
