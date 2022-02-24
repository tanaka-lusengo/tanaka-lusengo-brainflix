import React from "react";
import "./MainContent.scss";
import PageDivideMobile from "../Components/PageDivide/PageDivideMobile";
import PageDivideTablet from "../Components/PageDivide/PageDivideTablet";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function MainContent(props) {
  return (
    <main className="main">
      <section className="main__content">
        <div className="main__title-container">
          <h2 className="main__title">PropsTitle</h2>
        </div>
        <PageDivideMobile />
        <div className="main__details-container">
          <div className="main__details-left">
            <p className="main__data-channel">PropsChannel</p>
            <p className="main__data-timestamp">PropsTimestamp</p>
          </div>
          <div className="main__details-right">
            <div className="main__sub-details-right">
              <img
                className="main__data-views-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="main__data-views">PropsNoViews</p>
            </div>
            <div className="main__sub-details-right">
              <img
                className="main__data-likes-icon"
                src={likesIcon}
                alt="likes icon"
              />
              <p className="main__data-likes">PropsLikes</p>
            </div>
          </div>
        </div>
        <PageDivideTablet />
        <p className="main__data-description">PropsDescription</p>
      </section>
    </main>
  );
}

export default MainContent;
