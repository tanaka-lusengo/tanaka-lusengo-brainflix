import React, { Component } from "react";
import "./Home.scss";
import HeroVideo from "../../Components/HeroVideo/HeroVideo";
import MainContent from "../../Components/MainContent/MainContent";
import Comments from "../../Components/Comments/Comments";
import AsideList from "../../Components/AsideList/AsideList";
import { GET_VIDEOS_API_URL } from "../../api/endpoints";
import { GET_VIDEOS_BY_ID_API_URL } from "../../api/endpoints";
import { POST_COMMENTS_BY_ID } from "../../api/endpoints";
import axios from "axios";

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
    // checks for when selected video is chanaged, updates comment of selected video with matching id
    if (newId !== prevProps.match.params.videoId) {
      this.handleCommentSubmit = async (e) => {
        e.preventDefault();

        let form = e.target;
        let commentVal = form.comment.value;
        axios
          .post(POST_COMMENTS_BY_ID(newId), this.newPostComment(commentVal))
          .catch("componentDidUpdate handleCommentSubmit() error -->", e);
        form.reset();
      };
    }
  }

  // Form functionality code block
  newPostComment = (commentVal) => {
    return {
      name: "BrainStation Man",
      comment: commentVal,
    };
  };

  // axios promise to POST comment
  postCommentCall = (id, commentVal) => {
    axios.post(POST_COMMENTS_BY_ID(id), this.newPostComment(commentVal));
  };

  // Form POST coment event handler functionality
  handleCommentSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let commentVal = form.comment.value;
    const response = await this.getAllVideos();
    axios
      .post(
        POST_COMMENTS_BY_ID(response.data[0].id),
        this.newPostComment(commentVal)
      )
      .catch("Initial handleCommentSubmit() error -->", e);
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
