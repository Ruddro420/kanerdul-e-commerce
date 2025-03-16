import React, { useState, useEffect } from 'react';

const items = [
  { href: 'daimond.html', label: 'Diamond Cut Earrings' },
  { href: '/html/zicron.html', label: 'Zircon Stone Earrings' },
  { href: '/html/viral-ring.html', label: 'Viral Earrings' },
  { href: '/html/trendy-earring.html', label: 'Trendy Earrings' },
  { href: '/html/pendant-neclace.html', label: 'Pendant Necklace' },
  { href: '/html/necklace-set.html', label: 'Necklace Set' },
  { href: '/html/offer-product.html', label: 'Offer Products' },
  { href: '/html/all-earrings-collcetion.html', label: 'All Earrings Collection' },
  { href: '/html/premium-irrings.html', label: 'Premium Earrings' },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Number of items visible at a time
  const slideInterval = 3000; // Auto-slide every 3 seconds

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop when reaching end
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval); // Cleanup interval
  }, [currentIndex]);

  // Get items for displaying, duplicate to create looping effect
  const visibleItems = [...items, ...items]; 

  return (
    <div>
      <div className="sh-add-slider-container">
        <a href="index.html">
          <img src="https://kanerdul.com/public/664e5dc7d437f.jpg" alt="Slider Image" />
        </a>
      </div>

      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${(currentIndex % items.length) * 210}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {visibleItems.map((item, index) => (
            <div key={index} className="slider-item">
              <a href={item.href}>{item.label}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
