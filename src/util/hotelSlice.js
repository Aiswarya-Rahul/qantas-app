import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotelList",
  initialState: { hotelList: [], sortedHotelList: [] },
  reducers: {
    setHotelList: (state, action) => {
      state.hotelList = action.payload;
    },
    setSortedHotelList: (state, action) => {
      state.sortedHotelList = action.payload;
    },
  },
});

export const { setHotelList, setSortedHotelList } = hotelSlice.actions;

export default hotelSlice.reducer;
