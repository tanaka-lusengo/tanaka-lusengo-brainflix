import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <div className="button__container">
      <img className="button__icon" src={props.iconSrc} alt={props.iconAlt} />
      <button className="button__button">{props.buttonName}</button>
    </div>
  );
}

export default Button;
