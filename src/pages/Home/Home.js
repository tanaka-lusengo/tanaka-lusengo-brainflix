import React, { Component } from "react";
import "./Home.scss";
import HeroVideo from "../../Components/HeroVideo/HeroVideo";
import MainContent from "../../Components/MainContent/MainContent";
import Comments from "../../Components/Comments/Comments";
import AsideList from "../../Components/AsideList/AsideList";
import { GET_VIDEOS } from "../../api/endpoints";
import { GET_VIDEOS_BY_ID } from "../../api/endpoints";
import { POST_COMMENTS_BY_ID } from "../../api/endpoints";
import axios from "axios";

export default class Home extends Component {
  state = {
    selectedVideo: null,
    asideVideoList: [],
  };

  // axios promise to GET all videos - used for aside list of videos
  getAllVideos = () => axios.get(GET_VIDEOS);

  // axios promise  to GET specific or selected video details to populate home page and comments
  getSelectedVideo = (videoId) => axios.get(GET_VIDEOS_BY_ID(videoId));

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

  async populateStateComment(prevProps) {
    let newId = this.props.match.params.videoId;
    const resolve1 = await this.getAllVideos();
    const resolve2 = await this.getSelectedVideo(newId);
    this.setState({
      asideVideoList: resolve1.data,
      selectedVideo: resolve2.data,
    });
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
          const response1 = await this.getAllVideos();
          // when side video is clicked, update selected video with matching id
          if (newId) {
            const response2 = await this.getSelectedVideo(newId);
            this.setState({
              asideVideoList: response1.data,
              selectedVideo: response2.data,
            });
          } else {
            // when home page is clicked - update selected video with original video id at [0] index.
            const response2 = await this.getSelectedVideo(response1.data[0].id);
            this.setState({
              asideVideoList: response1.data,
              selectedVideo: response2.data,
            });
          }
        } catch (e) {
          console.log("componentDidUpdate() error -->", e);
        }
      })();
    }
  }

  // Form functionality code block for home page
  newPostComment = (commentVal) => {
    return {
      name: "Tanaka Lusengo",
      comment: commentVal,
    };
  };

  // axios promise to POST comment for home page
  postCommentCall = (id, commentVal) => {
    axios.post(POST_COMMENTS_BY_ID(id), this.newPostComment(commentVal));
  };

  // Form POST comment event handler functionality for home page
  handleCommentSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let commentVal = form.comment.value;
    let newId = this.props.match.params.videoId;
    const response = await this.getAllVideos();

    try {
      if (newId) {
        this.postCommentCall(newId, commentVal);
        this.populateStateComment();
      } else {
        this.postCommentCall(response.data[0].id, commentVal);
        this.populateState();
      }
    } catch (e) {
      console.log("handleCommentSubmit() error -->", e);
    }
    form.reset();
  };

  render() {
    if (!this.state.selectedVideo) {
      return <p>Page Loading...</p>;
    }

    return (
      <>
        <HeroVideo selectedVideo={this.state.selectedVideo} />
        <div className="content-container">
          <div>
            <MainContent selectedVideo={this.state.selectedVideo} />

            <Comments
              selectedVideo={this.state.selectedVideo}
              handleCommentSubmit={this.handleCommentSubmit}
            />
          </div>
          <AsideList
            asideVideoList={this.state.asideVideoList}
            selectedVideo={this.state.selectedVideo}
          />
        </div>
      </>
    );
  }
}
