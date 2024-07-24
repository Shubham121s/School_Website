// src/components/Contact/Map.js
import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-80">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.565128334178!2d-122.42529868467983!3d37.77492977975827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e7a5e99b3b%3A0xb03d8c9b5f9d3e27!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1622558943394!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
};

export default Map;
