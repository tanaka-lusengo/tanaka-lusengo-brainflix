import React from "react";
import "./FormField.scss";
import { ButtonComment } from "../Button/Button";
import commentIcon from "../../../assets/icons/add_comment.svg";

function FormField() {
  return (
    <form className="form">
      <label className="form__label">
        <h3 className="form__title">JOIN THE CONVERSATION</h3>
      </label>
      {/* name container */}
      <label className="form__label">
        <h3 className="form__title">NAME</h3>
      </label>
      <input
        className="form__text-input form__text-input-name"
        type="text"
        placeholder="Add your name"
        name="userName"
        required
      />
      {/* comment container */}
      <label className="form__label">
        <h3 className="form__title">COMMENT</h3>
      </label>
      <div className="form__input-button-container">
        <textarea
          type="textarea"
          placeholder="Add a new comment"
          className="form__text-input form__text-input-coment"
          name="comment"
          required
        ></textarea>
        {/* submit button */}
        <ButtonComment
          iconSrc={commentIcon}
          iconAlt={"add comment icon"}
          buttonName={"COMMENT"}
        />
      </div>
    </form>
  );
}

export default FormField;
