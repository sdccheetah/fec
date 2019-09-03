import { combineReducers } from 'redux';
import list from './listReducer.js';

const rootReducer = combineReducers ({
  list: list
});

export default rootReducer;