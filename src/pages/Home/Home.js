import React, { useState, useEffect } from "react";
import LoadingSpin from "react-loading-spin";
import "./Home.scss";
import HeroVideo from "../../Components/HeroVideo/HeroVideo";
import MainContent from "../../Components/MainContent/MainContent";
import Comments from "../../Components/Comments/Comments";
import AsideList from "../../Components/AsideList/AsideList";
import { GET_VIDEOS } from "../../api/endpoints";
import { GET_VIDEOS_BY_ID } from "../../api/endpoints";
import { POST_COMMENTS_BY_ID } from "../../api/endpoints";
import axios from "axios";

function Home(props) {
  // hook states
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [asideVideoList, setAsideVideoList] = useState([]);

  // axios promise to GET all videos - used for aside list of videos
  const getAllVideos = () => axios.get(GET_VIDEOS);

  // axios promise  to GET specific or selected video details to populate home page and comments
  const getSelectedVideo = (videoId) => axios.get(GET_VIDEOS_BY_ID(videoId));

  // async function to call above promises and populate current state
  const populateState = async () => {
    try {
      const response1 = await getAllVideos();
      const response2 = await getSelectedVideo(response1.data[0].id);
      setAsideVideoList(response1.data.slice(1));
      setSelectedVideo(response2.data);
    } catch (e) {
      console.log("populateState() error -->", e);
    }
  };

  // 1st useEffect that calls async function populateSate()
  useEffect(() => {
    try {
      populateState();
    } catch (e) {
      console.log("useEffect1 error -->", e);
    }
  }, []);

  // 2nd useEffect that checks when side video is clicked to update main video content
  useEffect(() => {
    const changeVid = async () => {
      try {
        const response1 = await getAllVideos();
        // when side video is clicked, update selected video with matching id
        let newId = props.match.params.videoId;
        if (newId) {
          const response2 = await getSelectedVideo(newId);
          setAsideVideoList(response1.data);
          setSelectedVideo(response2.data);
        } else {
          // when home page is clicked - update selected video with original video id at [0] index.
          const response2 = await getSelectedVideo(response1.data[0].id);
          setAsideVideoList(response1.data);
          setSelectedVideo(response2.data);
        }
      } catch (e) {
        console.log("useEffect2 error -->", e);
      }
    };
    changeVid();
  }, [props.match.params.videoId]);

  //------------------------------------------------------------------------------------------------
  // Form functionality code block for home page
  const newPostComment = (commentVal) => {
    return {
      name: "Tanaka Lusengo",
      comment: commentVal,
    };
  };

  // axios promise to POST comment for home page
  const postCommentCall = (id, commentVal) => {
    axios.post(POST_COMMENTS_BY_ID(id), newPostComment(commentVal));
  };

  // async function to call above promises and populate current state
  const populateStateComment = async () => {
    try {
      let newId = props.match.params.videoId;
      const response1 = await getAllVideos();
      const response2 = await getSelectedVideo(newId);
      setAsideVideoList(response1.data);
      setSelectedVideo(response2.data);
    } catch (e) {
      console.log("populateStateComment() error -->", e);
    }
  };

  // Form POST comment event handler functionality for home page
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let commentVal = form.comment.value;
    let newId = props.match.params.videoId;
    const response = await getAllVideos();

    try {
      if (newId) {
        postCommentCall(newId, commentVal);
        populateStateComment();
      } else {
        postCommentCall(response.data[0].id, commentVal);
        populateState();
      }
    } catch (e) {
      console.log("handleCommentSubmit() error -->", e);
    }
    form.reset();
  };

  // safeguard function for when data has not been fetched from api
  if (!selectedVideo) {
    return (
      <div className="home__loading">
        <LoadingSpin />
      </div>
    );
  }

  return (
    <>
      <HeroVideo selectedVideo={selectedVideo} />
      <div className="home__content-container">
        <div className="home__content-container-left">
          <MainContent selectedVideo={selectedVideo} />
          <Comments
            selectedVideo={selectedVideo}
            handleCommentSubmit={handleCommentSubmit}
          />
        </div>
        <AsideList
          asideVideoList={asideVideoList}
          selectedVideo={selectedVideo}
        />
      </div>
    </>
  );
}

export default Home;
