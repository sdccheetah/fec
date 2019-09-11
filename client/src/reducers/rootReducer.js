import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';
import questions from './QAReducer.js';
import reviewsList from './reviewsListReducer.js';
import reviewsMeta from './reviewsMetaReducer.js';
import reviewsDefaults from './reviewsDefaultsReducer.js';
import searchKeyword from './searchReducer.js';

const rootReducer = combineReducers({
  mainItem,
  questions,
  searchKeyword,
  reviewsList,
  reviewsMeta,
  reviewsDefaults
});

export default rootReducer;
