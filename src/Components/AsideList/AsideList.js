import React from "react";
import "./AsideList.scss";
import AsideItem from "./AsideItem/AsideItem";
import { v4 as uuidv4 } from "uuid";

function AsideList({ asideVideoList, selectedVideo }) {
  return (
    <div className="asideList">
      <h2 className="asideList__title">NEXT VIDEOS</h2>
      {asideVideoList.map((asideitem) => {
        if (asideitem.id !== selectedVideo.id) {
          return <AsideItem key={uuidv4()} asideItem={asideitem} />;
        }
      })}
    </div>
  );
}

export default AsideList;
