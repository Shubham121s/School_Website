// src/components/About/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">About Springdale Public School</h1>
          <p className="text-lg text-gray-200">Springdale High School is committed to providing a holistic education that fosters intellectual, social, and emotional growth. Our mission is to inspire students to become lifelong learners and responsible citizens in a global society.</p>
        </div>
        <div className="p-6 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to create a nurturing and stimulating environment where students can explore their passions, develop critical thinking skills, and become empathetic individuals. We believe in the power of education to transform lives and communities.
          </p>
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="text-gray-700 mb-6">
            We envision a school where every student is encouraged to reach their full potential, both academically and personally. Our dedicated faculty and staff work tirelessly to provide a diverse and inclusive learning experience that prepares students for the challenges of the future.
          </p>
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-bold">Excellence:</span> Striving for the highest standards in everything we do.</li>
            <li><span className="font-bold">Integrity:</span> Upholding honesty and strong moral principles.</li>
            <li><span className="font-bold">Respect:</span> Valuing the diverse backgrounds and perspectives of our community.</li>
            <li><span className="font-bold">Collaboration:</span> Working together to achieve common goals.</li>
            <li><span className="font-bold">Innovation:</span> Encouraging creativity and embracing new ideas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

