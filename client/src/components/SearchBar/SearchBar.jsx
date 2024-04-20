import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

import "./SearchBar.css";

function SearchBar({
  handleClick,
  search,
  setSearch,
  searchDate,
  setSearchDate,
}) {
  return (
    <section className="search-bar">
      <div id="date">
        <p>A partir du : </p>
        <DatePicker
          value={searchDate}
          selected={searchDate}
          onChange={(date) => setSearchDate(date)}
        />
      </div>
      <div id="price-container">
        <label htmlFor="price">Prix minimum :</label>
        <input
          value={search}
          type="text"
          id="price"
          name="price"
          placeholder=" choisir votre tarif"
          onInput={(event) => setSearch(event.target.value)}
        />
      </div>
      <button className="search" type="button" onClick={handleClick}>
        chercher
      </button>
      <button type="button" aria-label="loupe" className="loupe" onClick={handleClick}><FaMagnifyingGlass /></button>
    </section>
  );
}
SearchBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  searchDate: PropTypes.object.isRequired,
  setSearchDate: PropTypes.func.isRequired,
};

export default SearchBar;
