import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vehicles: [],
};  

const vehicleRentalSlice = createSlice({
    name: 'vehicleRentals',
    initialState,
    reducers: {
        addVehicle: (state, action) => {
            state.vehicles.push(action.payload);
        },
    },
});

export default vehicleRentalSlice;
export const { addVehicle } = vehicleRentalSlice.actions;