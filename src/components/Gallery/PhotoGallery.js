// src/components/Gallery/PhotoGallery.js
import React from 'react';

const photos = [
  { src: 'https://via.placeholder.com/600x400?text=Sports+Day', alt: 'Sports Day' },
  { src: 'https://via.placeholder.com/600x400?text=Science+Exhibition', alt: 'Science Exhibition' },
  { src: 'https://via.placeholder.com/600x400?text=Cultural+Fest', alt: 'Cultural Fest' },
  { src: 'https://via.placeholder.com/600x400?text=Classroom', alt: 'Classroom' },
  { src: 'https://via.placeholder.com/600x400?text=Library', alt: 'Library' },
];

const PhotoGallery = () => {
  return (
    <section className="mb-6">
      <h2 className="text-3xl font-semibold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
