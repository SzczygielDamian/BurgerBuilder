import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from './components/Page';
import ToolBar from './UI/ToolBar/ToolBar';


const App = () => {
  return (
    <div>
      <Router>
        <ToolBar />
        <Page/>
      </Router>
    </div>
  );
}

export default App;
