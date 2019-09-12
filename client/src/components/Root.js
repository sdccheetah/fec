import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/products/:id" component={App} />
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;