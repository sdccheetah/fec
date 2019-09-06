import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';
import questions from './QAReducer.js';
import reviewsList from './reviewsListReducer.js';
import reviewsMeta from './reviewsMetaReducer.js';
import reviewsDefaults from './reviewsDefaultsReducer.js';

const rootReducer = combineReducers({
  mainItem: mainItem,
  questions: questions,
  reviewsList,
  reviewsMeta,
  reviewsDefaults
});

export default rootReducer;
