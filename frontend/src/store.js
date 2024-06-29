import { configureStore} from '@reduxjs/toolkit';
import themeSlice from './Reducers/theme';
import trainSlice from './Reducers/trainRent';
import flightRentalSlice from './Reducers/flightRent';
import vehicleRentalSlice from './Reducers/vehicleRent';

const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [trainSlice.name]: trainSlice.reducer,
    [flightRentalSlice.name]: flightRentalSlice.reducer,
    [vehicleRentalSlice.name]: vehicleRentalSlice.reducer,
  },
});

export default store;