import React from "react";
import "./HeroVideo.scss";

function HeroVideo({ selectedVideo }) {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <video
          className="hero__video"
          controls
          poster={selectedVideo.image}
        ></video>
      </div>
    </section>
  );
}

export default HeroVideo;
