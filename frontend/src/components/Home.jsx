import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './Header';
import TrainBookingForm from './TrainBookingForm';
import Footer from './Footer';
import FlightBookingForm from './FlightBookingForm';
import VechicleBookingForm from './VechicleBookingForm';
import ImageCarousel from './Slider';
import ServiceNav from './ServiceNav';
import ImageSlider from './ImageSlider';

const Home= () => {

const [id,setId]=useState('Train');

  return (
    <div className="homepage">
      <Header />
      <div>
        <img className='home' src='./Home.png' alt='Home image' />
      </div>
      <ServiceNav />
      <div className='booking-section'>
        <TrainBookingForm />
      </div>
      <div>
        <FlightBookingForm />
      </div>
      <div>
        <VechicleBookingForm />
      </div>
      <div className='why'>
        <span>why book with</span>
        <span>Darbhanga travels?</span>
      </div>
      <ImageCarousel />
      <div className='why'>
        <span>Our Happy Clients</span>
      </div>
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default Home;