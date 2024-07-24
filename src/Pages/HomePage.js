// src/pages/HomePage.js
import React from 'react';
import Carousel from '../components/Home/Carousel';
import QuickLinks from '../components/Home/QuickLinks';

const HomePage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-5xl font-bold">Springdale Public School</h1>
        <p className="text-xl mt-2">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </header>
      <Carousel />
      <QuickLinks />
    </div>
  );
};

export default HomePage;

