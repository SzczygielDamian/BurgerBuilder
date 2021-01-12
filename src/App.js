import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from './components/Page';
import ToolBar from './UI/ToolBar/ToolBar';

import './App.css';


const App = () => {
  return (
    <div className="App-main">
      <Router>
        <ToolBar />
        <Page/>
      </Router>
    </div>
  );
}

export default App;
