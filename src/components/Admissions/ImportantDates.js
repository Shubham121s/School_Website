// src/components/Admissions/ImportantDates.js
import React from 'react';

const dates = [
  { date: 'August 1, 2024', event: 'Admissions Open' },
  { date: 'September 30, 2024', event: 'Last Date for Application Submission' },
  { date: 'October 15, 2024', event: 'Entrance Examination' },
  { date: 'November 1, 2024', event: 'Results Announcement' },
];

const ImportantDates = () => {
  return (
    <section className="mb-6">
      <h2 className="text-3xl font-semibold mb-4">Important Dates</h2>
      <ul className="space-y-4">
        {dates.map((item, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <span className="block text-xl font-medium text-indigo-600">{item.date}</span>
            <span className="block text-lg text-gray-700">{item.event}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImportantDates;
