import './translate';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer, rootSaga } from './store';

import App from './components/App/App';

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
