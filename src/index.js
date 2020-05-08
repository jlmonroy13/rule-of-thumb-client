import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import IconsLibrary from 'components/Icon/IconsLibrary';
import App from 'components/App';

import * as serviceWorker from './serviceWorker';

import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <IconsLibrary />
    <App />
    <ToastContainer autoClose={10000} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
