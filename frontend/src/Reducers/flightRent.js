import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    flights: [],
    status: 'idle',
    error: null,
};

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3f4fce1da3mshb2bfd3ad278da43p1d8effjsn0adbb8467bf8',
		'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
	}
};

export const fetchFlightDetails = createAsyncThunk('flight/fetchFlightDetails', async (userData) => {
    const response = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${userData.from}&destinationAirportCode=${userData.to}&date=${userData.date}&itineraryType=ONE_WAY&sortOrder=ML_BEST_VALUE&numAdults=1&numSeniors=0&classOfService=ECONOMY&pageNumber=1&nearby=yes&nonstop=yes&currencyCode=USD&region=USA`, options);
    const data = await response.json();
    return data.data.flights[0].segments[0].legs;
});

const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        clearFlights: (state) => {
            state.flights = [];
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlightDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFlightDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.flights = action.payload;
            })
            .addCase(fetchFlightDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearFlights } = flightSlice.actions;

export default flightSlice;