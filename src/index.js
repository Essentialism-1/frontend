import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import to be created reducer

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// also waiting on reducer ^^

ReactDOM.render(
  <Provider >
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
