import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotelSlice";

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});
