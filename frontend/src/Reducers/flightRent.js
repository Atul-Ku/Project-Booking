import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flights: [],
};

const flightRentalSlice = createSlice({
  name: "flightRentals",
  initialState,
  reducers: {
    addFlight: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default flightRentalSlice;
export const { addFlight } = flightRentalSlice.actions;