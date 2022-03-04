import React from "react";
import "./UploadPage.scss";
import { PageDivideUploadMobile } from "../../Components/ComponentItems/PageDivide/PageDivide";
import { PageDivideUploadTablet } from "../../Components/ComponentItems/PageDivide/PageDivide";
import publishIcon from "../../assets/icons/publish.svg";
import { ButtonPublish } from "../../Components/ComponentItems/Button/Button";
import uploadVideoPreview from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function UploadPage() {
  // let redirect = () => {
  //   alert("video is being Uploaded");
  //   return (window.location.href = "/");
  // };

  return (
    <>
      <PageDivideUploadMobile />
      <div className="upload">
        <div className="upload__main-conatiner">
          <h1 className="upload__title">Upload Video</h1>
          <PageDivideUploadTablet />
          <form className="upload__form">
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
                    name="videoDescription"
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
                  name="videoDescription"
                  required
                ></textarea>
              </div>
            </div>
            <PageDivideUploadTablet />
            {/* submit button & canel */}
            <div className="upload__button-cancel-container">
              <Link to="/">
                <ButtonPublish
                  iconSrc={publishIcon}
                  iconAlt={"upload video icon"}
                  buttonName={"PUBLISH"}
                  onClick={UploadPage}
                />
              </Link>
              <div className="upload__cancel-button-container">
                <input
                  className="upload__cancel-button"
                  type="button"
                  value="CANCEL"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
