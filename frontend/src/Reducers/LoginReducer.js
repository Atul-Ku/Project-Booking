// src/store.js
import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';
const authSlice = createSlice({
  
  name: "auth",
  initialState: {
    username: "",
    password: "",
    isLoggedIn: false, // Add isLoggedIn to track login status
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state,action) => {
     const {navigate}=action.payload;
      if (state.username === "admin" && state.password === "password") {
        state.isLoggedIn = true;
        console.log("Logging in successful");
       navigate('/apilink');
      } else {
        state.isLoggedIn = false;
        console.log("Login failed");
       alert("Bad Credentials")
      }
    },
  },
});

export const { setUsername, setPassword, login } = authSlice.actions;

export default authSlice;