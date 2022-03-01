import "./Home.scss";
import { HeroVideo } from "../../Components/HeroVideo/HeroVideo";
import { MainContent } from "../../Components/MainContent/MainContent";
import { Comments } from "../../Components/Comments/Comments";
import { AsideList } from "../../Components/AsideList/AsideList";

import React from "react";

function Home({ currentVideo, mainAsideObj }) {
  return (
    <>
      <HeroVideo currentVideo={currentVideo} />
      <div className="content-container">
        <div>
          <MainContent currentVideo={currentVideo} />

          <Comments currentVideo={currentVideo} />
        </div>
        <AsideList mainAsideObj={mainAsideObj} />
      </div>
    </>
  );
}

export default Home;
