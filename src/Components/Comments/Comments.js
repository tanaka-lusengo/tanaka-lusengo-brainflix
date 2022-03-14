import React from "react";
import "./Comments.scss";
import FormField from "../ComponentItems/FormField/FormField";
import DefaultComments from "./DefaultComments/DefaultComments";
import { PageDivideTablet } from "../ComponentItems/PageDivide/PageDivide";
import { v4 as uuidv4 } from "uuid";
import { sortByTimestamp } from "../../utilities/utilities";

function Comments({ selectedVideo, handleCommentSubmit }) {
  return (
    <section className="comments">
      <p className=" comments__comment-counter">
        {selectedVideo.comments.length} Comments
      </p>
      <div className="comments__input-container">
        <div className="comments__avatar-container-form">
          <div className="comments__avatar comments__avatar-form"></div>
        </div>
        <FormField handleCommentSubmit={handleCommentSubmit} />
      </div>
      <PageDivideTablet />
      {selectedVideo.comments.sort(sortByTimestamp).map((comment) => {
        return (
          <DefaultComments
            key={uuidv4()}
            commentItem={comment}
            NewComent={handleCommentSubmit}
          />
        );
      })}
    </section>
  );
}

export default Comments;
