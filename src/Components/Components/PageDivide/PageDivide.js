import React from "react";
import "./PageDivide.scss";

function PageDivideMobile() {
  return <hr className="page-divide page-divide__item--mobile" />;
}

function PageDivideTablet() {
  return <hr className="page-divide page-divide__item--display-tablet" />;
}

export { PageDivideMobile, PageDivideTablet };
