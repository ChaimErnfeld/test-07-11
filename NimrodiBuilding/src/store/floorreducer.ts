//FILL HERE 3.1

import { createSlice } from "@reduxjs/toolkit";

export const floorSlice = createSlice({
  name: "floorAccess",
  initialState: {
    floorAccess: [false, false, false, false, false],
  },
  reducers: {
    changeAccess: (state, action) => {
      state.floorAccess[action.payload] = !state.floorAccess[action.payload];
    },
  },
});

export const { changeAccess } = floorSlice.actions;

export default floorSlice.reducer;
