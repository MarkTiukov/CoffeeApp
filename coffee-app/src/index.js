import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "antd/dist/antd.dark.css";
import Cashier from './components/cashier/cashier';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/cashier" element={<Cashier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);
