import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import './BookingForm.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const BookingForm = () => {
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
      <h2 className='heading'>Book Train Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>From</label>
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div style={{marginTop:'25px', marginBottom:'20px', marginLeft:'15px' , maxWidth:'25px'}}><FaArrowRightArrowLeft /></div>
        <div>
          <label>To</label>
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit">Book Train Ticket</button>
      </form>
    </Fragment>
  );
};

export default BookingForm;