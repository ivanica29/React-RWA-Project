import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from "redux-saga";
import { watchWeather} from "./sagas";

import App from './containers/App';
import reducers from './reducers';

import 'bootstrap/scss/bootstrap.scss';

const sagaMiddleware = createSagaMiddleware();

// const createStoreWithMiddleware =
//   applyMiddleware(sagaMiddleware)(createStore);

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

window.store = store;

sagaMiddleware.run(watchWeather);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>),

  document.querySelector('#root'));
