// src/components/Home/Carousel.js
import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Annual Sports Day"
        />
        <BootstrapCarousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Science Exhibition"
        />
        <BootstrapCarousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Cultural Fest"
        />
        <BootstrapCarousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default Carousel;
