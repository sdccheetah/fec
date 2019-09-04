import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';
import reviews from './reviewsReducer.js';

const rootReducer = combineReducers ({
  mainItem: mainItem,
  reviews
});

export default rootReducer;