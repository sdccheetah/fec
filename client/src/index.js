import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './components/App.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Root from './components/Root.js';


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );