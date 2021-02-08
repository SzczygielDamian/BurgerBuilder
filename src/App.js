import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Page from "./components/Page";
import ToolBar from "./UI/ToolBar/ToolBar";

import "./App.css";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className="App-main">
        <Router>
          <ToolBar />
          <Page />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
