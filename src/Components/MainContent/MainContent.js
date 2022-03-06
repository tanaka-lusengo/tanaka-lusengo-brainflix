import React from "react";
import "./MainContent.scss";
import {
  PageDivideMobile,
  PageDivideTablet,
} from "../../Components/ComponentItems/PageDivide/PageDivide";
import { Timestamp } from "../../utilities/utilities";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function MainContent({ selectedVideo }) {
  return (
    <>
      <main className="main">
        <section className="main__content">
          <div className="main__title-container">
            <h1 className="main__title">{selectedVideo.title}</h1>
          </div>
          <PageDivideMobile />
          <div className="main__details-container">
            <div className="main__details-left">
              <p className="main__data-channel">{selectedVideo.channel}</p>
              <p className="main__data-timestamp">
                {Timestamp(selectedVideo.timestamp)}
              </p>
            </div>
            <div className="main__details-right">
              <div className="main__sub-details-right main__sub-details-right-views">
                <img
                  className="main__data-views-icon"
                  src={viewsIcon}
                  alt="views icon"
                />
                <p className="main__data-views">{selectedVideo.views}</p>
              </div>
              <div className="main__sub-details-right main__sub-details-right-likes">
                <img
                  className="main__data-likes-icon"
                  src={likesIcon}
                  alt="likes icon"
                />
                <p className="main__data-likes">{selectedVideo.likes}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageDivideTablet />
      <p className="main__data-description">{selectedVideo.description}</p>
    </>
  );
}

export default MainContent;
