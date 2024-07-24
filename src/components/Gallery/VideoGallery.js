// src/components/Gallery/VideoGallery.js
import React from 'react';

const videos = [
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'School Annual Day' },
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Science Fair' },
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Cultural Festival' },
];

const VideoGallery = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-64"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
