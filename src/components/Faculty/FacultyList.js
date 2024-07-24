// src/components/Faculty/FacultyList.js
import React from 'react';

const facultyMembers = [
  { name: 'Dr. Emily Johnson', subject: 'Physics', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Mr. David Lee', subject: 'Mathematics', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Mrs. Sarah Brown', subject: 'Chemistry', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { name: 'Dr. Mark Wilson', subject: 'Biology', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { name: 'Ms. Rachel Green', subject: 'English', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
];

const FacultyList = () => {
  return (
    <section className="mb-6">
      <h2 className="text-3xl font-semibold mb-4">Faculty Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
            />
            <h3 className="text-xl font-medium text-gray-700">{faculty.name}</h3>
            <p className="text-lg text-gray-500">{faculty.subject}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyList;
