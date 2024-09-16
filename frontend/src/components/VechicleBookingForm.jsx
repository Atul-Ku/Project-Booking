import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import './VehicleBooking.css';
import { FaArrowRightArrowLeft, FaCar } from "react-icons/fa6";

const VehicleBookingForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'from') setFrom(value);
    if (name === 'to') setTo(value);
    if (name === 'date') setDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookTicket({ from, to, date }));
    setFrom('');
    setTo('');
    setDate('');
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="booking">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="from" value={from} onChange={handleChange} placeholder='From city' />
        </div>
        <button type="button" onClick={handleSwap} className="swap-btn">
          <FaArrowRightArrowLeft />
        </button>
        <div>
          <input type="text" name="to" value={to} onChange={handleChange} placeholder='To city' />
        </div>
        <div>
          <input type="date" name="date" value={date} onChange={handleChange} />
        </div>
        <button id="submit" type="button">Search</button>
      </form>
      <div className="vehicle-icon">
        <FaCar />
      </div>
    </div>
  );
};

export default VehicleBookingForm;
