import React from "react";
import "./AsideList.scss";
import AsideItem from "./AsideItem/AsideItem";
import { v4 as uuidv4 } from "uuid";

function MainAsideList({ mainAsideObj, handleChangeVideo }) {
  return (
    <div className="asideList">
      <h2 className="asideList__title">NEXT VIDEOS</h2>
      {mainAsideObj.map((asideitem) => {
        return (
          <AsideItem
            key={uuidv4()}
            handleChangeVideo={handleChangeVideo}
            asideItem={asideitem}
          />
        );
      })}
    </div>
  );
}

export default MainAsideList;
