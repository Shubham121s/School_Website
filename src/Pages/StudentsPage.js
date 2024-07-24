// src/pages/StudentsPage.js
import React from 'react';
import Activities from '../components/Students/Activities';
import Achievements from '../components/Students/Achievements';
import Students from '../components/Students/Students';

const StudentsPage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-5xl font-bold">Student Life</h1>
      </header>
      <div className="p-6">
        <Students />
        <Activities />
        <Achievements />
      </div>
    </div>
  );
};

export default StudentsPage;

