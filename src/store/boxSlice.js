import { createSlice } from '@reduxjs/toolkit';
import { getBoxes, saveBox } from 'services/boxService';

const initialState = {
  boxes: [],
  isLoading: false,
};

const boxSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {
    loadBoxes: (state) => {
      const storedBoxes = getBoxes().reverse();
      state.boxes = storedBoxes;
    },
    addBox: (state, action) => {
      const newBox = saveBox(action.payload);
      state.boxes = [newBox, ...state.boxes];
    },
  },
});

export const { loadBoxes, addBox } = boxSlice.actions;
export default boxSlice.reducer;
