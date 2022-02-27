import React, { Component } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import HeroVideo from "./Components/HeroVideo/HeroVideo";
import MainContent from "./Components/MainContent/MainContent";
import Comments from "./Components/Comments/Comments";
import AsideList from "./Components/AsideList/AsideList";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

class App extends Component {
  state = {
    mainideoDetails: videoDetails,
    asideVideoList: videos.slice(1),
    currentVideo: videoDetails,
  };

  handleChangeVideo = (id) => {
    this.setState({
      currentVideo: this.state.mainideoDetails.filter((video) => {
        let newVid;
        if (video.id === id) {
          newVid = video;
        }
        return newVid;
      }),
      asideVideoList: this.state.mainideoDetails.filter((list) => {
        let newList;
        if (list.id !== id) {
          newList = list;
        }
        return newList;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <HeroVideo currentVideo={this.state.currentVideo[0]} />
        <div className="content-container">
          <div className="content-container__left">
            <MainContent currentVideo={this.state.currentVideo[0]} />
            <Comments currentVideo={this.state.currentVideo[0]} />
          </div>

          <AsideList
            handleChangeVideo={this.handleChangeVideo}
            mainAsideObj={this.state.asideVideoList}
          />
        </div>
      </div>
    );
  }
}

export default App;
