import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import './BookingForm.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const VechicleBookingForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookTicket({ from, to, date }));
    setFrom('');
    setTo('');
    setDate('');
  };

  const handleSwap = () => {
    const { from, to, date } = formData;
    setFormData({
      from: to,
      to: from,
      date: date,
    });
  } 

  return (
    <Fragment>
      <h2 className='heading'>Book Vechicle Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>From</label>
          <input type="text" value={from} onChange={handleChange} placeholder='From city'/>
        </div>
        <button onClick={handleSwap} style={{ marginTop: '25px', marginBottom: '20px', marginLeft: '50%', marginRight: '50%', rotate: '90deg', transparent: 'true' }}><FaArrowRightArrowLeft /></button>
        <div>
          <label>To</label>
          <input type="text" value={to} onChange={handleChange} placeholder='To city'/>
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={handleChange} />
        </div>
        <button id='submit' type="submit">Vechicle Details</button>
      </form>
    </Fragment>
  );
};

export default VechicleBookingForm;