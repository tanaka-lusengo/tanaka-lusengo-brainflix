import React from "react";
import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="brainflix logo" />
      <nav className="header__nav">
        <div className="header__nav-search-avatar-container">
          <div className="header__nav-search-container">
            <img
              className="header__nav-search-icon"
              src={searchIcon}
              alt="search icon"
            />
            <input
              className="header__nav-search-field--state"
              type="text"
              name="search"
              placeholder="Search"
              required
            />
          </div>

          <div className="header__nav-profile-avatar"></div>
        </div>
        <div className="header__nav-upload-button-container">
          <img
            className="header__nav-upload-icon"
            src={uploadIcon}
            alt="upload icon"
          />
          <button className="header__nav-button button">UPLOAD</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
