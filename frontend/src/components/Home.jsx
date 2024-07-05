import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './Header';
import TrainBookingForm from './TrainBookingForm';
import Footer from './Footer';
import FlightBookingForm from './FlightBookingForm';
import VechicleBookingForm from './VechicleBookingForm';

let TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200;

  if (this.isDeleting) {delta /= 2;}

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 200;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

const Home= () => {

  useEffect(() => {
    var elements = window.document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = window.document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    window.document.body.appendChild(css);
  },[]);

const [id,setId]=useState('Train');

  return (
    <div className="homepage">
      <Header />
      <div>
        <img className='home' src='./Home.png' alt='Home image' />
      </div>
      <div>
        <h1>
          <a href="#" className="typewrite" data-period="2000" data-type='[ "Book Your Train Tickets", "Book Your Flight Tickets", "Book Your Vehicle Tickets"]'>
            <span className="wrap"></span>
          </a>
        </h1>
      </div>
      <div className="banner">
        <div className="banner-item">
          <div style={{fontFamily:'monospace',fontWeight:'bold',fontSize:'20px'}}>Trains</div>
          <button id='Train' onClick={()=>setId('Train')}><img src="https://www.freeiconspng.com/thumbs/logistic-icon-png/train-transportation-icon-png-21.png" alt="Train" /></button>
        </div>
        <div className="banner-item">
          <div style={{fontFamily:'monospace',fontWeight:'bold',fontSize:'20px'}}>Flights</div>
          <button id='Flight' onClick={()=>setId('Flight')}><img src="https://www.freeiconspng.com/thumbs/airplane-icon-png/plane-icon-png-images--pictures--becuo-8.png" alt="Flight" /></button>
        </div>
        <div className="banner-item">
          <div style={{fontFamily:'monospace',fontWeight:'bold',fontSize:'20px'}}>Vehicles</div>
          <button id='Vechicle' onClick={()=>setId('Vechicle')}><img src="https://cdn-icons-png.flaticon.com/512/55/55283.png" alt="Vehicle" /></button>
        </div>
      </div>
      <div className="booking-section">
        {id === 'Train' && <TrainBookingForm />}
        {id === 'Flight' && <FlightBookingForm />}
        {id === 'Vechicle' && <VechicleBookingForm />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;