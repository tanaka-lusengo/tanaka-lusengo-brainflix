import React from "react";
import "./SearchField.scss";
import searchIcon from "../../../assets/icons/search.svg";

function SearchField() {
  return (
    <div className="search-field">
      <img
        className="search-field__nav-search-icon"
        src={searchIcon}
        alt="search icon"
      />
      <input
        className="search-field__input--state"
        type="search"
        name="search"
        placeholder="Search"
        required
      />
    </div>
  );
}

export default SearchField;
