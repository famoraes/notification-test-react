import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import firebase from 'firebase';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const firebaseConf = {
  apiKey: "AIzaSyAgF4vh1M0z4EKN3F-VHxZ63WIP_XXkrDw",
  authDomain: "sellercrowd-3fc75.firebaseapp.com",
  databaseURL: "https://sellercrowd-3fc75.firebaseio.com",
  storageBucket: "",
};

// Initialize firebase
firebase.initializeApp(firebaseConf);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
