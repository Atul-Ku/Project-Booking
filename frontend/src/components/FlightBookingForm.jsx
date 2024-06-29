import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import './BookingForm.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const FlightBookingForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookTicket({ from, to, date }));
    setFrom('');
    setTo('');
    setDate('');
  };

  return (
    <Fragment>
      <h2 className='heading'>Book Flight Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>From</label>
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required/>
        </div>
        <div style={{marginTop:'25px', marginBottom:'20px', marginLeft:'15px' , maxWidth:'25px'}}><FaArrowRightArrowLeft /></div>
        <div>
          <label>To</label>
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} required/>
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </div>
        <button id='submit' type="submit" >Book Flight Ticket</button>
      </form>
    </Fragment>
  );
};

export default FlightBookingForm;