// src/components/Academics/Academics.js
import React from 'react';

const Academics = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">Academics at Springdale Public School</h1>
          <p className="text-lg text-gray-200">
            Our academic programs are designed to challenge and inspire students to reach their full potential. We offer a diverse curriculum that caters to the needs and interests of our students.
          </p>
        </div>
        <div className="p-6 md:p-12">
          <h2 className="text-3xl font-semibold mb-6">Curriculum</h2>
          <p className="text-gray-700 mb-6">
            Our curriculum is designed to provide a balanced education that promotes intellectual, social, and emotional growth. We offer a wide range of subjects including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Mathematics</li>
            <li>Science</li>
            <li>English Language and Literature</li>
            <li>Social Studies</li>
            <li>Foreign Languages</li>
            <li>Physical Education</li>
            <li>Arts and Music</li>
            <li>Technology and Computer Science</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-6">Advanced Placement (AP) Courses</h2>
          <p className="text-gray-700 mb-6">
            We offer a variety of AP courses for students who wish to pursue college-level studies while still in high school. Our AP offerings include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>AP Calculus AB/BC</li>
            <li>AP Physics</li>
            <li>AP Chemistry</li>
            <li>AP Biology</li>
            <li>AP English Literature and Composition</li>
            <li>AP US History</li>
            <li>AP World History</li>
            <li>AP Computer Science</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-6">Extracurricular Activities</h2>
          <p className="text-gray-700 mb-6">
            At Springdale High School, we believe in the importance of extracurricular activities in fostering well-rounded individuals. Our students have the opportunity to participate in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Music, Dance, Drama, Art</li>
            <li>Sports: Soccer, Basketball, Swimming</li>
            <li>Robotics, Coding Club, Science Club</li>
            <li>Debate Club, Literary Society</li>
            <li>Environmental Club, Astronomy Club</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-6">Support Services</h2>
          <p className="text-gray-700 mb-6">
            We offer a range of support services to help students succeed academically, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Counseling and Guidance</li>
            <li>Special Education</li>
            <li>Tutoring Programs</li>
            <li>College and Career Planning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Academics;
