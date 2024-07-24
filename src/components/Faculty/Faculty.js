// src/components/Faculty/Faculty.js
import React from 'react';
import FacultyList from './FacultyList';

const Faculty = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Distinguished Faculty</h1>
          <p className="text-lg text-gray-200">
            Meet the exceptional educators who are dedicated to nurturing and inspiring our students.
          </p>
        </div>
        <div className="p-6 md:p-12">
          <FacultyList />
        </div>
      </div>
    </div>
  );
};

export default Faculty;

