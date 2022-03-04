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

  // axios promise to GET all videos - used for aside list of videos
  getAllVideos = () => axios.get(GET_VIDEOS_API_URL);

  // axios promise  to GET specific or selected video details to populate home page and comments
  getSelectedVideo = (videoId) => axios.get(GET_VIDEOS_BY_ID_API_URL(videoId));

  // async function to call above promises and populate current state
  async populateState() {
    const resolve1 = await this.getAllVideos();
    const resolve2 = await this.getSelectedVideo(resolve1.data[0].id);
    this.setState({
      asideVideoList: resolve1.data.slice(1),
      selectedVideo: resolve2.data,
    });
  }
  catch(e) {
    console.log("populateState() error -->", e);
  }

  // mounting phase, calls async function populateSate()
  componentDidMount() {
    this.populateState();
  }

  // checks when side video is clicked if current id === prev id
  componentDidUpdate(prevProps) {
    let newId = this.props.match.params.videoId;
    if (newId !== prevProps.match.params.videoId) {
      (async () => {
        try {
          const resolve1 = await this.getAllVideos();
          // when side video is clicked, update selected video with matching id
          if (newId) {
            const resolve2 = await this.getSelectedVideo(newId);
            this.setState({
              asideVideoList: resolve1.data,
              selectedVideo: resolve2.data,
            });
          } else {
            // when home page is clicked - update selected video with original video id at [0] index.
            const resolve2 = await this.getSelectedVideo(resolve1.data[0].id);
            this.setState({
              asideVideoList: resolve1.data,
              selectedVideo: resolve2.data,
            });
          }
        } catch (e) {
          console.log("componentDidUpdate() error -->", e);
        }
      })();
    }
  }

  // Form with state function

  render() {
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
