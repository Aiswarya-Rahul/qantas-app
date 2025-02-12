import logo from "../assets/qantas-logo.png";
import style from "./Header.module.css";
const Header = ({ hotelCount }) => {
  const onSortHandler = () => {};

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
          >
            <option data-testid="select-option" value="" default>
              Select
            </option>
            <option data-testid="select-option" value="price-high-low">
              Price high-low
            </option>
            <option data-testid="select-option" value="price-low-high">
              Price low-high
            </option>
          </select>
        </div>
      </section>
    </header>
  );
};
export default Header;
