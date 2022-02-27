import React from "react";
import "./FormField.scss";
import { ButtonComment } from "../Button/Button";
import commentIcon from "../../../assets/icons/add_comment.svg";

function FormField() {
  return (
    <form className="form">
      {/* comment box */}
      <label className="form__label">
        <h3 className="form__title">JOIN THE CONVERSATION</h3>
      </label>
      <div className="form__input-button-container">
        <textarea
          type="text"
          placeholder="Add a new comment"
          className="form__text-input"
          name="form-input-comment"
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
