import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/index';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));