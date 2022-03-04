import "./SelectedVideos.scss";
import { HeroVideoClicked } from "../../Components/HeroVideo/HeroVideo";
import { MainContentClicked } from "../../Components/MainContent/MainContent";
import { CommentsClicked } from "../../Components/Comments/Comments";
import { AsideListClicked } from "../../Components/AsideList/AsideList";
import React from "react";

function SelectedVideos({ asideVideoList, clickedVideo, getAsideVideoList }) {
  return (
    <>
      <HeroVideoClicked clickedVideo={clickedVideo} />
      <div className="content-container">
        <div>
          <MainContentClicked clickedVideo={clickedVideo} />

          <CommentsClicked clickedVideo={clickedVideo} />
        </div>
        <AsideListClicked
          asideVideoList={asideVideoList}
          getAsideVideoList={getAsideVideoList}
          clickedVideo={clickedVideo}
        />
      </div>
    </>
  );
}

export default SelectedVideos;
