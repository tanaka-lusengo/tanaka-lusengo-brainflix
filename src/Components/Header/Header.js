import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import SearchField from "../ComponentItems/SearchField/SearchField";
import { ButtonUpload } from "../ComponentItems/Button/Button";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__main-container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="brainflix logo" />
        </Link>
        <nav className="header__nav">
          <div className="header__nav-search-avatar-container">
            <SearchField />
            <div className="avatar avatar__img--display-mobile"></div>
          </div>
          <Link to="/upload">
            <ButtonUpload
              buttonName={"UPLOAD"}
              iconSrc={uploadIcon}
              iconAlt={"upload button icon"}
            />
          </Link>
          <div className="avatar avatar__img--display-tablet"></div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
