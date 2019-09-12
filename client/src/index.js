import React from "react";
import ReactDOM from "react-dom";
import store from './store/store.js';
import Root from './components/Root.js';


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

