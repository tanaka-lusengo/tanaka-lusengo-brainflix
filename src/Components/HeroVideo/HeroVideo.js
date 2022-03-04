import React from "react";
import "./HeroVideo.scss";
// import { API_KEY } from "../../api/endpoints";

function HeroVideo({ currentVideo }) {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <video
          className="hero__video"
          controls
          poster={currentVideo.image}
          // src={`${currentVideo.video}${API_KEY}`}
        ></video>
      </div>
    </section>
  );
}

export default HeroVideo;
