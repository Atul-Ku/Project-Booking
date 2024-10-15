import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { fetchFlightDetails, clearFlights } from '../Reducers/flightRent';
import './BookingForm.css';

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

  const handleSwap = () => {
    const { from, to, date } = formData;
    setFormData({
      from: to,
      to: from,
      date: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchFlightDetails(formData));
  };

  return (
    <Fragment>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group-inline">
          <input type="text" name='from' value={formData.from} onChange={handleChange} placeholder="From" required/>
        </div>
        <button onClick={handleSwap} className="swap-btn"><FaArrowRightArrowLeft /></button>
        <div className="form-group-inline">
          <input type="text" name='to' value={formData.to} onChange={handleChange} placeholder="To" required/>
        </div>
        <div className="form-group-inline">
          <input type="date" name='date' value={formData.date} onChange={handleChange} required/>
        </div>
        <div>
        <button id='submit' type="submit">Search</button>
        </div>
        <img src="/flight.f515b25a.svg" alt="Flight Booking" border="0" className="flight-image"/>
      </form>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <h2>Available Flights</h2>
          <table>
            <thead>
              <tr>
                <th>Flight Name</th>
                <th>Flight Source station</th>
                <th>Flight Destination station</th>
                <th>Starting Time</th>
                <th>Ending Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr key={flight.flightNumber}>
                  <td>{flight.equipmentId}</td>
                  <td>{flight.originStationCode}</td>
                  <td>{flight.destinationStationCode}</td>
                  <td>{flight.departureDateTime}</td>
                  <td>{flight.arrivalDateTime}</td>
                  <td>
                    <button>Select</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default FlightBookingForm;
