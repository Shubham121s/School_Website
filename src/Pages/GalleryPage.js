// src/pages/GalleryPage.js
import React from 'react';
import Gallery from '../components/Gallery/Gallery';

const GalleryPage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-5xl font-bold">Gallery</h1>
      </header>
      <div className="p-6">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;

