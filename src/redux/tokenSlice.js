import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
