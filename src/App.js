import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import UploadPage from "./pages/UploadPage/UploadPage";

class App extends Component {
  state = {
    currentAsideVideoList: videos.slice(1),
    currentVideo: videoDetails,
    videoDetailsAsideList: videos,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <Home
                currentVideo={this.state.currentVideo[0]}
                mainAsideObj={this.state.currentAsideVideoList}
                {...routerProps}
              />
            )}
          />
          {/* new video details page to load videos that have been clicked */}
          <Route
            path="/video-details/:videoId"
            render={(routerProps) => {
              const clickedVideo = this.state.currentVideo.find(
                (video) => video.id === routerProps.match.params.videoId
              );
              return (
                <VideoDetails
                  mainAsideObj={this.state.videoDetailsAsideList}
                  clickedVideo={clickedVideo}
                  {...routerProps}
                />
              );
            }}
          />

          <Route path="/upload-page" component={UploadPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
