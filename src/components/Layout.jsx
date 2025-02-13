import React, { useEffect, useState } from "react";
import Header from "./Header";
import HotelList from "./HotelList";
import { DATA_PATH } from "../util/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSortedHotelList, setHotelList } from "../util/hotelSlice";

const Layout = () => {
  const hotelList = useSelector((store) => store.hotel.sortedHotelList);
  const hotelCount = hotelList?.length;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const resp = await fetch(DATA_PATH);
        const data = await resp.json();
        dispatch(setHotelList(data?.results));
        dispatch(setSortedHotelList(data?.results));
      } catch (error) {
        console.log("There was an error in fetching data");
      }
    };

    fetchHotels();
  }, [dispatch]);

  return (
    <>
      <Header hotelCount={hotelCount} />
      {hotelList &&
        hotelList.map((hotel) => (
          <HotelList
            key={hotel.id}
            hotel={hotel.property}
            offer={hotel.offer}
          />
        ))}
    </>
  );
};

export default Layout;
