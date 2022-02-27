import React from "react";
import "./Button.scss";

function ButtonUpload({ iconSrc, iconAlt, buttonName }) {
  return (
    <div className="button__container button__container-upload">
      <img className="button__icon" src={iconSrc} alt={iconAlt} />
      <button className="button__button">{buttonName}</button>
    </div>
  );
}

function ButtonComment({ iconSrc, iconAlt, buttonName }) {
  return (
    <div className="button__container button__container-comment">
      <img className="button__icon" src={iconSrc} alt={iconAlt} />
      <button className="button__button">{buttonName}</button>
    </div>
  );
}

export { ButtonUpload, ButtonComment };
