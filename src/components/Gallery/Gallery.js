// src/components/Gallery/Gallery.js
import React from 'react';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';

const Gallery = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-lg text-gray-200">
            Explore our photo and video galleries to see highlights from various events and activities at Springdale.
          </p>
        </div>
        <div className="p-6 md:p-12">
          <PhotoGallery />
          <VideoGallery />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
