import React from "react";
import "./MainContent.scss";
import {
  PageDivideMobile,
  PageDivideTablet,
} from "../../Components/Components/PageDivide/PageDivide";
import { Timestamp } from "../../utilities/Timestamp/Timestamp";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function MainContent({ currentVideo }) {
  return (
    <>
      <main className="main">
        <section className="main__content">
          <div className="main__title-container">
            <h1 className="main__title">{currentVideo.title}</h1>
          </div>
          <PageDivideMobile />
          <div className="main__details-container">
            <div className="main__details-left">
              <p className="main__data-channel">{currentVideo.channel}</p>
              <p className="main__data-timestamp">
                {Timestamp(currentVideo.timestamp)}
              </p>
            </div>
            <div className="main__details-right">
              <div className="main__sub-details-right main__sub-details-right-views">
                <img
                  className="main__data-views-icon"
                  src={viewsIcon}
                  alt="views icon"
                />
                <p className="main__data-views">{currentVideo.views}</p>
              </div>
              <div className="main__sub-details-right main__sub-details-right-likes">
                <img
                  className="main__data-likes-icon"
                  src={likesIcon}
                  alt="likes icon"
                />
                <p className="main__data-likes">{currentVideo.likes}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageDivideTablet />
      <p className="main__data-description">{currentVideo.description}</p>
    </>
  );
}

function MainContentClicked({ clickedVideo }) {
  return (
    <>
      <main className="main">
        <section className="main__content">
          <div className="main__title-container">
            <h1 className="main__title">{clickedVideo.title}</h1>
          </div>
          <PageDivideMobile />
          <div className="main__details-container">
            <div className="main__details-left">
              <p className="main__data-channel">{clickedVideo.channel}</p>
              <p className="main__data-timestamp">
                {Timestamp(clickedVideo.timestamp)}
              </p>
            </div>
            <div className="main__details-right">
              <div className="main__sub-details-right main__sub-details-right-views">
                <img
                  className="main__data-views-icon"
                  src={viewsIcon}
                  alt="views icon"
                />
                <p className="main__data-views">{clickedVideo.views}</p>
              </div>
              <div className="main__sub-details-right main__sub-details-right-likes">
                <img
                  className="main__data-likes-icon"
                  src={likesIcon}
                  alt="likes icon"
                />
                <p className="main__data-likes">{clickedVideo.likes}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageDivideTablet />
      <p className="main__data-description">{clickedVideo.description}</p>
    </>
  );
}

export { MainContent, MainContentClicked };
