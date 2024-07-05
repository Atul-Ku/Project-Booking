// src/store.js
import {createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    password: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state, action) => {
      // Add login logic here
      console.log(state.username,'Logging in');
    },
  },
});

export const { setUsername, setPassword, login } = authSlice.actions;

export default authSlice;
