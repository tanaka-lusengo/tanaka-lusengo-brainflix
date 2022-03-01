import React from "react";
import { Link } from "react-router-dom";
import "./AsideItem.scss";
import { v4 as uuidv4 } from "uuid";

function AsideItem({ asideItem }) {
  return (
    <div className="aside">
      <div className="aside__content-container">
        <div className="aside__img-container">
          <Link to={`/video-details/${asideItem.id}`} key={uuidv4()}>
            <img
              className="aside__img"
              src={asideItem.image}
              alt={asideItem.title}
            />
          </Link>
        </div>
        <div className="aside__text-container">
          <h3 className="aside__title">{asideItem.title}</h3>
          <p className="aside__channel">{asideItem.channel}</p>
        </div>
      </div>
    </div>
  );
}

function AsideItemClicked({ asideItem }) {
  return (
    <div className="aside">
      <div className="aside__content-container">
        <div className="aside__img-container">
          <Link to={`/video-details/${asideItem.id}`} key={uuidv4()}>
            <img
              className="aside__img"
              src={asideItem.image}
              alt={asideItem.title}
            />
          </Link>
        </div>
        <div className="aside__text-container">
          <h3 className="aside__title">{asideItem.title}</h3>
          <p className="aside__channel">{asideItem.channel}</p>
        </div>
      </div>
    </div>
  );
}

export { AsideItem, AsideItemClicked };
