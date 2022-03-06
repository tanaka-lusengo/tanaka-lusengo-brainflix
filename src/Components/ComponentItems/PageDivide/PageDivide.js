import React from "react";
import "./PageDivide.scss";

function PageDivideMobile() {
  return <hr className="page-divide page-divide__item--mobile" />;
}

function PageDivideTablet() {
  return <hr className="page-divide page-divide__item--display-tablet" />;
}

function PageDivideUploadMobile() {
  return <hr className="page-divide page-divide__item--upload-page-mobile" />;
}

function PageDivideUploadTablet() {
  return <hr className="page-divide page-divide__item--upload-page-tablet" />;
}

export {
  PageDivideMobile,
  PageDivideTablet,
  PageDivideUploadMobile,
  PageDivideUploadTablet,
};
