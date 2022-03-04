import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import UploadPage from "./pages/UploadPage/UploadPage";

import React from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
        <Route
          path="/videos/:videoId"
          render={(renderProps) => <Home {...renderProps} />}
        />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </div>
  );
}
