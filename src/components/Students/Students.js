// src/components/Students/Students.js
import React from 'react';

const extracurricularActivities = [
  "Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"
];

const clubsAndSocieties = [
  "Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"
];

const achievements = [
  { name: "John Smith", achievement: "National Level Math Olympiad Winner" },
  { name: "Sarah Lee", achievement: "Gold Medalist in State Swimming Championship" },
  { name: "Tech Innovators Club", achievement: "Winners of Inter-School Robotics Competition" }
];

const studentCouncil = [
  { role: "President", name: "Amy Parker", grade: "Grade 12" },
  { role: "Vice President", name: "Rajiv Mehta", grade: "Grade 11" },
  { role: "Secretary", name: "Lisa Wong", grade: "Grade 10" }
];

const Students = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">Life at Springdale</h1>
          <p className="text-lg text-gray-200">
            Discover the vibrant student life at Springdale, filled with various activities, clubs, and achievements.
          </p>
        </div>
        <div className="p-6 md:p-12">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Extracurricular Activities</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {extracurricularActivities.map((activity, index) => (
                <li key={index} className="mb-1">{activity}</li>
              ))}
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Clubs and Societies</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {clubsAndSocieties.map((club, index) => (
                <li key={index} className="mb-1">{club}</li>
              ))}
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-gray-800">{achievement.name}</h3>
                  <p className="text-lg text-gray-600">{achievement.achievement}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-semibold mb-4">Student Council</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentCouncil.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-medium text-gray-800">{member.role}</h3>
                  <p className="text-lg text-gray-600">{member.name}</p>
                  <p className="text-lg text-gray-600">{member.grade}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Students;
