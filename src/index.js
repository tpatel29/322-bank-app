import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './compoents/App';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Route path="/" exact component={App} />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);