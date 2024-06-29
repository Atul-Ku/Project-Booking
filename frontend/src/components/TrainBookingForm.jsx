import React, { Fragment, useState } from 'react';
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


  return (
    <Fragment>
      <h2 className='heading'>Book Train Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>From</label>
          <input type="text" name='from' value={formData.from} onChange={handleChange} placeholder='From Station Code' />
        </div>
        <div style={{ marginTop: '25px', marginBottom: '20px', marginLeft: '15px', maxWidth: '25px' }}><FaArrowRightArrowLeft /></div>
        <div>
          <label>To</label>
          <input type="text" name='to' value={formData.to} onChange={handleChange} placeholder='To Station Code' />
        </div>
        <div>
          <label>Date</label>
          <input type="date" name='date' value={formData.date} onChange={handleChange} />
        </div>
        <button id='submit' type="submit">Book Train Ticket</button>
      </form>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <h2>Available Trains</h2>
          <ul>
            {trains.map((train) => (
              <li key={train.train_number}>
                <p>Train name: {train.train_name}</p>
                <p>Journey Duration: {train.duration}</p>
                <p>Journey Starting Time - Ending Time: {train.from_std} - {train.to_sta}</p>
                <p>Journey Distance: {train.distance}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default TrainBookingForm;