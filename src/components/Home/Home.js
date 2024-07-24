// src/components/Home/Home.js
import React from 'react';
import EventsCalendar from '../EventsCalendar'; // Import the EventsCalendar component

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <header className="hero-section relative bg-cover bg-center text-white py-32" >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl text-black font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">Welcome to Springdale Public School</h1>
          <p className="text-lg md:text-xl text-black mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Empowering students to become lifelong learners and responsible citizens.
          </p>
          <a href="/admissions" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105">
            Learn More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src="https://media.istockphoto.com/id/539281673/photo/race-to-the-finish.webp?b=1&s=170667a&w=0&k=20&c=pFW48KWYDhaHk_6Hahp6nxxMpnO62WO5OVVOhlxTZus=" alt="Annual Sports Day" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Annual Sports Day</h3>
                <p className="text-gray-700">Celebrating Excellence in Sports.</p>
              </div>
            </div>
            <div className="feature-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src="https://media.istockphoto.com/id/973293918/photo/kids-having-fun-watching-an-experiment-at-a-science-centre.webp?b=1&s=170667a&w=0&k=20&c=EzMukQXPlgxSZzx-MvPf6NdjzDlvJjT1Y9SUVaH0My0=" alt="Science Exhibition" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Science Exhibition</h3>
                <p className="text-gray-700">Showcasing Student Innovations.</p>
              </div>
            </div>
            <div className="feature-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src="https://media.istockphoto.com/id/2150388165/photo/fans-raise-hands-in-excitement-at-vibrant-outdoor-music-fest-lights-illuminate-stage-dynamic.webp?b=1&s=170667a&w=0&k=20&c=OU9mJmXiQX6ia6GsKbibbPVHx316ZYciRtITd4SpO8Y=" alt="Cultural Fest" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Cultural Fest</h3>
                <p className="text-gray-700">Embracing Diversity and Creativity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="events-calendar-section py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <EventsCalendar />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Join Our School Community</h2>
          <p className="text-lg mb-6">
            Ready to take the next step in your educational journey? Apply today and become part of our vibrant school community.
          </p>
          <a href="/admissions" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;