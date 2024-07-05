import { configureStore} from '@reduxjs/toolkit';
import themeSlice from './Reducers/theme';
import trainSlice from './Reducers/trainRent';
import flightSlice from './Reducers/flightRent';
import vehicleRentalSlice from './Reducers/vehicleRent';
import authSlice from './Reducers/LoginReducer';

const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [trainSlice.name]: trainSlice.reducer,
    [flightSlice.name]: flightSlice.reducer,
    [vehicleRentalSlice.name]: vehicleRentalSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});

export default store;