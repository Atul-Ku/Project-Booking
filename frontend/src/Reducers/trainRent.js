import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    trains: [],
    status: 'idle',
    error: null,
};

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3f4fce1da3mshb2bfd3ad278da43p1d8effjsn0adbb8467bf8',
		'x-rapidapi-host': 'irctc1.p.rapidapi.com'
	}
};

export const fetchTrainDetails = createAsyncThunk('train/fetchTrainDetails', async (userData) => {
    const response=await fetch(`https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${userData.from}&toStationCode=${userData.to}&dateOfJourney=${userData.date}`, options);
    const data = await response.json();
    return data.data;
});

const trainSlice = createSlice({
    name: 'train',
    initialState,
    reducers: {
        clearTrains: (state) => {
            state.trains = [];
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrainDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTrainDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.trains = action.payload;
            })
            .addCase(fetchTrainDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearTrains } = trainSlice.actions;

export default trainSlice;