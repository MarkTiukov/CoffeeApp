import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

import "antd/dist/antd.dark.css";

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById('root')
);
