import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  accessToken: undefined,
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload;
    },
    storeUserData: (state, action) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.state = initialState;
    },
  },
});

export const { login, storeUserData, logout } = userSlice.actions;

export default userSlice.reducer;
