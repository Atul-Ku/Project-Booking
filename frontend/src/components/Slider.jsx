import React, { useState, useEffect } from 'react';
import { Box, Paper, useTheme, IconButton } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

const images = [
  { label: 'Image 1', imgPath: '6f088102ee84ca42818880b0e7a53013-qeinq.png' },
  { label: 'Image 2', imgPath: 'a18ed159795638a89940bf7bfbf7a029-buxfd.png' },
  { label: 'Image 3', imgPath: 'adba3b216ecddfadc97baf93119f6f28-fnuzr.png' },
  { label: 'Image 4', imgPath: '5390cf1e5644eced244bb1a8006bd040-syxpz.png' },
];

const ImageCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.ceil(images.length / 3); // Adjust the number of steps for 3 images per view
  const theme = useTheme();

  // Automatically shift images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep === 0 ? maxSteps - 1 : prevStep - 1));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        bgcolor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
        textAlign: 'center',
        padding: '20px 0',
      }}
    >
      <SwipeableViews
        axis={'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ width: '100%' }}
      >
        {Array.from({ length: maxSteps }, (_, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              width: '100%',
              padding: '10px',
            }}
          >
            {images.slice(index * 3, index * 3 + 3).map((img, idx) => (
              <Box
                key={idx}
                component="img"
                sx={{
                  height: 'auto',
                  width: '30%',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  margin: '0 5px',
                  boxShadow: theme.palette.mode === 'dark' ? '0px 4px 10px rgba(0, 0, 0, 0.8)' : '0px 4px 10px rgba(0, 0, 0, 0.2)',
                }}
                src={img.imgPath}
                alt={img.label}
              />
            ))}
          </Box>
        ))}
      </SwipeableViews>

      {/* Dots for Carousel navigation */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
        }}
      >
        {Array.from({ length: maxSteps }).map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              padding: '6px',
              backgroundColor: activeStep === index ? theme.palette.primary.main : '#bbb',
              margin: '0 5px',
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;
