import React, { useState } from 'react';
import { TextField, Button, Grid, Avatar, IconButton } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import { styled } from '@mui/system';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const FormContainer = styled('div')(({ theme }) => ({
  maxWidth: '90%',
  margin: 'auto',
  padding: theme.spacing(3),
  backgroundColor: '#cde9ec',
  borderRadius: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
}));

const InlineContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  'input::placeholder': {
    color: 'black',
  }
}));

const RotatingButton = styled(IconButton)(({ rotate }) => ({
  transition: 'transform 0.3s ease-in-out',
  transform: rotate ? 'rotate(90deg)' : 'rotate(0deg)',
}));

const BookingForm = () => {
  const [user, setUser] = useState(''); // State for user name
  const [from, setFrom] = useState(''); // State for "From" input
  const [to, setTo] = useState(''); // State for "To" input
  const [date, setDate] = useState(''); // State for "Date" input
  const [message, setMessage] = useState(''); // State for "Message" input
  const [isRotated, setIsRotated] = useState(false);
  const [Train_Number, setTrainNumber] = useState(0);

  // Function to handle rotation on window resize
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsRotated(true);
    }
    if (window.innerWidth >= 600) {
      setIsRotated(false);
    }
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: user, // Include user name in the data
      from_location: from,
      to_location: to,
      train: Train_Number,
      message: message,
      date: date,
    };
    try {
      const response = await fetch('http://localhost:8000/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        alert('Booking Successful!');
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Add event listener to track window resize
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FormContainer>
      <InlineContainer container spacing={2}>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="User Name" // Label for the new input field
            name='user'
            type="text"
            placeholder="Enter your name"
            variant="outlined"
            sx={{ mb: 2, 'input::placeholder': { color: '#555' } }}
            value={user} // Bind "user" state to TextField
            onChange={(e) => setUser(e.target.value)} // Update "user" state on TextField change
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="From"
            name='from'
            type="text"
            placeholder="From"
            variant="outlined"
            sx={{ mb: 2, 'input::placeholder': { color: '#555' } }}
            value={from} // Bind "from" state to TextField
            onChange={(e) => setFrom(e.target.value)} // Update "from" state on TextField change
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <RotatingButton rotate={isRotated} onClick={handleSwap}>
            <FaArrowRightArrowLeft />
          </RotatingButton>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="To"
            name='to'
            type="text"
            placeholder="To"
            variant="outlined"
            sx={{ mb: 2, 'input::placeholder': { color: '#555' } }}
            value={to} // Bind "to" state to TextField
            onChange={(e) => setTo(e.target.value)} // Update "to" state on TextField change
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="Train_Number"
            name='Train_Number'
            type="text"
            placeholder="00000"
            variant="outlined"
            sx={{ mb: 2, 'input::placeholder': { color: '#555' } }}
            value={Train_Number} // Bind "Train_Number" state to TextField
            onChange={(e) => setTrainNumber(e.target.value)} // Update "Train_Number" state on TextField change
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="Date"
            type="date"
            name='date'
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            sx={{ mb: 2, 'input::placeholder': { color: '#555' } }}
            value={date} // Bind "date" state to TextField
            onChange={(e) => setDate(e.target.value)} // Update "date" state on TextField change
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Message"
            name='message'
            placeholder="Write your message"
            variant="outlined"
            sx={{ mb: 2, 'input::placeholder': { color: '#555' } }}
            value={message} // Bind "message" state to TextField
            onChange={(e) => setMessage(e.target.value)} // Update "message" state on TextField change
          />
        </Grid>
      </InlineContainer>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '16px' }}>
        <Avatar sx={{ width: 64, height: 64, backgroundColor: '#1976d2' ,padding: 4}}>
          <TrainIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Button
          variant="contained"
          type='submit'
          onClick={handleSubmit}
          sx={{ backgroundColor: '#4caf50', color: '#fff', ml: 2, '&:hover': { backgroundColor: '#388e3c' } }}
        >
          Proceed to Payment
        </Button>
      </div>
    </FormContainer>
  );
};

export default BookingForm;
