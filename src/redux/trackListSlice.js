import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracksList: [],
};

export const trackListSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    storeTracksList: (state, action) => {
      state.tracksList = action.payload;
    },
    clearTracksList: (state) => {
      state.state = initialState;
    },
  },
});

export const { storeTracksList, clearTracksList } = trackListSlice.actions;

export default trackListSlice.reducer;
