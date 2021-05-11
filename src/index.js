import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './feature-module/routes';

ReactDOM.render(
  <Router>
    <Routes></Routes>
  </Router>,
  document.getElementById('root')
)