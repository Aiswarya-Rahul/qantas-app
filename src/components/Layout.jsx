import React, { useEffect, useState } from "react";
import Header from "./Header";
import HotelList from "./HotelList";
import data from "../data/data.json";

const Layout = () => {
  const [hotelList, setHotelList] = useState(data?.results);
  const hotelCount = hotelList?.length;

  return (
    <>
      <Header hotelCount={hotelCount} />
      <HotelList />
    </>
  );
};

export default Layout;
