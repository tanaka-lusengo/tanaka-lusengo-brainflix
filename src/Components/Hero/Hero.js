import React from "react";
import "./Hero.scss";

function Hero(props) {
  return (
    <section class="hero">
      <div class="hero__layer">
        <div class="hero__video-container">
          <h1>PropsVideoImage</h1>
          {/* <img className="hero__data-video" src="PropsVideo" alt="PropsTitle" /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
