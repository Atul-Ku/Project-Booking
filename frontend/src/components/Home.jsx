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

const Home = () => {
  const [selectedService, setSelectedService] = useState('Train'); // Renamed for clarity

  return (
    <div className="homepage">
       <Header /> 
      <div>
        <img className='home' src='./Home.png' alt='Home image' />
      </div>

      <ServiceNav onServiceClick={setSelectedService} />
      <div className='booking-section'>
        {selectedService === 'Train' && <TrainBookingForm />}
        {selectedService === 'Flight' && <FlightBookingForm />}
        {selectedService === 'Vehicle' && <VechicleBookingForm />}
        {selectedService === 'Support' && (
          <div className='support-section'>
            {/* You can create a CustomerSupport component or add content here */}
            <h2>Customer Support</h2>
            <p>How can we assist you today?</p>
            {/* Add more customer support related content as needed */}
          </div>
        )}
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