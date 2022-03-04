import React from "react";
import "./PageDivide.scss";

function PageDivideMobile() {
  return <hr className="page-divide page-divide__item--mobile" />;
}

function PageDivideTablet() {
  return <hr className="page-divide page-divide__item--display-tablet" />;
}

function PageDivideUploadPage() {
  return <hr className="page-divide page-divide__item--upload-page" />;
}

export { PageDivideMobile, PageDivideTablet, PageDivideUploadPage };
