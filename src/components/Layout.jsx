import React, { useEffect, useState } from "react";
import Header from "./Header";
import HotelList from "./HotelList";
import { DATA_PATH } from "../util/constants";
import { useDispatch, useSelector } from "react-redux";
import { setHotelList } from "../util/hotelSlice";

const Layout = () => {
  const hotelList = useSelector((store) => store.hotel.hotelList);
  const hotelCount = hotelList?.length;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(DATA_PATH)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setHotelList(data?.results));
      })
      .catch((error) => console.log("There was an error in fetching data"));
  }, []);

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
