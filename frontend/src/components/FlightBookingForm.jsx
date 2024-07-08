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

  const handleClear = () => {
    dispatch(clearFlights());
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
      <h2 className='heading'>Book Flight Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>From</label>
          <input type="text" name='from' value={formData.from} onChange={handleChange} placeholder="Enter Source" required/>
        </div>
        <button onClick={handleSwap} style={{ marginTop: '25px', marginBottom: '20px', marginLeft: '50%', marginRight: '50%', rotate: '90deg', transparent: 'true' }}><FaArrowRightArrowLeft /></button>
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
                    <button onClick={() => handleSelect(train)}>Select</button>
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