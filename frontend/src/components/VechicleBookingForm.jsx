import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './VehicleBooking.css';
import { FaArrowRightArrowLeft, FaCar } from "react-icons/fa6";

const VehicleBookingForm = () => {
  const [from, setFrom] = useState('');
  const [user, setUser] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'from') setFrom(value);
    if (name === 'to') setTo(value);
    if (name === 'date') setDate(value);
    if (name === 'user') setUser(value);
    if (name === 'message') setMessage(value);
    if (name === 'phone') setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const isAlphabetical = /^[A-Za-z\s]+$/; // Regex for alphabet characters and spaces
    const isValidPhoneNumber = /^\d{10}$/; // Regex for exactly 10 digits

    if (!isAlphabetical.test(user)) {
      alert('Username should contain only alphabetical characters.');
      return; // Prevent submission
    }

    if (!isValidPhoneNumber.test(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return; // Prevent submission
    }

    if (from === to) {
      alert('From and To stations must not be the same.');
      return; // Prevent submission
    }

    const data = {
      user,
      from_location: from,
      to_location: to,
      message,
      phone,
      date,
    };

    try {
      const response = await fetch('http://localhost:8000/api/feedback_car/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        alert('Booking Scheduled!');
        // Reset form after successful submission
        setFrom('');
        setTo('');
        setDate('');
        setMessage('');
        setUser('');
        setPhone('');
      } else {
        console.error('Error submitting the form');
        alert('Error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
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
          <input
            type="text"
            name="user"
            value={user}
            onChange={handleChange}
            placeholder="User Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="from"
            value={from}
            onChange={handleChange}
            placeholder="From City"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSwap}
          className="swap-btn"
        >
          <FaArrowRightArrowLeft />
        </button>
        <div>
          <input
            type="text"
            name="to"
            value={to}
            onChange={handleChange}
            placeholder="To City"
            required
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Message"
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Mobile No"
            required
          />
        </div>
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
      <div className="vehicle-icon">
        <FaCar />
      </div>
    </div>
  );
};

export default VehicleBookingForm;
