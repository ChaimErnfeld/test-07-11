//FILL HERE 3.2
import { createSlice } from "@reduxjs/toolkit";
import rolesData from "../data/roles.json";

export const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: rolesData[0],
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
