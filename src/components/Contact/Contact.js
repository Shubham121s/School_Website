// src/components/Contact/Contact.js
import React from 'react';
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
          <div className="flex flex-col md:flex-row">
            {/* Contact Form */}
            <div className="md:w-1/2 md:pr-6">
              <ContactForm />
            </div>
            {/* Google Map */}
            <div className="md:w-1/2 md:pl-6">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
