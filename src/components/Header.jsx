import { useSelector } from "react-redux";
import logo from "../assets/qantas-logo.png";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { setSortedHotelList } from "../util/hotelSlice";
import { useEffect } from "react";
import { sortHotels } from "../util/sortHotel.js";

const Header = ({ hotelCount }) => {
  const dispatch = useDispatch();

  // get hotelList from redux store
  const hotelList = useSelector((data) => data.hotel.hotelList);

  const onSortHandler = (e) => {
    // handle sort functionality here
    const sortOrder = e.target.value;

    //call the generic sort function
    const sortedHotelList = sortHotels(sortOrder, hotelList);

    dispatch(setSortedHotelList(sortedHotelList)); // update store with sorted hotelList
  };

  //apply default sorting on component mount
  useEffect(() => {
    if (hotelList.length) {
      dispatch(setSortedHotelList(sortHotels("PRICE-ASC", hotelList)));
    }
  }, [hotelList, dispatch]);
  return (
    <header data-testid="header">
      <img src={logo} alt="Qantas Logo" />
      <section data-testid="hotelFilter" className={style.hotelFilterSection}>
        <label className={style.hotelCount}>
          <b data-testid="totalHotels"> {hotelCount}</b> <i> hotels in </i>
          <b> Sydney. </b>
        </label>
        <div
          data-testid="divFilter"
          id="filterDiv"
          className={style.floatRight}
        >
          <label className={style.lblSortBy}>Sort by</label>
          <select
            role="select"
            title="SortByPrice"
            id="sortByPrice"
            className=""
            onChange={onSortHandler}
            defaultValue="PRICE-ASC"
          >
            <option data-testid="select-option" value="PRICE-DESC">
              Price high-low
            </option>
            <option data-testid="select-option" value="PRICE-ASC">
              Price low-high
            </option>
          </select>
        </div>
      </section>
    </header>
  );
};
export default Header;
