import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './Features/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});