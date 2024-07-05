import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import './BookingForm.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { fetchFlightDetails } from '../Reducers/flightRent';
import { clearFlights } from '../Reducers/flightRent';
import { useSelector } from 'react-redux';

const FlightBookingForm = () => {

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flight.flights);
  const status = useSelector((state) => state.flight.status);
  const error = useSelector((state) => state.flight.error);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchFlightDetails(formData));
  };


  return (
    <Fragment>
      <h2 className='heading'>Book Flight Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>From</label>
          <input type="text" name='from' value={formData.from} onChange={handleChange} placeholder="Enter Source" required/>
        </div>
        <div style={{marginTop:'25px', marginBottom:'20px', marginLeft:'15px' , maxWidth:'25px'}}><FaArrowRightArrowLeft /></div>
        <div>
          <label>To</label>
          <input type="text" name='to' value={formData.to} onChange={handleChange} placeholder="Enter Destination" required/>
        </div>
        <div>
          <label>Date</label>
          <input type="date" name='date' value={formData.date} onChange={handleChange} required/>
        </div>
        <button id='submit' type="submit" >Flight Details</button>
      </form>

      {error && <div>{error}</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
        <div>
          {flights.map((flight) => (
            <div key={flight._id}>
              <h3>{flight.originStationCode} - {flight.destinationStationCode}</h3>
              <p>Flight Number: {flight.flightNumber}</p>
              <p>Flight Name: {flight.equipmentId}</p>
              <p>Departure: {flight.departureDateTime}</p>
              <p>Arrival: {flight.arrivalDateTime}</p>
            </div>
          ))}
        </div>
      )}

    </Fragment>
  );
};

export default FlightBookingForm;