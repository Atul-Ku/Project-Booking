import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { setUsername, setPassword, login } from '../Reducers/LoginReducer';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation after login
  const username = useSelector((state) => state.auth.username);
  const password = useSelector((state) => state.auth.password);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(login());
  };

  // Perform navigation based on login success
  if (isLoggedIn) {
    navigate('/api/details'); // Navigate to the protected route after successful login
  }

  return (
    <Container maxWidth="xs" sx={{ textAlign: 'center' }}>
      <img 
        style={{ width: '100px', height: '100px', marginTop: '50px', marginBottom: '-30px', backgroundColor: 'white', borderRadius: '50%' }} 
        src='./user.png' alt='Logo'
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          type="text"
          autoComplete="username"
          required
          fullWidth
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          autoComplete="current-password"
          required
          fullWidth
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          style={{ marginTop: '20px', marginBottom: '20px', padding: '20px' }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Admin;
