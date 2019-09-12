import React from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/products/:id" component={App} />
    </Router>
  </Provider>
);

// Root.propTypes = {

// }

export default Root;