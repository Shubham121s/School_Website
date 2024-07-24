// src/pages/AboutPage.js
import React from 'react';
import PrincipalMessage from '../components/About/PrincipalMessage';
import Infrastructure from '../components/About/Infrastructure';

const AboutPage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-5xl font-bold">About Us</h1>
      </header>
      <div className="p-6">
        <section className="mb-6">
          <h2 className="text-3xl font-semibold">Our History</h2>
          <p>Springdale Public School has a rich history of academic excellence and holistic development...</p>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-semibold">Our Vision & Mission</h2>
          <p>Our vision is to nurture young minds to become responsible global citizens...</p>
        </section>
        <PrincipalMessage />
        <Infrastructure />
      </div>
    </div>
  );
};

export default AboutPage;

