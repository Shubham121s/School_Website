// src/pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </header>
      <div className="p-6">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p>If you have any questions, please feel free to contact us...</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input type="text" className="w-full border p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="w-full border p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea className="w-full border p-2 rounded-md" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

