import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';
import reviewsList from './reviewsListReducer.js';
import reviewsMeta from './reviewsMetaReducer.js';

const rootReducer = combineReducers ({
  mainItem: mainItem,
  reviewsList,
  reviewsMeta
});

export default rootReducer;