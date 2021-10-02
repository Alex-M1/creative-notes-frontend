import './translate';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import {
  routerMiddleware,
} from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { rootReducer, rootSaga } from './store';

import App from './components/App/App';

const history = createBrowserHistory();

const saga = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(saga, reduxRouterMiddleware)));
saga.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>  
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
