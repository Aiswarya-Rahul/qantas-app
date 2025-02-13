import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotelList",
  initialState: { hotelList: [], filteredHotelList: [] },
  reducers: {
    setHotelList: (state, action) => {
      state.hotelList = action.payload;
    },
    setFilterdHotelList: (state, action) => {
      state.filteredHotelList = action.payload;
    },
  },
});

export const { setHotelList, setFilterdHotelList } = hotelSlice.actions;

export default hotelSlice.reducer;
