import { configureStore } from '@reduxjs/toolkit';
import boxReducer from './boxSlice';

export const store = configureStore({
  reducer: {
    boxes: boxReducer,
  },
});
