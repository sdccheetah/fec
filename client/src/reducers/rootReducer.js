import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';
import reviewsList from './reviewsListReducer.js';

const rootReducer = combineReducers ({
  mainItem: mainItem,
  reviewsList
});

export default rootReducer;