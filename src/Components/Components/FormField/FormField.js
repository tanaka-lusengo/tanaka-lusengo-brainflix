import React from "react";
import "./FormField.scss";
import Button from "../Button/Button";
import commentIcon from "../../../assets/icons/add_comment.svg";

function FormField() {
  return (
    <form className="form">
      {/* comment box */}
      <label for="form-input-comment" className="form__label">
        <h3 className="form-sub-title">COMMENT</h3>
      </label>
      <textarea
        type="text"
        placeholder="Add a new comment"
        className="form__input form__input-comment"
        name="form-input-comment"
      ></textarea>
      {/* submit button */}
      <Button
        iconSrc={commentIcon}
        iconAlt={"add comment icon"}
        buttonName={"COMMENT"}
      />
    </form>
  );
}

export default FormField;
