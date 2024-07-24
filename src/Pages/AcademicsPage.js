// src/pages/AcademicsPage.js
import React from 'react';
import Curriculum from '../components/Academics/Curriculum';
import Methodologies from '../components/Academics/Methodologies';

const AcademicsPage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-5xl font-bold">Academics</h1>
      </header>
      <div className="p-6">
        <Curriculum />
        <Methodologies />
      </div>
    </div>
  );
};

export default AcademicsPage;

