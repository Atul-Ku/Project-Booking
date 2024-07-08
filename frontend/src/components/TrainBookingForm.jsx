import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BookingForm.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { fetchTrainDetails } from '../Reducers/trainRent';
import { clearTrains } from '../Reducers/trainRent';

const TrainBookingForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const dispatch = useDispatch();
  const trains = useSelector((state) => state.train.trains);
  const status = useSelector((state) => state.train.status);
  const error = useSelector((state) => state.train.error);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchTrainDetails(formData));
  };

  const handleClear = () => {
    dispatch(clearTrains());
  };

  const handleSwap = () => {
    const { from, to, date } = formData;
    let temp = from;
    setFormData({
      from: to,
      to: temp,
      date,
    });
  };

  const handleSelect = (train) => {
    // Handle train selection logic here
    console.log('Selected train:', train);
  };

  return (
    <Fragment>
      <h2 className='heading'>Book Train Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>From</label>
          <input type="text" name='from' value={formData.from} onChange={handleChange} placeholder='From Station Code' />
        </div>
        <button onClick={handleSwap} style={{ marginTop: '25px', marginBottom: '20px', marginLeft: '50%', marginRight: '50%', rotate: '90deg', transparent: 'true' }}><FaArrowRightArrowLeft /></button>
        <div>
          <label>To</label>
          <input type="text" name='to' value={formData.to} onChange={handleChange} placeholder='To Station Code' />
        </div>
        <div>
          <label>Date</label>
          <input type="date" name='date' value={formData.date} onChange={handleChange} />
        </div>
        <button id='submit' type="submit">Train Details</button>
      </form>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <h2>Available Trains</h2>
          <table>
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Journey Duration</th>
                <th>Starting Time</th>
                <th>Ending Time</th>
                <th>Journey Distance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {trains.map((train) => (
                <tr key={train.train_number}>
                  <td>{train.train_name}</td>
                  <td>{train.duration}</td>
                  <td>{train.from_std}</td>
                  <td>{train.to_sta}</td>
                  <td>{train.distance}</td>
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

export default TrainBookingForm;
