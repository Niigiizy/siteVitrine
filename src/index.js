import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/configureStore';
import './index.css';
import AppWithRouter from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
