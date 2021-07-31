import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import trackListSlice from "./trackListSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    tracks: trackListSlice,
  },
});
