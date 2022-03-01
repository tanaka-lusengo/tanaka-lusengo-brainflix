import React from "react";
import "./AsideList.scss";
import { AsideItem } from "./AsideItem/AsideItem";
import { AsideItemClicked } from "./AsideItem/AsideItem";
import { v4 as uuidv4 } from "uuid";

function AsideList({ mainAsideObj }) {
  return (
    <div className="asideList">
      <h2 className="asideList__title">NEXT VIDEOS</h2>
      {mainAsideObj.map((asideitem) => {
        return <AsideItem key={uuidv4()} asideItem={asideitem} />;
      })}
    </div>
  );
}

function AsideListClicked({ mainAsideObj, clickedVideo }) {
  return (
    <div className="asideList">
      <h2 className="asideList__title">NEXT VIDEOS</h2>
      {mainAsideObj.map((asideitem) => {
        if (asideitem.id !== clickedVideo.id)
          return <AsideItemClicked key={uuidv4()} asideItem={asideitem} />;
      })}
    </div>
  );
}

export { AsideList, AsideListClicked };

// handleChangeVideo = (id) => {
//   this.setState({
//     currentVideo: this.state.mainideoDetails.filter((video) => {
//       let newVid;
//       if (video.id === id) {
//         newVid = video;
//       }
//       return newVid;
//     }),
//     asideVideoList: this.state.mainideoDetails.filter((list) => {
//       let newList;
//       if (list.id !== id) {
//         newList = list;
//       }
//       return newList;
//     }),
//   });
// };
