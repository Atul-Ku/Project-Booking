// src/Login.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { setUsername, setPassword, login } from '../Reducers/LoginReducer';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // Import toast
const AdminLogin = () => {
  const dispatch = useDispatch();
  const { username, password ,isLoggedIn} = useSelector((state) => state.auth);

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };
const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault(); 
    dispatch(login({navigate}));
  };


  return (
    <Container maxWidth="xs" sx={{ textAlign: "center" }}>
      <img
        style={{
          width: "100px",
          height: "100px",
          marginTop: "50px",
          marginBottom: "-30px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
        src="./user.png"
        alt="Logo"
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
          value={username} // Get username from Redux state
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          autoComplete="current-password"
          required
          fullWidth
          value={password} // Get password from Redux state
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          style={{ marginTop: "20px", marginBottom: "20px", padding: "20px" }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default AdminLogin;