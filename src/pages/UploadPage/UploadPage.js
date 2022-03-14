import React from "react";
import { useHistory } from "react-router-dom";
import "./UploadPage.scss";
import { PageDivideUploadMobile } from "../../Components/ComponentItems/PageDivide/PageDivide";
import { PageDivideUploadTablet } from "../../Components/ComponentItems/PageDivide/PageDivide";
import { ButtonPublish } from "../../Components/ComponentItems/Button/Button";
import { handleUploadComplete } from "../../utilities/utilities";
import publishIcon from "../../assets/icons/publish.svg";
import uploadVideoPreview from "../../assets/images/Upload-video-preview.jpg";
import { POST_VIDEO } from "../../api/endpoints";
import axios from "axios";

function UploadPage() {
  // Form functionality code block for upload page
  const newUploadPost = (titleVal, descriptionVal) => {
    return {
      title: titleVal,
      description: descriptionVal,
    };
  };

  // axios promise to POST comment for upload page
  const postUploadCall = (titleVal, descriptionVal) => {
    axios.post(POST_VIDEO, newUploadPost(titleVal, descriptionVal));
  };

  // useHistory react hook to go to home page
  const history = useHistory();
  const handleHomeClick = () => {
    history.push("/home");
  };

  // Form POST comment event handler functionality for upload page
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let titleVal = form.title.value;
    let descriptionVal = form.description.value;
    postUploadCall(titleVal, descriptionVal);
    form.reset();
    handleUploadComplete();
    handleHomeClick();
  };

  return (
    <>
      <PageDivideUploadMobile />
      <div className="upload">
        <div className="upload__main-conatiner">
          <h1 className="upload__title">Upload Video</h1>
          <PageDivideUploadTablet />
          <form className="upload__form" onSubmit={handleUploadSubmit}>
            <div className="upload__form-container">
              {/* video preview */}
              <div className="upload__form-video-container">
                <label className="upload__form-label">
                  <h3 className="upload__form-title-thumbnail upload__form-title ">
                    VIDEO THUMBNAIL
                  </h3>
                </label>
                <video
                  className="upload__video-preview"
                  poster={uploadVideoPreview}
                ></video>
              </div>
              {/* title description */}
              <div className="upload__form-input-button-container">
                <label className="upload__form-label">
                  <h3 className="upload__form-title">TITLE YOUR VIDEO</h3>
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Add a title to your video"
                    className="upload__form-text-input upload__form-text-input-title"
                    name="title"
                    required
                  />
                </div>
                {/* video description */}
                <label className="upload__form-label">
                  <h3 className="upload__form-title">
                    ADD A VIDEO DESCRIPTION
                  </h3>
                </label>
                <textarea
                  type="text"
                  placeholder="Add a description to your video"
                  className="upload__form-text-input upload__form-text-input-description"
                  name="description"
                  required
                ></textarea>
              </div>
            </div>
            <PageDivideUploadTablet />
            {/* submit & cancel button */}
            <div className="upload__button-cancel-container">
              <ButtonPublish
                iconSrc={publishIcon}
                iconAlt={"upload video icon"}
                buttonName={"PUBLISH"}
              />
              <div className="upload__cancel-button-container">
                <button
                  className="upload__cancel-button"
                  onClick={() => (window.location.href = "/")}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
