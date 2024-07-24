// src/components/Admissions/Admissions.js
import React from 'react';
import ImportantDates from './ImportantDates';
import AdmissionForm from './AdmissionForm';

const Admissions = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">Admissions at Springdale Public School</h1>
          <p className="text-lg text-gray-200">
            Join our vibrant community and start your journey towards excellence. We offer a seamless admissions process to help you become part of Springdale High School.
          </p>
        </div>
        <div className="p-6 md:p-12">
          <ImportantDates />
          <AdmissionForm />
        </div>
      </div>
    </div>
  );
};

export default Admissions;
