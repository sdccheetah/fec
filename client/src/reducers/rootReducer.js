import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';

const rootReducer = combineReducers ({
  mainItem: mainItem
});

export default rootReducer;