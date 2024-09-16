import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
  'WhatsApp Image 2024-09-15 at 23.36.12.jpeg',
  'WhatsApp Image 2024-09-15 at 23.36.14.jpeg',
  'WhatsApp Image 2024-09-15 at 23.36.15.jpeg',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageCount = images.length;
  const intervalTime = 3000; // 3 seconds

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextImage();
    }, intervalTime);

    return () => clearInterval(autoSlide); // Cleanup the interval on component unmount
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageCount - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageCount - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      position="relative"
      width="1000px"
      height="250px"
      margin="auto auto 20px auto" 
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="0 200px" // Add padding to make space for arrows
    >
      {/* Display the current image */}
      <img
        src={images[currentImageIndex]}
        alt={`slide ${currentImageIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Left Arrow (outside the slider) */}
      <IconButton
        onClick={prevImage}
        style={{
          position: 'absolute',
          left: '10px', // Make it visible outside of the slider
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          zIndex: 2, // Ensure it's above the image
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Right Arrow (outside the slider) */}
      <IconButton
        onClick={nextImage}
        style={{
          position: 'absolute',
          right: '10px', // Make it visible outside of the slider
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          zIndex: 2, // Ensure it's above the image
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;