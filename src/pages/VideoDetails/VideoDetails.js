import "./VideoDetails.scss";
import { HeroVideoClicked } from "../../Components/HeroVideo/HeroVideo";
import { MainContentClicked } from "../../Components/MainContent/MainContent";
import { CommentsClicked } from "../../Components/Comments/Comments";
import { AsideListClicked } from "../../Components/AsideList/AsideList";
import React from "react";

function VideoDetails({ mainAsideObj, clickedVideo }) {
  return (
    <>
      <HeroVideoClicked clickedVideo={clickedVideo} />
      <div className="content-container">
        <div>
          <MainContentClicked clickedVideo={clickedVideo} />

          <CommentsClicked clickedVideo={clickedVideo} />
        </div>
        <AsideListClicked
          mainAsideObj={mainAsideObj}
          clickedVideo={clickedVideo}
        />
      </div>
    </>
  );
}

export default VideoDetails;
