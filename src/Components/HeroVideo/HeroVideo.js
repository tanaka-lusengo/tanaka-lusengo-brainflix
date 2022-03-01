import React from "react";
import "./HeroVideo.scss";

function HeroVideo({ currentVideo }) {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <video
          className="hero__video"
          controls
          poster={currentVideo.image}
        ></video>
      </div>
    </section>
  );
}

function HeroVideoClicked({ clickedVideo }) {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <video
          className="hero__video"
          controls
          poster={clickedVideo.image}
        ></video>
      </div>
    </section>
  );
}

export { HeroVideo, HeroVideoClicked };
