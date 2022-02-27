import React from "react";
import "./AsideItem.scss";

function AsideItem({ asideItem, handleChangeVideo }) {
  return (
    <div className="aside">
      <div className="aside__content-container">
        <div className="aside__img-container">
          <img
            className="aside__img"
            src={asideItem.image}
            alt={asideItem.title}
            onClick={() => handleChangeVideo(asideItem.id)}
          />
        </div>

        <div className="aside__text-container">
          <h3 className="aside__title">{asideItem.title}</h3>
          <p className="aside__channel">{asideItem.channel}</p>
        </div>
      </div>
    </div>
  );
}

export default AsideItem;
