import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './BookingForm.css';

const BookingForm = () => {
  // const [from, setFrom] = useState('');
  // const [to, setTo] = useState('');
  // const [date, setDate] = useState('');
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(bookTicket({ from, to, date }));
  //   setFrom('');
  //   setTo('');
  //   setDate('');
  // };

  // return (
  //   <form className="booking-form" onSubmit={handleSubmit}>
  //     <div>
  //       <label>From</label>
  //       <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
  //     </div>
  //     <div>
  //       <label>To</label>
  //       <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
  //     </div>
  //     <div>
  //       <label>Date</label>
  //       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
  //     </div>
  //     <button type="submit">Book Train Ticket</button>
  //   </form>
  // );
};

export default BookingForm;