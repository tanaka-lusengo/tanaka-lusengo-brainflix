import React from "react";
import "./Header.scss";
import SearchField from "../Components/SearchField/SearchField";
import { ButtonUpload } from "../Components/Button/Button";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__main-container">
        <img className="header__logo" src={logo} alt="brainflix logo" />
        <nav className="header__nav">
          <div className="header__nav-search-avatar-container">
            <SearchField />
            <div className="avatar avatar__img--display-mobile"></div>
          </div>
          <ButtonUpload
            buttonName={"UPLOAD"}
            iconSrc={uploadIcon}
            iconAlt={"upload button icon"}
          />
          <div className="avatar avatar__img--display-tablet"></div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
