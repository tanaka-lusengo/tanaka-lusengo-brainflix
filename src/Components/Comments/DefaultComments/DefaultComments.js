import React from "react";
import "./DefaultComments.scss";
import { PageDivideTablet } from "../../ComponentItems/PageDivide/PageDivide";
import { Timestamp } from "../../../utilities/utilities";

function DefaultComments({ commentItem }) {
  return (
    <>
      <div className="comments">
        <div className="comments__post-container">
          <div className="comments__avatar-container">
            <div className="comments__avatar comments__avatar-past"></div>
          </div>

          <div className="comments__post-user-input">
            <div className="comments__title-date-container">
              <h3 className="comments__sub-title comments__user-name">
                {commentItem.name}
              </h3>

              <h3 className="comments__sub-title comments__date">
                {Timestamp(commentItem.timestamp)}
              </h3>
            </div>
            <p className="comments__text">{commentItem.comment}</p>
          </div>
        </div>
      </div>
      <PageDivideTablet />
    </>
  );
}

export default DefaultComments;
