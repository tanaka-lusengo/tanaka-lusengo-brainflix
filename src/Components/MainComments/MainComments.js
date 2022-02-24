import React from "react";
import PageDivideTablet from "../Components/PageDivide/PageDivideTablet";
import FormField from "../Components/FormField/FormField";
import "./MainComments.scss";

function MainComments(props) {
  return (
    <section className="comments">
      <p>(comments counter-interpolate) Comments</p>
      <div className="comments__main-conatiner">
        <h3 className="comments__title">JOIN THE CONVERSATION</h3>
      </div>
      <div className="comments__input-container">
        <div className="comments__avatar comments__avatar-form"></div>
        <FormField />
      </div>
      <PageDivideTablet />
    </section>
  );
}

export default MainComments;
