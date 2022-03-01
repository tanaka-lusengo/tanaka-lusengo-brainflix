import React from "react";
import "./Comments.scss";
import FormField from "../Components/FormField/FormField";
import DefaultComments from "./DefaultComments/DefaultComments";
import { PageDivideTablet } from "../Components/PageDivide/PageDivide";
import { v4 as uuidv4 } from "uuid";

function Comments({ currentVideo }) {
  return (
    <section className="comments">
      <p className="comments__comment-counter">{`${currentVideo.comments.length} Comments`}</p>
      <div className="comments__input-container">
        <div className="comments__avatar-container">
          <div className="comments__avatar comments__avatar-form"></div>
        </div>

        <FormField />
      </div>
      <PageDivideTablet />

      {currentVideo.comments.map((comment) => {
        return <DefaultComments key={uuidv4()} commentItem={comment} />;
      })}
    </section>
  );
}

function CommentsClicked({ clickedVideo }) {
  return (
    <section className="comments">
      <p className="comments__comment-counter">{`${clickedVideo.comments.length} Comments`}</p>
      <div className="comments__input-container">
        <div className="comments__avatar-container">
          <div className="comments__avatar comments__avatar-form"></div>
        </div>

        <FormField />
      </div>
      <PageDivideTablet />

      {clickedVideo.comments.map((comment) => {
        return <DefaultComments key={uuidv4()} commentItem={comment} />;
      })}
    </section>
  );
}

export { Comments, CommentsClicked };
