import React from "react";
import "./UploadPage.scss";
import { PageDivideUploadPage } from "../../Components/Components/PageDivide/PageDivide";
import publishIcon from "../../assets/icons/publish.svg";
import { ButtonUpload } from "../../Components/Components/Button/Button";
import uploadVideoPreview from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
  return (
    <div className="uploadPage">
      <PageDivideUploadPage />
      <h1>Upload Video</h1>
      <form className="uploadPage__form">
        {/* video preview */}
        <label className="uploadPage__form-label">
          <h3 className="uploadPage__form-title">VIDEO THUMBNAIL</h3>
        </label>
        <video
          className="uploadPage__video-preview"
          src=""
          poster={uploadVideoPreview}
        ></video>
        {/* title */}
        <div className="uploadPage__form-input-button-container">
          <label className="uploadPage__form-label">
            <h3 className="uploadPage__form-title">TITLE YOUR VIDEO</h3>
          </label>
          <input
            type="text"
            placeholder="Add a title to your video"
            className="uploadPage__form-text-input"
            name="videoDescription"
            required
          />
          {/* video description */}
          <label className="uploadPage__form-label">
            <h3 className="uploadPage__form-title">ADD A VIDEO DESCRIPTION</h3>
          </label>
          <input
            type="text"
            placeholder="Add a description to your video"
            className="uploadPage__form-text-input"
            name="videoDescription"
            required
          />
          {/* submit button & Canel */}
          <div className="upload__button-cancel-container">
            <ButtonUpload
              iconSrc={publishIcon}
              iconAlt={"upload video icon"}
              buttonName={"PUBLISH"}
            />
            <input type="button" value="CANCEL" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
