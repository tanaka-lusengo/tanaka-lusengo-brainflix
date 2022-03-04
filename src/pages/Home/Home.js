import "./Home.scss";
import HeroVideo from "../../Components/HeroVideo/HeroVideo";
import MainContent from "../../Components/MainContent/MainContent";
import Comments from "../../Components/Comments/Comments";
import AsideList from "../../Components/AsideList/AsideList";
import { GET_VIDEOS_API_URL } from "../../api/endpoints";
import { GET_VIDEOS_BY_ID_API_URL } from "../../api/endpoints";
import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component {
  state = {
    selectedVideo: null,
    asideVideoList: [],
  };

  getAllVideos = () => axios.get(GET_VIDEOS_API_URL);

  getSelectedVideo = (videoId) => axios.get(GET_VIDEOS_BY_ID_API_URL(videoId));

  async populateState() {
    const resolve1 = await this.getAllVideos();
    const resolve2 = await this.getSelectedVideo(resolve1.data[0].id);
    this.setState({
      asideVideoList: resolve1.data.slice(1),
      selectedVideo: resolve2.data,
    });
  }

  componentDidMount() {
    console.log("Component Did Mount");
    let videoId = this.props.match.params.videoId;
    if (videoId) {
      this.getSelectedVideo(videoId);
    } else {
      this.populateState();
    }
  }

  componentDidUpdate(prevProps) {
    console.log("Component Did Update");
    let newId = this.props.match.params.videoId;
    if (newId !== prevProps.match.params.videoId) {
      (async () => {
        const resolve1 = await this.getSelectedVideo(newId);
        const resolve2 = await this.getAllVideos();
        this.setState({
          selectedVideo: resolve1.data,
          asideVideoList: resolve2.data,
        });
      })();
    }
  }

  render() {
    console.log("Component Did Render");

    if (!this.state.selectedVideo) {
      return <p>Page Loading...</p>;
    }

    return (
      <>
        <HeroVideo currentVideo={this.state.selectedVideo} />
        <div className="content-container">
          <div>
            <MainContent currentVideo={this.state.selectedVideo} />

            <Comments currentVideo={this.state.selectedVideo} />
          </div>
          <AsideList
            asideVideoList={this.state.asideVideoList}
            currentVideo={this.state.selectedVideo}
          />
        </div>
      </>
    );
  }
}
