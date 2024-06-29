import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trains: [],
};

const trainRentalSlice = createSlice({
  name: "trainRentals",
  initialState,
  reducers: {
    addTrain: (state, action) => {
      state.trains.push(action.payload);
    },
  },
});


export default trainRentalSlice;
export const { addTrain } = trainRentalSlice.actions;